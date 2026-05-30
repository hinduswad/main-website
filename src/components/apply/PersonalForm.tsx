"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { savePersonalDetails, uploadDocumentToServer } from "@/actions/application-actions";
import { ArrowRight, ArrowLeft, Upload, CheckCircle2, AlertCircle, FileText, ImageIcon } from "lucide-react";

interface PersonalFormProps {
  jobId: string;
  applicationId: string;
  initialProfile?: any;
  defaultMobile: string;
}

export default function PersonalForm({
  jobId,
  applicationId,
  initialProfile,
  defaultMobile,
}: PersonalFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form Fields State
  const [fullName, setFullName] = useState(initialProfile?.fullName || "");
  const [fatherName, setFatherName] = useState(initialProfile?.fatherName || "");
  const [dob, setDob] = useState(
    initialProfile?.dob ? new Date(initialProfile.dob).toISOString().split("T")[0] : ""
  );
  const [gender, setGender] = useState(initialProfile?.gender || "male");
  const [mobile, setMobile] = useState(initialProfile?.mobile || defaultMobile);
  const [email, setEmail] = useState(initialProfile?.email || "");
  const [panNumber, setPanNumber] = useState(initialProfile?.panNumber || "");

  // Address State
  const [currentAddress, setCurrentAddress] = useState(initialProfile?.currentAddress || "");
  const [currentPin, setCurrentPin] = useState(initialProfile?.currentPin || "");
  const [permanentAddress, setPermanentAddress] = useState(initialProfile?.permanentAddress || "");
  const [permanentPin, setPermanentPin] = useState(initialProfile?.permanentPin || "");
  const [sameAsCurrent, setSameAsCurrent] = useState(false);

  // Languages State
  const availableLanguages = ["Kannada", "Hindi", "English", "Telugu", "Tamil"];
  const [languagesKnown, setLanguagesKnown] = useState<string[]>(
    initialProfile?.languagesKnown || ["Kannada"]
  );

  // File Upload State
  const [photoUrl, setPhotoUrl] = useState(initialProfile?.photoUrl || "");
  const [photoLoading, setPhotoLoading] = useState(false);
  const [photoError, setPhotoError] = useState<string | null>(null);

  const [aadhaarUrl, setAadhaarUrl] = useState(initialProfile?.aadhaarUrl || "");
  const [aadhaarLoading, setAadhaarLoading] = useState(false);
  const [aadhaarError, setAadhaarError] = useState<string | null>(null);

  const handleSameAddressChange = (checked: boolean) => {
    setSameAsCurrent(checked);
    if (checked) {
      setPermanentAddress(currentAddress);
      setPermanentPin(currentPin);
    }
  };

  const handleLanguageToggle = (lang: string) => {
    if (languagesKnown.includes(lang)) {
      setLanguagesKnown(languagesKnown.filter((l) => l !== lang));
    } else {
      setLanguagesKnown([...languagesKnown, lang]);
    }
  };

  // Convert file to base64 helper
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  // Handle Photo upload
  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      setPhotoError("Passport photo must not exceed 500KB.");
      return;
    }

    setPhotoLoading(true);
    setPhotoError(null);

    try {
      const base64 = await convertToBase64(file);
      const res = await uploadDocumentToServer(base64, file.name, file.type, "PHOTO");

      if (res.success && res.fileUrl) {
        setPhotoUrl(res.fileUrl);
      } else {
        setPhotoError(res.error || "Upload failed.");
      }
    } catch (err: any) {
      setPhotoError(err.message || "Failed to process photo.");
    } finally {
      setPhotoLoading(false);
    }
  };

  // Handle Aadhaar upload
  const handleAadhaarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setAadhaarError("Aadhaar file must not exceed 2MB.");
      return;
    }

    setAadhaarLoading(true);
    setAadhaarError(null);

    try {
      const base64 = await convertToBase64(file);
      const res = await uploadDocumentToServer(base64, file.name, file.type, "AADHAAR");

      if (res.success && res.fileUrl) {
        setAadhaarUrl(res.fileUrl);
      } else {
        setAadhaarError(res.error || "Upload failed.");
      }
    } catch (err: any) {
      setAadhaarError(err.message || "Failed to process Aadhaar.");
    } finally {
      setAadhaarLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!photoUrl) {
      setError("Please upload your passport photo.");
      return;
    }
    if (!aadhaarUrl) {
      setError("Please upload your Aadhaar card.");
      return;
    }

    // Validate PAN number format
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(panNumber.toUpperCase())) {
      setError("Please enter a valid PAN number format (e.g. ABCDE1234F).");
      return;
    }

    setIsLoading(true);

    const res = await savePersonalDetails(applicationId, {
      fullName,
      fatherName,
      dob,
      gender,
      mobile,
      email: email || undefined,
      panNumber: panNumber.toUpperCase(),
      currentAddress,
      currentPin,
      permanentAddress: sameAsCurrent ? currentAddress : permanentAddress,
      permanentPin: sameAsCurrent ? currentPin : permanentPin,
      languagesKnown,
      photoUrl,
      aadhaarUrl,
    });

    setIsLoading(false);

    if (res.success) {
      router.push(`/apply/${jobId}/professional`);
    } else {
      setError(res.error || "Failed to save details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Photo and Aadhaar Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Photo Upload */}
        <div className="border-2 border-dashed border-zinc-200 rounded-3xl p-5 text-center flex flex-col items-center justify-center bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
            Passport Photo (Max 500KB)
          </span>
          {photoUrl ? (
            <div className="relative h-28 w-28 rounded-2xl overflow-hidden ring-2 ring-orange-500/20 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoUrl} alt="Passport Preview" className="h-full w-full object-cover" />
              <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold cursor-pointer">
                Change
                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
              </label>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-3">
                {photoLoading ? <div className="h-5 w-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" /> : <ImageIcon size={22} />}
              </div>
              <span className="text-xs font-semibold text-zinc-700 hover:text-orange-500">
                {photoLoading ? "Uploading..." : "Upload Photo"}
              </span>
              <span className="text-[10px] text-zinc-400 mt-1">PNG, JPG or WEBP</span>
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} disabled={photoLoading} />
            </label>
          )}
          {photoError && <span className="text-[10px] text-red-500 mt-2 font-medium">{photoError}</span>}
        </div>

        {/* Aadhaar Upload */}
        <div className="border-2 border-dashed border-zinc-200 rounded-3xl p-5 text-center flex flex-col items-center justify-center bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
            Aadhaar Card PDF/Image (Max 2MB)
          </span>
          {aadhaarUrl ? (
            <div className="flex flex-col items-center gap-2">
              <div className="h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <FileText size={24} />
              </div>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 size={14} /> Aadhaar Verified
              </span>
              <label className="text-[10px] font-bold text-zinc-500 hover:text-orange-500 underline cursor-pointer">
                Re-upload File
                <input type="file" accept="image/*,application/pdf" className="hidden" onChange={handleAadhaarChange} />
              </label>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-3">
                {aadhaarLoading ? <div className="h-5 w-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" /> : <Upload size={22} />}
              </div>
              <span className="text-xs font-semibold text-zinc-700 hover:text-orange-500">
                {aadhaarLoading ? "Uploading..." : "Upload Aadhaar Card"}
              </span>
              <span className="text-[10px] text-zinc-400 mt-1">PDF, PNG or JPG</span>
              <input type="file" accept="image/*,application/pdf" className="hidden" onChange={handleAadhaarChange} disabled={aadhaarLoading} />
            </label>
          )}
          {aadhaarError && <span className="text-[10px] text-red-500 mt-2 font-medium">{aadhaarError}</span>}
        </div>
      </div>

      <div className="h-px bg-zinc-150" />

      {/* Personal Identity */}
      <div className="space-y-6">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          Personal Identity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Full Name (As in Aadhaar)
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Father&apos;s Name
            </label>
            <input
              type="text"
              required
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              PAN Number
            </label>
            <input
              type="text"
              required
              maxLength={10}
              placeholder="ABCDE1234F"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm uppercase focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              required
              readOnly
              value={mobile}
              className="w-full px-4 py-2.5 bg-zinc-100 border border-zinc-200 rounded-2xl text-xs sm:text-sm text-zinc-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-zinc-150" />

      {/* Address Details */}
      <div className="space-y-6">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          Address Information
        </h2>

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-zinc-700">Current Address</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Full Address
              </label>
              <input
                type="text"
                required
                value={currentAddress}
                onChange={(e) => {
                  setCurrentAddress(e.target.value);
                  if (sameAsCurrent) setPermanentAddress(e.target.value);
                }}
                placeholder="House No, Street name, Locality"
                className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                PIN Code
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={currentPin}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  setCurrentPin(val);
                  if (sameAsCurrent) setPermanentPin(val);
                }}
                placeholder="560001"
                className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 py-1">
          <input
            type="checkbox"
            id="sameAddress"
            checked={sameAsCurrent}
            onChange={(e) => handleSameAddressChange(e.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500/30"
          />
          <label htmlFor="sameAddress" className="text-xs text-zinc-500 select-none">
            Permanent Address is the same as Current Address
          </label>
        </div>

        {!sameAsCurrent && (
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-bold text-zinc-700">Permanent Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Full Address
                </label>
                <input
                  type="text"
                  required
                  value={permanentAddress}
                  onChange={(e) => setPermanentAddress(e.target.value)}
                  placeholder="House No, Street name, Locality"
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  PIN Code
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={permanentPin}
                  onChange={(e) => setPermanentPin(e.target.value.replace(/\D/g, ""))}
                  placeholder="560001"
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-px bg-zinc-150" />

      {/* Languages Known */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          Languages Known
        </h2>
        <div className="flex flex-wrap gap-3">
          {availableLanguages.map((lang) => {
            const selected = languagesKnown.includes(lang);
            return (
              <button
                type="button"
                key={lang}
                onClick={() => handleLanguageToggle(lang)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all ${
                  selected
                    ? "bg-orange-500 border-orange-500 text-white shadow-sm"
                    : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300"
                }`}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 text-xs px-4 py-3 rounded-2xl flex items-center gap-2 border border-red-100 animate-fade-in">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-zinc-150">
        <Button
          type="button"
          onClick={() => router.push(`/apply/${jobId}`)}
          variant="outline"
          className="rounded-full px-6 py-6 text-sm font-semibold flex items-center gap-2 text-zinc-700"
        >
          <ArrowLeft size={16} /> Back
        </Button>

        <Button
          type="submit"
          disabled={isLoading || photoLoading || aadhaarLoading}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-6 text-sm font-semibold flex items-center gap-2 transition-transform active:scale-[0.98]"
        >
          {isLoading ? (
            "Saving Details..."
          ) : (
            <>
              Continue to Professional <ArrowRight size={16} />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
