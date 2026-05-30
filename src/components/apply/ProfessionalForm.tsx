"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { saveProfessionalDetails, uploadDocumentToServer } from "@/actions/application-actions";
import { ArrowRight, ArrowLeft, Upload, CheckCircle2, AlertCircle, FileText } from "lucide-react";

interface ProfessionalFormProps {
  jobId: string;
  applicationId: string;
  jobRole: string; // e.g. "FIELD_OFFICER"
  initialProfile?: any;
}

export default function ProfessionalForm({
  jobId,
  applicationId,
  jobRole,
  initialProfile,
}: ProfessionalFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form Fields State
  const [highestQualification, setHighestQualification] = useState(
    initialProfile?.highestQualification || "12th Pass"
  );
  const [isFresher, setIsFresher] = useState(
    initialProfile?.isFresher !== undefined ? initialProfile.isFresher : true
  );
  const [previousCompany, setPreviousCompany] = useState(initialProfile?.previousCompany || "");
  const [totalExperienceYears, setTotalExperienceYears] = useState<string>(
    initialProfile?.totalExperienceYears ? String(initialProfile.totalExperienceYears) : ""
  );
  const [districtPreference, setDistrictPreference] = useState(
    initialProfile?.districtPreference || "Bangalore"
  );
  const [willingToRelocate, setWillingToRelocate] = useState(
    initialProfile?.willingToRelocate || false
  );

  // Supervisor Fields State
  const [managementSkillLevel, setManagementSkillLevel] = useState(
    initialProfile?.managementSkillLevel || "basic"
  );
  const [hasSupervisoryExperience, setHasSupervisoryExperience] = useState(
    initialProfile?.hasSupervisoryExperience || false
  );
  const [supervisoryExperienceYears, setSupervisoryExperienceYears] = useState<string>(
    initialProfile?.supervisoryExperienceYears ? String(initialProfile.supervisoryExperienceYears) : ""
  );
  const [comfortableLeading, setComfortableLeading] = useState(
    initialProfile?.comfortableLeading || false
  );
  const [willingToTravel, setWillingToTravel] = useState(
    initialProfile?.willingToTravel || false
  );
  const [hasTwoWheeler, setHasTwoWheeler] = useState(
    initialProfile?.hasTwoWheeler || false
  );

  // File Upload State
  const [resumeUrl, setResumeUrl] = useState(initialProfile?.resumeUrl || "");
  const [resumeLoading, setResumeLoading] = useState(false);
  const [resumeError, setResumeError] = useState<string | null>(null);

  const [experienceCertUrl, setExperienceCertUrl] = useState(initialProfile?.experienceCertUrl || "");
  const [experienceCertLoading, setExperienceCertLoading] = useState(false);
  const [experienceCertError, setExperienceCertError] = useState<string | null>(null);

  const districts = [
    "Bangalore",
    "Davangere",
    "Mysore",
    "Belgaum",
    "Hubli-Dharwad",
    "Mangalore",
    "Shimoga",
    "Tumkur",
    "Other",
  ];

  // Helper to convert file to base64
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

  // Upload Resume
  const handleResumeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setResumeError("Resume must not exceed 2MB.");
      return;
    }

    setResumeLoading(true);
    setResumeError(null);

    try {
      const base64 = await convertToBase64(file);
      const res = await uploadDocumentToServer(base64, file.name, file.type, "RESUME");

      if (res.success && res.fileUrl) {
        setResumeUrl(res.fileUrl);
      } else {
        setResumeError(res.error || "Upload failed.");
      }
    } catch (err: any) {
      setResumeError(err.message || "Failed to process resume.");
    } finally {
      setResumeLoading(false);
    }
  };

  // Upload Experience Cert
  const handleCertChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setExperienceCertError("Experience Certificate must not exceed 2MB.");
      return;
    }

    setExperienceCertLoading(true);
    setExperienceCertError(null);

    try {
      const base64 = await convertToBase64(file);
      const res = await uploadDocumentToServer(base64, file.name, file.type, "EXPERIENCE_CERT");

      if (res.success && res.fileUrl) {
        setExperienceCertUrl(res.fileUrl);
      } else {
        setExperienceCertError(res.error || "Upload failed.");
      }
    } catch (err: any) {
      setExperienceCertError(err.message || "Failed to process certificate.");
    } finally {
      setExperienceCertLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Enforce two-wheeler check if role is FIELD_OFFICER
    if (jobRole === "FIELD_OFFICER" && !hasTwoWheeler) {
      setError("A two-wheeled vehicle is mandatory for Field Officer roles.");
      return;
    }

    setIsLoading(true);

    const res = await saveProfessionalDetails(applicationId, {
      highestQualification,
      isFresher,
      previousCompany: !isFresher ? previousCompany : undefined,
      totalExperienceYears: !isFresher && totalExperienceYears ? parseInt(totalExperienceYears, 10) : undefined,
      districtPreference,
      willingToRelocate,
      managementSkillLevel,
      hasSupervisoryExperience,
      supervisoryExperienceYears: hasSupervisoryExperience && supervisoryExperienceYears ? parseInt(supervisoryExperienceYears, 10) : undefined,
      comfortableLeading,
      willingToTravel,
      hasTwoWheeler,
      resumeUrl: resumeUrl || undefined,
      experienceCertUrl: experienceCertUrl || undefined,
    });

    setIsLoading(false);

    if (res.success) {
      router.push(`/apply/${jobId}/review`);
    } else {
      setError(res.error || "Failed to save professional details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* File Upload Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resume Upload */}
        <div className="border-2 border-dashed border-zinc-200 rounded-3xl p-5 text-center flex flex-col items-center justify-center bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
            Upload Resume / CV (Optional - Max 2MB)
          </span>
          {resumeUrl ? (
            <div className="flex flex-col items-center gap-2">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
                <FileText size={24} />
              </div>
              <span className="text-xs font-bold text-orange-500 flex items-center gap-1">
                <CheckCircle2 size={14} /> Resume Uploaded
              </span>
              <label className="text-[10px] font-bold text-zinc-500 hover:text-orange-500 underline cursor-pointer">
                Re-upload Resume
                <input type="file" accept="application/pdf" className="hidden" onChange={handleResumeChange} />
              </label>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-3">
                {resumeLoading ? <div className="h-5 w-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" /> : <Upload size={22} />}
              </div>
              <span className="text-xs font-semibold text-zinc-700 hover:text-orange-500">
                {resumeLoading ? "Uploading..." : "Upload Resume (PDF)"}
              </span>
              <span className="text-[10px] text-zinc-400 mt-1">PDF file format only</span>
              <input type="file" accept="application/pdf" className="hidden" onChange={handleResumeChange} disabled={resumeLoading} />
            </label>
          )}
          {resumeError && <span className="text-[10px] text-red-500 mt-2 font-medium">{resumeError}</span>}
        </div>

        {/* Experience Certificate Upload */}
        {!isFresher && (
          <div className="border-2 border-dashed border-zinc-200 rounded-3xl p-5 text-center flex flex-col items-center justify-center bg-zinc-50/50 hover:bg-zinc-50 transition-colors animate-fade-in">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
              Experience Certificate (Optional - Max 2MB)
            </span>
            {experienceCertUrl ? (
              <div className="flex flex-col items-center gap-2">
                <div className="h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Certificate Uploaded
                </span>
                <label className="text-[10px] font-bold text-zinc-500 hover:text-orange-500 underline cursor-pointer">
                  Re-upload Document
                  <input type="file" accept="application/pdf,image/*" className="hidden" onChange={handleCertChange} />
                </label>
              </div>
            ) : (
              <label className="flex flex-col items-center cursor-pointer">
                <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-3">
                  {experienceCertLoading ? <div className="h-5 w-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" /> : <Upload size={22} />}
                </div>
                <span className="text-xs font-semibold text-zinc-700 hover:text-orange-500">
                  {experienceCertLoading ? "Uploading..." : "Upload Certificate"}
                </span>
                <span className="text-[10px] text-zinc-400 mt-1">PDF or Image format</span>
                <input type="file" accept="application/pdf,image/*" className="hidden" onChange={handleCertChange} disabled={experienceCertLoading} />
              </label>
            )}
            {experienceCertError && <span className="text-[10px] text-red-500 mt-2 font-medium">{experienceCertError}</span>}
          </div>
        )}
      </div>

      <div className="h-px bg-zinc-150" />

      {/* Qualifications & Career */}
      <div className="space-y-6">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          Professional Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Highest Educational Qualification
            </label>
            <select
              value={highestQualification}
              onChange={(e) => setHighestQualification(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            >
              <option value="12th Pass">12th Pass (Minimum requirement)</option>
              <option value="Diploma">Diploma / Vocational</option>
              <option value="Graduate">Bachelor&apos;s Degree / Graduate</option>
              <option value="Post Graduate">Master&apos;s Degree / PG</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Employment Status
            </label>
            <div className="flex gap-4">
              <label className={`flex-1 px-4 py-2.5 rounded-2xl border text-center font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                isFresher
                  ? "bg-orange-500 border-orange-500 text-white shadow-sm"
                  : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300"
              }`}>
                <input type="radio" checked={isFresher} onChange={() => setIsFresher(true)} className="hidden" />
                Fresher
              </label>
              <label className={`flex-1 px-4 py-2.5 rounded-2xl border text-center font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                !isFresher
                  ? "bg-orange-500 border-orange-500 text-white shadow-sm"
                  : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300"
              }`}>
                <input type="radio" checked={!isFresher} onChange={() => setIsFresher(false)} className="hidden" />
                Experienced
              </label>
            </div>
          </div>
        </div>

        {!isFresher && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Previous Company Name
              </label>
              <input
                type="text"
                required={!isFresher}
                value={previousCompany}
                onChange={(e) => setPreviousCompany(e.target.value)}
                placeholder="e.g. Swiggy, Zomato, Shadowfax"
                className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Total Experience (Years)
              </label>
              <input
                type="number"
                required={!isFresher}
                min={1}
                max={40}
                value={totalExperienceYears}
                onChange={(e) => setTotalExperienceYears(e.target.value)}
                placeholder="e.g. 2"
                className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Preferred Hub / Work District
            </label>
            <select
              value={districtPreference}
              onChange={(e) => setDistrictPreference(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            >
              {districts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col justify-center">
            <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Willing to Relocate
            </span>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="willingRelocate"
                checked={willingToRelocate}
                onChange={(e) => setWillingToRelocate(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500/30"
              />
              <label htmlFor="willingRelocate" className="text-xs text-zinc-500 select-none">
                Yes, I am willing to relocate to other districts if needed
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-zinc-150" />

      {/* Leadership & Logistics */}
      <div className="space-y-6">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          Supervisor & Travel Settings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Management & Team Skill Level
            </label>
            <select
              value={managementSkillLevel}
              onChange={(e) => setManagementSkillLevel(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
            >
              <option value="basic">Basic (Coordinate individual tasks)</option>
              <option value="good">Good (Oversee delivery riders)</option>
              <option value="excellent">Excellent (Manage team & routes efficiency)</option>
            </select>
          </div>

          <div className="flex flex-col justify-center">
            <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Supervisory Experience
            </span>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="hasSupervisory"
                checked={hasSupervisoryExperience}
                onChange={(e) => setHasSupervisoryExperience(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500/30"
              />
              <label htmlFor="hasSupervisory" className="text-xs text-zinc-500 select-none">
                Yes, I have prior supervisory / team management experience
              </label>
            </div>
          </div>
        </div>

        {hasSupervisoryExperience && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Supervisory Experience (Years)
              </label>
              <input
                type="number"
                required={hasSupervisoryExperience}
                min={1}
                max={40}
                value={supervisoryExperienceYears}
                onChange={(e) => setSupervisoryExperienceYears(e.target.value)}
                placeholder="e.g. 1"
                className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="flex flex-col">
            <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Comfortable Leading Team
            </span>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                id="comfortableLeading"
                checked={comfortableLeading}
                onChange={(e) => setComfortableLeading(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500/30"
              />
              <label htmlFor="comfortableLeading" className="text-xs text-zinc-500 select-none">
                Yes, I am comfortable
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Willing to Travel
            </span>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                id="willingTravel"
                checked={willingToTravel}
                onChange={(e) => setWillingToTravel(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500/30"
              />
              <label htmlFor="willingTravel" className="text-xs text-zinc-500 select-none">
                Yes, within my district
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Two-Wheeler Available
            </span>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                id="hasTwoWheeler"
                checked={hasTwoWheeler}
                onChange={(e) => setHasTwoWheeler(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500/30"
              />
              <label htmlFor="hasTwoWheeler" className="text-xs text-zinc-500 select-none font-semibold">
                Yes, I own a bike / scooter
              </label>
            </div>
          </div>
        </div>

        {jobRole === "FIELD_OFFICER" && (
          <div className="bg-orange-50 border border-orange-200/50 p-4 rounded-2xl text-xs text-orange-700 leading-relaxed font-medium">
            ⚠️ **Important for Field Officers**: Owning a two-wheeled vehicle and a valid driver&apos;s license is mandatory to perform operations.
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 text-xs px-4 py-3 rounded-2xl flex items-center gap-2 border border-red-100 animate-fade-in">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-zinc-155">
        <Button
          type="button"
          onClick={() => router.push(`/apply/${jobId}/personal`)}
          variant="outline"
          className="rounded-full px-6 py-6 text-sm font-semibold flex items-center gap-2 text-zinc-700"
        >
          <ArrowLeft size={16} /> Back
        </Button>

        <Button
          type="submit"
          disabled={isLoading || resumeLoading || experienceCertLoading}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-6 text-sm font-semibold flex items-center gap-2 transition-transform active:scale-[0.98]"
        >
          {isLoading ? (
            "Saving Details..."
          ) : (
            <>
              Review Application <ArrowRight size={16} />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
