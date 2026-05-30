"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { submitApplicationAction } from "@/actions/application-actions";
import { ArrowLeft, ArrowRight, ShieldAlert, CheckSquare, Square, FileText, AlertCircle } from "lucide-react";

interface ReviewSummaryProps {
  jobId: string;
  applicationId: string;
  profile: any;
}

export default function ReviewSummary({
  jobId,
  applicationId,
  profile,
}: ReviewSummaryProps) {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
      setError("Please confirm the verification statement.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const res = await submitApplicationAction(applicationId);
    setIsLoading(false);

    if (res.success) {
      router.push(`/apply/${jobId}/payment`);
    } else {
      setError(res.error || "Failed to submit application.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Spec Info Grid: Personal Details */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          1. Personal Identity Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-zinc-50/50 border border-zinc-200/80 rounded-2xl p-6 text-xs sm:text-sm">
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Full Name</span>
            <span className="font-bold text-zinc-900 mt-1 block">{profile.fullName}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Father&apos;s Name</span>
            <span className="font-semibold text-zinc-800 mt-1 block">{profile.fatherName}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">DOB / Gender</span>
            <span className="font-semibold text-zinc-800 mt-1 block">
              {new Date(profile.dob).toLocaleDateString("en-IN")} / {profile.gender}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Mobile / Email</span>
            <span className="font-semibold text-zinc-800 mt-1 block">
              {profile.mobile} {profile.email ? `/ ${profile.email}` : ""}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">PAN Number</span>
            <span className="font-bold text-zinc-900 mt-1 block uppercase">{profile.panNumber}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Languages Known</span>
            <span className="font-semibold text-zinc-800 mt-1 block">
              {profile.languagesKnown.join(", ")}
            </span>
          </div>
        </div>
      </div>

      {/* Address Details Summary */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          2. Address details Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-zinc-50/50 border border-zinc-200/80 rounded-2xl p-6 text-xs sm:text-sm">
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Current Address</span>
            <span className="font-semibold text-zinc-800 mt-1 block">
              {profile.currentAddress} - {profile.currentPin}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Permanent Address</span>
            <span className="font-semibold text-zinc-800 mt-1 block">
              {profile.permanentAddress} - {profile.permanentPin}
            </span>
          </div>
        </div>
      </div>

      {/* Professional Details Summary */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          3. Professional & Supervisor Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-zinc-50/50 border border-zinc-200/80 rounded-2xl p-6 text-xs sm:text-sm">
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Qualification</span>
            <span className="font-bold text-zinc-900 mt-1 block">{profile.highestQualification}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Experience Status</span>
            <span className="font-semibold text-zinc-800 mt-1 block">
              {profile.isFresher
                ? "Fresher"
                : `Experienced (${profile.totalExperienceYears} yrs at ${profile.previousCompany})`}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Hub District Preference</span>
            <span className="font-bold text-orange-500 mt-1 block">{profile.districtPreference}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Team Management Level</span>
            <span className="font-semibold text-zinc-800 mt-1 block uppercase">{profile.managementSkillLevel}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Supervisory Experience</span>
            <span className="font-semibold text-zinc-800 mt-1 block">
              {profile.hasSupervisoryExperience
                ? `Yes (${profile.supervisoryExperienceYears} yrs)`
                : "No"}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Logistics Settings</span>
            <span className="font-semibold text-zinc-800 mt-1 block">
              Two-wheeler: {profile.hasTwoWheeler ? "Available" : "Not Available"} / Travel:{" "}
              {profile.willingToTravel ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>

      {/* Uploaded Documents */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
          4. Uploaded Verification Documents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Photo */}
          {profile.photoUrl && (
            <div className="border border-zinc-200 rounded-2xl p-4 flex items-center gap-3 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.photoUrl} alt="Photo" className="h-10 w-10 rounded-lg object-cover shrink-0" />
              <div className="min-w-0">
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Photo ID</span>
                <a href={profile.photoUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-orange-500 hover:underline block truncate">
                  View Photo
                </a>
              </div>
            </div>
          )}

          {/* Aadhaar */}
          {profile.aadhaarUrl && (
            <div className="border border-zinc-200 rounded-2xl p-4 flex items-center gap-3 bg-white">
              <div className="h-10 w-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-500 shrink-0">
                <FileText size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Aadhaar Card</span>
                <a href={profile.aadhaarUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-orange-500 hover:underline block truncate">
                  View Aadhaar
                </a>
              </div>
            </div>
          )}

          {/* Resume */}
          {profile.resumeUrl && (
            <div className="border border-zinc-200 rounded-2xl p-4 flex items-center gap-3 bg-white">
              <div className="h-10 w-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-500 shrink-0">
                <FileText size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Resume File</span>
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-orange-500 hover:underline block truncate">
                  View Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="h-px bg-zinc-150" />

      {/* Verification Declaration */}
      <div className="bg-orange-50/50 border border-orange-200 p-5 sm:p-6 rounded-3xl space-y-4">
        <div className="flex gap-3">
          <ShieldAlert size={20} className="text-orange-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              Verification Declaration
            </h3>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Falsifying details or submitting invalid government credentials results in immediate
              disqualification and restriction of further applications.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setConfirmed(!confirmed)}
          className="flex items-center gap-2 text-xs font-semibold text-zinc-700 select-none cursor-pointer"
        >
          {confirmed ? (
            <CheckSquare size={18} className="text-orange-500" />
          ) : (
            <Square size={18} className="text-zinc-300" />
          )}
          <span>I confirm all the entered details are true and match my physical documents.</span>
        </button>
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
          onClick={() => router.push(`/apply/${jobId}/professional`)}
          variant="outline"
          className="rounded-full px-6 py-6 text-sm font-semibold flex items-center gap-2 text-zinc-700"
        >
          <ArrowLeft size={16} /> Back
        </Button>

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-6 text-sm font-semibold flex items-center gap-2 transition-transform active:scale-[0.98]"
        >
          {isLoading ? (
            "Submitting..."
          ) : (
            <>
              Proceed to Payment <ArrowRight size={16} />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
