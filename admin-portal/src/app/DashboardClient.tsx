"use client";

import React, { useState, useTransition, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  Search,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Briefcase,
  User,
  MapPin,
  GraduationCap,
  FileCheck,
  AlertCircle,
  Eye,
  Award,
  Clock,
  ShieldCheck,
  Filter,
  Check,
  Users,
  Download,
  FileSpreadsheet
} from "lucide-react";

interface Profile {
  fullName: string;
  fatherName: string;
  dob: string;
  gender: string;
  mobile: string;
  email: string | null;
  panNumber: string;
  currentAddress: string;
  currentPin: string;
  permanentAddress: string;
  permanentPin: string;
  languagesKnown: string[];
  highestQualification: string;
  isFresher: boolean;
  previousCompany: string | null;
  totalExperienceYears: number | null;
  districtPreference: string;
  willingToRelocate: boolean;
  managementSkillLevel: string;
  hasSupervisoryExperience: boolean;
  supervisoryExperienceYears: number | null;
  comfortableLeading: boolean;
  willingToTravel: boolean;
  hasTwoWheeler: boolean;
  photoUrl: string | null;
  aadhaarUrl: string | null;
  resumeUrl: string | null;
  experienceCertUrl: string | null;
}

interface UserData {
  id: string;
  phone: string;
  email: string | null;
  profile: Profile | null;
}

interface JobPost {
  title: string;
  roleType: string;
  employmentType: string;
  district: string;
  applicationFee: number;
}

interface Exam {
  id: string;
  status: string;
  score: number | null;
}

interface Application {
  id: string;
  status: string;
  paymentStatus: string;
  paymentAmount: number;
  appliedAt: string;
  user: UserData;
  jobPost: JobPost;
  exams: Exam[];
}

interface DashboardClientProps {
  initialApplications: Application[];
  adminPhone: string;
  logoutAction: () => Promise<void>;
  toggleExamEligibilityAction: (appId: string, allow: boolean) => Promise<{ success: boolean; error?: string }>;
}

// Letter avatar gradient selector (Pastel version for light mode)
function getAvatarGradient(name: string) {
  const gradients = [
    "bg-orange-50 text-orange-600 border-orange-100",
    "bg-emerald-50 text-emerald-600 border-emerald-100",
    "bg-indigo-50 text-indigo-600 border-indigo-100",
    "bg-blue-50 text-blue-600 border-blue-100",
    "bg-pink-50 text-pink-600 border-pink-100",
  ];
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return gradients[sum % gradients.length];
}

export default function DashboardClient({
  initialApplications,
  adminPhone,
  logoutAction,
  toggleExamEligibilityAction,
}: DashboardClientProps) {
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>(initialApplications);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("ALL"); // ALL, FIELD_OFFICER, SALES_EXECUTIVE, TELECALLER
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [districtFilter, setDistrictFilter] = useState("ALL");
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [drawerTab, setDrawerTab] = useState("personal"); // personal, professional, documents
  const [isPending, startTransition] = useTransition();

  const tabsRef = React.useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [activeTabRect, setActiveTabRect] = useState({ left: 0, width: 0 });

  const drawerTabsRef = React.useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [drawerTabRect, setDrawerTabRect] = useState({ left: 0, width: 0 });

  React.useEffect(() => {
    const updateRect = () => {
      const activeEl = tabsRef.current[activeTab];
      if (activeEl) {
        setActiveTabRect({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
      }
    };
    const frameId = requestAnimationFrame(updateRect);
    window.addEventListener("resize", updateRect);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateRect);
    };
  }, [activeTab, applications]);

  React.useEffect(() => {
    if (!selectedApp) return;
    const updateRect = () => {
      const activeEl = drawerTabsRef.current[drawerTab];
      if (activeEl) {
        setDrawerTabRect({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
      }
    };
    const frameId = requestAnimationFrame(updateRect);
    window.addEventListener("resize", updateRect);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateRect);
    };
  }, [drawerTab, selectedApp]);

  const handleLogout = async () => {
    await logoutAction();
    router.push("/login");
    router.refresh();
  };

  const handleToggleExam = async (appId: string, allow: boolean) => {
    startTransition(async () => {
      const res = await toggleExamEligibilityAction(appId, allow);
      if (res.success) {
        router.refresh();
        setApplications((prev) =>
          prev.map((app) => {
            if (app.id === appId) {
              return {
                ...app,
                status: allow ? "EXAM_SCHEDULED" : "PAID",
                exams: allow ? [{ id: "mock-id", status: "scheduled", score: null }] : [],
              };
            }
            return app;
          })
        );
        if (selectedApp?.id === appId) {
          setSelectedApp((prev) =>
            prev
              ? {
                  ...prev,
                  status: allow ? "EXAM_SCHEDULED" : "PAID",
                  exams: allow ? [{ id: "mock-id", status: "scheduled", score: null }] : [],
                }
              : null
          );
        }
      } else {
        alert(res.error || "Failed to update exam status");
      }
    });
  };

  const [isExportingZip, setIsExportingZip] = useState(false);

  const handleExportExcel = () => {
    const headers = [
      "Reference ID", "Full Name", "Mobile Number", "Email", "Applied Role", "Applied Date",
      "Payment Status", "Payment Amount", "Exam Eligibility Status", "Father's Name", "Date of Birth",
      "Gender", "PAN Number", "Current Address", "Current PIN", "Permanent Address", "Permanent PIN",
      "Languages Known", "Highest Qualification", "Experience Status", "Previous Company",
      "Total Experience Years", "Preferred District", "Willing to Relocate", "Management Skill Level",
      "Has Supervisory Experience", "Supervisory Experience Years", "Comfortable Leading",
      "Willing to Travel", "Has Two Wheeler", "Photo URL", "Aadhaar Card URL", "Resume URL", "Experience Cert URL"
    ];

    const escapeCsvValue = (val: unknown) => {
      if (val === null || val === undefined) return "";
      const str = String(val);
      return `"${str.replace(/"/g, '""')}"`;
    };

    const rows = filteredApps.map((app) => {
      const profile = app.user.profile;
      const refId = `FD-2026-${app.id.slice(-6).toUpperCase()}`;
      return [
        refId,
        profile?.fullName || "",
        app.user.phone || "",
        app.user.email || profile?.email || "",
        app.jobPost.title,
        new Date(app.appliedAt).toLocaleDateString("en-IN"),
        app.paymentStatus,
        app.paymentAmount,
        app.status,
        profile?.fatherName || "",
        profile?.dob ? new Date(profile.dob).toLocaleDateString("en-IN") : "",
        profile?.gender || "",
        profile?.panNumber || "",
        profile?.currentAddress || "",
        profile?.currentPin || "",
        profile?.permanentAddress || "",
        profile?.permanentPin || "",
        profile?.languagesKnown ? profile.languagesKnown.join(", ") : "",
        profile?.highestQualification || "",
        profile ? (profile.isFresher ? "Fresher" : "Experienced") : "",
        profile?.previousCompany || "",
        profile?.totalExperienceYears ?? "",
        profile?.districtPreference || "",
        profile?.willingToRelocate ? "Yes" : "No",
        profile?.managementSkillLevel || "",
        profile?.hasSupervisoryExperience ? "Yes" : "No",
        profile?.supervisoryExperienceYears ?? "",
        profile?.comfortableLeading ? "Yes" : "No",
        profile?.willingToTravel ? "Yes" : "No",
        profile?.hasTwoWheeler ? "Yes" : "No",
        profile?.photoUrl || "",
        profile?.aadhaarUrl || "",
        profile?.resumeUrl || "",
        profile?.experienceCertUrl || ""
      ].map(escapeCsvValue);
    });

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `applicant_entries_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadImages = async () => {
    setIsExportingZip(true);
    try {
      const response = await fetch("/api/export-images");
      if (!response.ok) {
        throw new Error("Failed to download ZIP");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `candidate_documents_${new Date().getFullYear()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Unknown error";
      alert("Failed to export images ZIP: " + errMsg);
    } finally {
      setIsExportingZip(false);
    }
  };

  // Sync state when props change
  React.useEffect(() => {
    setApplications(initialApplications);
  }, [initialApplications]);

  // Statistics calculation
  const stats = useMemo(() => {
    return {
      total: applications.length,
      paid: applications.filter((app) => app.paymentStatus === "PAID").length,
      examAllowed: applications.filter((app) => app.status === "EXAM_SCHEDULED").length,
      pendingReview: applications.filter(
        (app) => app.paymentStatus === "PAID" && app.status === "PAID"
      ).length,
    };
  }, [applications]);

  // Dynamic districts list for filter
  const districtsList = useMemo(() => {
    const list = new Set<string>();
    applications.forEach((app) => {
      if (app.jobPost?.district) {
        list.add(app.jobPost.district);
      }
    });
    return Array.from(list).sort();
  }, [applications]);

  // Filtered applicants
  const filteredApps = useMemo(() => {
    return applications.filter((app) => {
      const name = app.user.profile?.fullName?.toLowerCase() || "";
      const phone = app.user.phone || "";
      const matchesSearch = name.includes(search.toLowerCase()) || phone.includes(search);

      const matchesRole = activeTab === "ALL" || app.jobPost.roleType === activeTab;

      let matchesStatus = true;
      if (statusFilter !== "ALL") {
        if (statusFilter === "PENDING_REVIEW") {
          matchesStatus = app.paymentStatus === "PAID" && app.status === "PAID";
        } else {
          matchesStatus = app.status === statusFilter;
        }
      }

      const matchesDistrict = districtFilter === "ALL" || app.jobPost.district === districtFilter;

      return matchesSearch && matchesRole && matchesStatus && matchesDistrict;
    });
  }, [applications, search, activeTab, statusFilter, districtFilter]);

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-stone-900 flex flex-col font-sans relative antialiased">
      
      {/* Top Navigation Bar */}
      <nav className="w-full border-b border-stone-200/80 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-orange-600 flex items-center justify-center font-extrabold text-white text-xs">
              HS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-tight text-stone-900 uppercase">HinduSwad</span>
                <span className="text-[9px] font-bold text-orange-600 bg-orange-50 border border-orange-100/50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Ops
                </span>
              </div>
            </div>
          </div>

          {/* Admin Info & Logout */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-stone-600 bg-stone-50 border border-stone-200/60 px-3 py-1.5 rounded-full">
              <ShieldCheck size={13} className="text-orange-600" />
              Verified Session
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden xs:block">
                <span className="text-xs font-semibold text-stone-900 block">Administrator</span>
                <span className="text-[10px] text-stone-500 block font-mono">+91 {adminPhone}</span>
              </div>
              <button
                onClick={handleLogout}
                className="h-9 px-3.5 rounded-lg border border-stone-250 bg-stone-50 hover:bg-stone-100 text-stone-700 flex items-center gap-1.5 text-xs font-semibold transition-all cursor-pointer"
              >
                <LogOut size={13} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Workspace content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        
        {/* Header section with page titles & export actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">Applicant Pipeline</h2>
            <p className="text-xs text-stone-500 mt-1">
              Review applicant details, verify paperwork, and manage exam scheduling eligibility.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportExcel}
              className="bg-white border border-stone-200 hover:border-orange-500/40 text-stone-700 px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:bg-stone-50"
            >
              <FileSpreadsheet size={14} className="text-emerald-700" />
              Export Excel
            </button>
            
            <button
              onClick={handleDownloadImages}
              disabled={isExportingZip}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-200 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              {isExportingZip ? (
                <>
                  <div className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating ZIP...
                </>
              ) : (
                <>
                  <Download size={14} />
                  Download ZIP
                </>
              )}
            </button>
          </div>
        </div>

        {/* Key metrics grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Metric 1 */}
          <div className="group bg-white border border-stone-200/80 p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                Total Submissions
              </span>
              <div className="text-3xl font-bold text-stone-950 tracking-tight">
                {stats.total}
              </div>
              <span className="text-[11px] text-stone-400 block font-medium">
                All registered candidates
              </span>
            </div>
            <div className="h-10 w-10 bg-stone-50 border border-stone-100 text-stone-500 flex items-center justify-center rounded-lg group-hover:scale-[1.04] group-hover:text-stone-700 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <Users size={18} />
            </div>
          </div>

          {/* Metric 2 */}
          <div className="group bg-white border border-stone-200/80 p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                Verified Payments
              </span>
              <div className="text-3xl font-bold text-stone-950 tracking-tight">
                {stats.paid}
              </div>
              <span className="text-[11px] text-stone-400 block font-medium">
                Application fees paid
              </span>
            </div>
            <div className="h-10 w-10 bg-emerald-50 border border-emerald-100/50 text-emerald-650 flex items-center justify-center rounded-lg group-hover:scale-[1.04] group-hover:bg-emerald-100/50 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <CheckCircle2 size={18} />
            </div>
          </div>

          {/* Metric 3 */}
          <div className="group bg-white border border-stone-200/80 p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                Needs Review
              </span>
              <div className="text-3xl font-bold text-stone-950 tracking-tight">
                {stats.pendingReview}
              </div>
              <span className="text-[11px] text-stone-400 block font-medium">
                Awaiting exam scheduling
              </span>
            </div>
            <div className="h-10 w-10 bg-amber-50 border border-amber-100/50 text-amber-655 flex items-center justify-center rounded-lg group-hover:scale-[1.04] group-hover:bg-amber-100/50 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <Clock size={18} />
            </div>
          </div>

          {/* Metric 4 */}
          <div className="group bg-white border border-stone-200/80 p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                Exams Scheduled
              </span>
              <div className="text-3xl font-bold text-stone-950 tracking-tight">
                {stats.examAllowed}
              </div>
              <span className="text-[11px] text-stone-400 block font-medium">
                Exam authorized
              </span>
            </div>
            <div className="h-10 w-10 bg-orange-50 border border-orange-100/50 text-orange-600 flex items-center justify-center rounded-lg group-hover:scale-[1.04] group-hover:bg-orange-100/50 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <Briefcase size={18} />
            </div>
          </div>
        </section>

        {/* Filtering Panel */}
        <div className="bg-white border border-stone-200/80 rounded-xl p-4 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Segmented Control for Roles */}
          <div className="relative flex bg-stone-100 p-1 rounded-lg w-full md:w-auto shrink-0 select-none items-center overflow-x-auto">
            {/* Sliding Active Indicator */}
            {activeTabRect.width > 0 && (
              <div
                className="absolute top-1 bottom-1 bg-white border border-stone-200/60 shadow-sm rounded-md transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  left: `${activeTabRect.left}px`,
                  width: `${activeTabRect.width}px`,
                }}
              />
            )}
            {["ALL", "FIELD_OFFICER", "SALES_EXECUTIVE", "TELECALLER"].map((tab) => (
              <button
                key={tab}
                ref={(el) => {
                  tabsRef.current[tab] = el;
                }}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-5 py-2 rounded-md text-xs font-semibold uppercase tracking-wide cursor-pointer text-center transition-colors duration-250 shrink-0 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-stone-950"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {tab.replace("_", " ")}
              </button>
            ))}
          </div>

          {/* Inputs: Search, Status, District */}
          <div className="flex flex-col sm:flex-row gap-3 items-center w-full lg:w-auto">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-stone-400">
                <Search size={15} />
              </span>
              <input
                type="text"
                placeholder="Search candidate or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-9 pr-4 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white transition-all"
              />
            </div>

            {/* District Filter Dropdown */}
            <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 px-3 py-2 rounded-lg w-full sm:w-auto">
              <MapPin size={13} className="text-stone-400" />
              <select
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
                className="bg-transparent text-xs text-stone-800 font-semibold focus:outline-none cursor-pointer pr-2 w-full sm:w-auto"
              >
                <option value="ALL">All Districts</option>
                {districtsList.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter Dropdown */}
            <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 px-3 py-2 rounded-lg w-full sm:w-auto shadow-sm">
              <Filter size={13} className="text-stone-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent text-xs text-stone-800 font-semibold focus:outline-none cursor-pointer pr-2 w-full sm:w-auto"
              >
                <option value="ALL">All Stages</option>
                <option value="PENDING_REVIEW">Needs Review (Paid)</option>
                <option value="EXAM_SCHEDULED">Exam Scheduled</option>
                <option value="APPLIED">Applied (Unpaid)</option>
                <option value="PAID">Paid (Not Scheduled)</option>
                <option value="EXAM_COMPLETED">Exam Completed</option>
                <option value="REJECTED">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Candidate List Container */}
        <div className="space-y-4">
          {filteredApps.length === 0 ? (
            <div className="bg-white border border-stone-200 rounded-xl text-center py-20 text-stone-400 text-xs font-semibold">
              No candidate submissions match your filters.
            </div>
          ) : (
            filteredApps.map((app) => {
              const isPaid = app.paymentStatus === "PAID";
              const isExamAllowed = app.status === "EXAM_SCHEDULED";
              const name = app.user.profile?.fullName || "Awaiting Profile Setup";
              const initials = name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
              const avatarGrad = getAvatarGradient(name);
              const refId = `FD-2026-${app.id.slice(-6).toUpperCase()}`;

              return (
                <div
                  key={app.id}
                  className="bg-white border border-stone-200/80 rounded-xl p-5 hover:shadow-md hover:border-stone-300/85 hover:-translate-y-0.5 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] relative group animate-fade-up"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center w-full">
                    
                    {/* 1. Avatar & Candidate Details */}
                    <div className="md:col-span-4 flex items-center gap-3.5 min-w-0">
                      {/* initials avatar */}
                      <div
                        className={`h-11 w-11 rounded-lg border flex items-center justify-center font-bold text-xs tracking-wide shadow-sm shrink-0 ${avatarGrad}`}
                      >
                        {initials || "?"}
                      </div>
                      
                      <div className="min-w-0">
                        <h4 className="font-semibold text-stone-900 text-sm truncate group-hover:text-orange-600 transition-colors">
                          {name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[9px] font-bold text-stone-400 bg-stone-50 border border-stone-200/60 px-1.5 py-0.5 rounded font-mono">
                            {refId}
                          </span>
                          <span className="text-xs text-stone-500 font-medium">
                            +91 {app.user.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 2. Job Position Details */}
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <span className="text-xs font-semibold text-stone-850 truncate">
                        {app.jobPost.title}
                      </span>
                      <span className="text-[11px] text-stone-500 mt-0.5 font-medium flex items-center gap-1">
                        <MapPin size={11} className="text-stone-400" />
                        {app.jobPost.district} • {app.jobPost.employmentType}
                      </span>
                    </div>

                    {/* 3. Pipeline Status & Applied Date */}
                    <div className="md:col-span-2 flex flex-col md:items-start justify-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                          isExamAllowed
                            ? "bg-amber-50 text-amber-700 border border-amber-200/60"
                            : app.status === "PAID"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : app.status === "REJECTED"
                            ? "bg-rose-50 text-rose-700 border border-rose-200/60"
                            : "bg-stone-50 text-stone-600 border border-stone-200/60"
                        }`}
                      >
                        <span className={`h-1 w-1 rounded-full ${
                          isExamAllowed ? "bg-amber-500" : app.status === "PAID" ? "bg-emerald-500" : app.status === "REJECTED" ? "bg-rose-500" : "bg-stone-400"
                        }`} />
                        {app.status.replace("_", " ")}
                      </span>
                      
                      <span className="text-[10px] text-stone-400 font-medium mt-1">
                        Applied {new Date(app.appliedAt).toLocaleDateString("en-IN")}
                      </span>
                    </div>

                    {/* 4. Actions Controls */}
                    <div className="md:col-span-3 flex items-center justify-end gap-2.5 shrink-0">
                      {isPaid ? (
                        isExamAllowed ? (
                          <button
                            onClick={() => handleToggleExam(app.id, false)}
                            disabled={isPending}
                            className="bg-emerald-50 hover:bg-emerald-100/80 text-emerald-700 border border-emerald-200/50 disabled:opacity-50 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                          >
                            <Check size={13} />
                            Approved
                          </button>
                        ) : (
                          <button
                            onClick={() => handleToggleExam(app.id, true)}
                            disabled={isPending}
                            className="bg-white border border-stone-200 hover:border-orange-500/30 text-orange-700 hover:bg-orange-50/50 disabled:opacity-50 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                          >
                            <Clock size={13} />
                            Allow Exam
                          </button>
                        )
                      ) : (
                        <span className="text-xs text-stone-500 font-semibold bg-stone-50 border border-stone-200/60 px-3 py-1.5 rounded-lg">
                          Unpaid
                        </span>
                      )}

                      <button
                        onClick={() => {
                          setSelectedApp(app);
                          setDrawerTab("personal");
                        }}
                        className="bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-1 cursor-pointer shadow-sm"
                      >
                        <Eye size={13} />
                        Details
                      </button>
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </main>

      {/* Slide overlay drawer review sheet */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedApp(null)}
          />

          {/* Modal Panel Container */}
          <div className="relative w-full max-w-xl bg-[#fbfaf8] border-l border-stone-200 h-full shadow-2xl flex flex-col z-10 animate-slide-in">
            
            {/* Header */}
            <div className="p-6 border-b border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-orange-700 uppercase tracking-widest block mb-1">
                  Ref: FD-2026-{selectedApp.id.slice(-6).toUpperCase()}
                </span>
                <h2 className="text-xl font-bold text-stone-900">
                  {selectedApp.user.profile?.fullName || "Awaiting Setup"}
                </h2>
                <span className="text-xs text-stone-500 font-semibold block mt-1">
                  Pipeline Status: {selectedApp.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="h-8 w-8 rounded-lg border border-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center hover:bg-stone-50 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Tab navigation inside sheet */}
            <div className="relative px-6 py-2 border-b border-stone-200 bg-stone-50/50 flex items-center gap-2 overflow-x-auto select-none">
              {/* Sliding Active Indicator */}
              {drawerTabRect.width > 0 && (
                <div
                  className="absolute top-2 bottom-2 bg-white border border-stone-250/80 shadow-sm rounded-lg transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    left: `${drawerTabRect.left}px`,
                    width: `${drawerTabRect.width}px`,
                  }}
                />
              )}
              {[
                { id: "personal", label: "Profile", icon: User },
                { id: "professional", label: "Skills & Fit", icon: GraduationCap },
                { id: "documents", label: "Documents", icon: FileCheck },
              ].map((tab) => {
                const Icon = tab.icon;
                const active = drawerTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      drawerTabsRef.current[tab.id] = el;
                    }}
                    onClick={() => setDrawerTab(tab.id)}
                    className={`relative z-10 px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors duration-250 cursor-pointer shrink-0 whitespace-nowrap ${
                      active
                        ? "text-stone-950"
                        : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    <Icon size={13} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Profile body content - spacious spacing */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scroll">
              
              {/* Profile details */}
              {drawerTab === "personal" && (
                <div className="space-y-6 animate-fade-up">
                  
                  {/* Identity */}
                  <div className="bg-white border border-stone-200 p-6 rounded-xl space-y-5 shadow-sm">
                    <h3 className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 pb-2.5">
                      <User size={13} />
                      Candidate Identity
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-5 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Father&apos;s Name</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.user.profile?.fatherName || "Not Provided"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Date of Birth</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.user.profile?.dob
                            ? new Date(selectedApp.user.profile.dob).toLocaleDateString("en-IN")
                            : "Not Provided"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Gender</span>
                        <span className="text-stone-900 font-semibold block mt-1 capitalize">
                          {selectedApp.user.profile?.gender || "Not Provided"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">PAN Number</span>
                        <span className="text-stone-900 font-mono font-semibold block mt-1">
                          {selectedApp.user.profile?.panNumber || "Not Provided"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Address info */}
                  <div className="bg-white border border-stone-200 p-6 rounded-xl space-y-5 shadow-sm">
                    <h3 className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 pb-2.5">
                      <MapPin size={13} />
                      Residential Addresses
                    </h3>
                    <div className="space-y-4 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Current Address</span>
                        <span className="text-stone-900 block mt-1 leading-relaxed font-medium">
                          {selectedApp.user.profile?.currentAddress || "Not Provided"}
                        </span>
                        <span className="text-[10px] text-stone-500 block mt-1 font-mono">
                          PIN: {selectedApp.user.profile?.currentPin || "-"}
                        </span>
                      </div>
                      <div className="border-t border-stone-100 pt-4">
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Permanent Address</span>
                        <span className="text-stone-900 block mt-1 leading-relaxed font-medium">
                          {selectedApp.user.profile?.permanentAddress || "Not Provided"}
                        </span>
                        <span className="text-[10px] text-stone-500 block mt-1 font-mono">
                          PIN: {selectedApp.user.profile?.permanentPin || "-"}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Skills tab */}
              {drawerTab === "professional" && (
                <div className="space-y-6 animate-fade-up">
                  
                  {/* Job preferences */}
                  <div className="bg-white border border-stone-200 p-6 rounded-xl space-y-5 shadow-sm">
                    <h3 className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 pb-2.5">
                      <Briefcase size={13} />
                      Job Preferences
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-5 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Applied Role</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.jobPost.title}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Preferred District</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.user.profile?.districtPreference || "Not Provided"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Owns Two Wheeler?</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.user.profile?.hasTwoWheeler ? "Yes" : "No"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Willing to Travel?</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.user.profile?.willingToTravel ? "Yes" : "No"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Willing to Relocate?</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.user.profile?.willingToRelocate ? "Yes" : "No"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills/Education */}
                  <div className="bg-white border border-stone-200 p-6 rounded-xl space-y-5 shadow-sm">
                    <h3 className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 pb-2.5">
                      <GraduationCap size={13} />
                      Education & Work Experience
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-5 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Highest Qualification</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.user.profile?.highestQualification || "Not Provided"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Work Status</span>
                        <span className="text-stone-900 font-semibold block mt-1">
                          {selectedApp.user.profile?.isFresher ? "Fresher" : "Experienced"}
                        </span>
                      </div>
                      {!selectedApp.user.profile?.isFresher && (
                        <>
                          <div>
                            <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Previous Company</span>
                            <span className="text-stone-900 font-semibold block mt-1">
                              {selectedApp.user.profile?.previousCompany || "-"}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Years of Experience</span>
                            <span className="text-stone-900 font-semibold block mt-1">
                              {selectedApp.user.profile?.totalExperienceYears ?? 0} Years
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Leadership details */}
                  {selectedApp.user.profile?.hasSupervisoryExperience && (
                    <div className="bg-white border border-stone-200 p-6 rounded-xl space-y-5 shadow-sm">
                      <h3 className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 pb-2.5">
                        <Award size={13} />
                        Leadership & Supervision Details
                      </h3>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-5 text-xs">
                        <div>
                          <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Management Skill Level</span>
                          <span className="text-stone-900 font-semibold block mt-1 capitalize">
                            {selectedApp.user.profile.managementSkillLevel}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Supervisory Experience</span>
                          <span className="text-stone-900 font-semibold block mt-1">
                            {selectedApp.user.profile.supervisoryExperienceYears ?? 0} Years
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Comfortable Leading Teams?</span>
                          <span className="text-stone-900 font-semibold block mt-1">
                            {selectedApp.user.profile.comfortableLeading ? "Yes" : "No"}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Uploads Tab */}
              {drawerTab === "documents" && (
                <div className="bg-white border border-stone-200 p-6 rounded-xl space-y-5 animate-fade-up shadow-sm">
                  <h3 className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 pb-2.5">
                    <FileCheck size={13} />
                    Uploaded Document Files
                  </h3>
                  <div className="divide-y divide-stone-100 text-xs">
                    
                    <div className="flex items-center justify-between py-3">
                      <span className="text-stone-600 font-medium">Applicant Photo</span>
                      {selectedApp.user.profile?.photoUrl ? (
                        <a
                          href={selectedApp.user.profile.photoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-orange-650 hover:text-orange-700 font-bold flex items-center gap-1 transition-colors border border-stone-200 bg-white hover:bg-stone-50 px-2.5 py-1.5 rounded-lg shadow-sm"
                        >
                          View Document <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-stone-400 italic">Not Uploaded</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <span className="text-stone-600 font-medium">Aadhaar Identification Document</span>
                      {selectedApp.user.profile?.aadhaarUrl ? (
                        <a
                          href={selectedApp.user.profile.aadhaarUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-orange-650 hover:text-orange-700 font-bold flex items-center gap-1 transition-colors border border-stone-200 bg-white hover:bg-stone-50 px-2.5 py-1.5 rounded-lg shadow-sm"
                        >
                          View Document <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-stone-400 italic">Not Uploaded</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <span className="text-stone-600 font-medium">Professional Resume</span>
                      {selectedApp.user.profile?.resumeUrl ? (
                        <a
                          href={selectedApp.user.profile.resumeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-orange-650 hover:text-orange-700 font-bold flex items-center gap-1 transition-colors border border-stone-200 bg-white hover:bg-stone-50 px-2.5 py-1.5 rounded-lg shadow-sm"
                        >
                          View Document <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-stone-400 italic">Not Uploaded</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <span className="text-stone-600 font-medium">Experience Certificate</span>
                      {selectedApp.user.profile?.experienceCertUrl ? (
                        <a
                          href={selectedApp.user.profile.experienceCertUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-orange-650 hover:text-orange-700 font-bold flex items-center gap-1 transition-colors border border-stone-200 bg-white hover:bg-stone-50 px-2.5 py-1.5 rounded-lg shadow-sm"
                        >
                          View Document <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-stone-400 italic">Not Uploaded / Fresher</span>
                      )}
                    </div>

                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions footer */}
            <div className="p-6 border-t border-stone-200 bg-white flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                  Payment Status
                </span>
                <span
                  className={`text-xs font-semibold mt-1 ${
                    selectedApp.paymentStatus === "PAID" ? "text-emerald-700" : "text-amber-700"
                  }`}
                >
                  {selectedApp.paymentStatus === "PAID"
                    ? `Paid ₹${selectedApp.paymentAmount.toLocaleString("en-IN")}`
                    : `Pending verification`}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {selectedApp.paymentStatus === "PAID" ? (
                  selectedApp.status === "EXAM_SCHEDULED" ? (
                    <button
                      onClick={() => handleToggleExam(selectedApp.id, false)}
                      disabled={isPending}
                      className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/60 disabled:opacity-50 text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <XCircle size={13} />
                      Revoke Exam
                    </button>
                  ) : (
                    <button
                      onClick={() => handleToggleExam(selectedApp.id, true)}
                      disabled={isPending}
                      className="bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50 text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <CheckCircle2 size={13} />
                      Approve for Exam
                    </button>
                  )
                ) : (
                  <span className="text-xs text-stone-500 font-semibold flex items-center gap-1.5 bg-stone-50 border border-stone-200/60 px-3.5 py-2 rounded-lg">
                    <AlertCircle size={13} className="text-amber-600" />
                    Awaiting Payment
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
