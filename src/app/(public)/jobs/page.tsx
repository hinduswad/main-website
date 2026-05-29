import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Search, MapPin, CreditCard, ArrowRight } from "lucide-react";

// Mock baseline jobs for fallback
const MOCK_JOBS = [
  {
    id: "mock-1",
    title: "Field Officer (Permanent)",
    slug: "field-officer-permanent",
    roleType: "FIELD_OFFICER",
    employmentType: "PERMANENT",
    salaryMin: 20000,
    salaryMax: 40000,
    applicationFee: 1000,
    district: "Bangalore",
    state: "Karnataka",
  },
  {
    id: "mock-2",
    title: "Field Officer (Temporary)",
    slug: "field-officer-temporary",
    roleType: "FIELD_OFFICER",
    employmentType: "TEMPORARY",
    salaryMin: 20000,
    salaryMax: 40000,
    applicationFee: 300,
    district: "Bangalore",
    state: "Karnataka",
  },
  {
    id: "mock-3",
    title: "Sales Executive (Permanent)",
    slug: "sales-executive-permanent",
    roleType: "SALES_EXECUTIVE",
    employmentType: "PERMANENT",
    salaryMin: 23000,
    salaryMax: 50000,
    applicationFee: 1000,
    district: "Bangalore",
    state: "Karnataka",
  },
  {
    id: "mock-4",
    title: "Sales Executive (Temporary)",
    slug: "sales-executive-temporary",
    roleType: "SALES_EXECUTIVE",
    employmentType: "TEMPORARY",
    salaryMin: 23000,
    salaryMax: 50000,
    applicationFee: 300,
    district: "Bangalore",
    state: "Karnataka",
  },
  {
    id: "mock-5",
    title: "TeleCaller (Permanent)",
    slug: "telecaller-permanent",
    roleType: "TELECALLER",
    employmentType: "PERMANENT",
    salaryMin: 20000,
    salaryMax: 40000,
    applicationFee: 1000,
    district: "Bangalore",
    state: "Karnataka",
  },
  {
    id: "mock-6",
    title: "TeleCaller (Temporary)",
    slug: "telecaller-temporary",
    roleType: "TELECALLER",
    employmentType: "TEMPORARY",
    salaryMin: 20000,
    salaryMax: 40000,
    applicationFee: 300,
    district: "Bangalore",
    state: "Karnataka",
  }
];

type SearchParams = Promise<{
  role?: string;
  type?: string;
  search?: string;
}>;

export default async function JobsPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const filterRole = searchParams.role || "";
  const filterType = searchParams.type || "";
  const searchQuery = searchParams.search || "";

  let jobs = [];
  let isFallback = false;

  try {
    jobs = await prisma.jobPost.findMany({
      where: {
        status: "open",
        ...(filterRole && { roleType: filterRole as any }),
        ...(filterType && { employmentType: filterType as any }),
        ...(searchQuery && {
          OR: [
            { title: { contains: searchQuery, mode: "insensitive" } },
            { description: { contains: searchQuery, mode: "insensitive" } },
          ],
        }),
      },
      orderBy: { postedAt: "desc" },
    });
  } catch (error) {
    isFallback = true;
    jobs = MOCK_JOBS.filter(job => {
      if (filterRole && job.roleType !== filterRole) return false;
      if (filterType && job.employmentType !== filterType) return false;
      if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }

  // Helper to build URL with query params
  const getFilterUrl = (params: { role?: string; type?: string; search?: string }) => {
    const updated = {
      role: params.role !== undefined ? params.role : filterRole,
      type: params.type !== undefined ? params.type : filterType,
      search: params.search !== undefined ? params.search : searchQuery,
    };
    const query = new URLSearchParams();
    if (updated.role) query.set("role", updated.role);
    if (updated.type) query.set("type", updated.type);
    if (updated.search) query.set("search", updated.search);
    const queryString = query.toString();
    return `/jobs${queryString ? `?${queryString}` : ""}`;
  };

  const rolePills = [
    { label: "All Roles", value: "" },
    { label: "Field Officers", value: "FIELD_OFFICER" },
    { label: "Sales Executives", value: "SALES_EXECUTIVE" },
    { label: "TeleCallers", value: "TELECALLER" },
  ];

  const typePills = [
    { label: "All Types", value: "" },
    { label: "Permanent", value: "PERMANENT" },
    { label: "Temporary", value: "TEMPORARY" },
  ];

  return (
    <main className="min-h-screen bg-white pt-6 pb-20 sm:pt-8 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Clear Heading */}
        <div className="max-w-2xl mb-8 space-y-2">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block">Available Opportunities</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Open Positions
          </h1>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Select a role and track type to view requirements and schedule your slot.
          </p>
        </div>

        {/* Premium SPACIOUS Search & Filter Grid */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <form method="GET" action="/jobs" className="relative max-w-md">
            {filterRole && <input type="hidden" name="role" value={filterRole} />}
            {filterType && <input type="hidden" name="type" value={filterType} />}
            <Search className="absolute left-4 top-3 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              placeholder="Search keyword..."
              className="w-full pl-11 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 text-zinc-950 transition-all placeholder-zinc-400"
            />
          </form>

          {/* Horizontal selection pills */}
          <div className="flex flex-col gap-4 pt-1">
            {/* Roles */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mr-2">Role</span>
              {rolePills.map((pill) => {
                const isActive = filterRole === pill.value;
                return (
                  <Link
                    key={pill.value}
                    href={getFilterUrl({ role: pill.value })}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-350 ${
                      isActive
                        ? "bg-orange-500 border-orange-500 text-white shadow-sm"
                        : "bg-white border-zinc-200 text-zinc-650 hover:border-zinc-350"
                    }`}
                  >
                    {pill.label}
                  </Link>
                );
              })}
            </div>

            {/* Employment Types */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mr-2">Type</span>
              {typePills.map((pill) => {
                const isActive = filterType === pill.value;
                return (
                  <Link
                    key={pill.value}
                    href={getFilterUrl({ type: pill.value })}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-350 ${
                      isActive
                        ? "bg-orange-500 border-orange-500 text-white shadow-sm"
                        : "bg-white border-zinc-200 text-zinc-650 hover:border-zinc-350"
                    }`}
                  >
                    {pill.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Minimal Cards list */}
        {jobs.length === 0 ? (
          <div className="py-20 text-center border border-zinc-100 rounded-3xl bg-zinc-50/50">
            <p className="text-sm sm:text-base font-bold text-zinc-400">No matching positions found.</p>
            <Link href="/jobs" className="text-xs sm:text-sm text-orange-500 font-extrabold mt-2 inline-block hover:underline">
              Clear all filters
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group flex flex-col md:flex-row md:items-center md:justify-between bg-white border border-zinc-150 p-5 sm:p-6 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-zinc-100/60 hover:border-zinc-250"
              >
                {/* Title & Badge */}
                <div className="space-y-1.5 md:max-w-md">
                  <div className="flex items-center gap-3.5">
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">
                      {job.roleType.replace("_", " ")}
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      {job.employmentType}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight transition-colors duration-305 group-hover:text-orange-500">
                    {job.title}
                  </h3>
                </div>

                {/* Horizontal Quick Stats */}
                <div className="grid grid-cols-2 sm:flex sm:items-center gap-x-6 gap-y-2.5 my-3 md:my-0">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-zinc-400 shrink-0" />
                    <div>
                      <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Location</span>
                      <span className="text-sm font-semibold text-zinc-700">{job.district}, KA</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CreditCard size={16} className="text-zinc-400 shrink-0" />
                    <div>
                      <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Monthly Est.</span>
                      <span className="text-sm font-semibold text-zinc-950">
                        ₹{(job.salaryMin / 1000).toFixed(0)}k - {(job.salaryMax / 1000).toFixed(0)}k
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-6 bg-zinc-200" />

                  <div>
                    <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Application Fee</span>
                    <span className="text-sm font-bold text-orange-500">₹{job.applicationFee}</span>
                  </div>
                </div>

                {/* Spacious Apply button */}
                <div className="flex items-center">
                  <Button asChild className="w-full md:w-auto bg-orange-500 text-white hover:bg-orange-600 rounded-full px-5 py-2 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02] shadow-md shadow-orange-500/10">
                    <Link href={`/jobs/${job.slug}`}>
                      Details <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
