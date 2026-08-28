"use client";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock3, Loader2, Mail, MapPin, Phone, RefreshCw, Search, Users, XCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "LOST";
type Lead = { id: string; name: string; phone: string; email: string | null; projectType: string; budget: string | null; location: string | null; message: string; status: LeadStatus; createdAt: string; updatedAt: string };
const statuses: LeadStatus[] = ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"];
const statusStyles: Record<LeadStatus, string> = { NEW: "bg-[#F97316]/10 text-[#F97316]", CONTACTED: "bg-blue-500/10 text-blue-600 dark:text-blue-400", QUALIFIED: "bg-purple-500/10 text-purple-600 dark:text-purple-400", CONVERTED: "bg-green-500/10 text-green-600 dark:text-green-400", LOST: "bg-red-500/10 text-red-600 dark:text-red-400" };
type SortOrder = "NEWEST" | "OLDEST";
export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | LeadStatus>("ALL");
  const [sortOrder, setSortOrder] = useState<SortOrder>("NEWEST");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  async function fetchLeads(): Promise<Lead[]> {
    const response = await fetch("/api/leads", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load leads (${response.status}).`);
    }
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || "Failed to load leads.");
    }
    return Array.isArray(data.leads) ? data.leads : [];
  }
  async function refreshLeads() {
    try {
      setRefreshing(true);
      setError("");
      const data = await fetchLeads();
      setLeads(data);
      if (selectedLead) {
        const updatedSelectedLead = data.find((lead) => lead.id === selectedLead.id);
        if (updatedSelectedLead) {
          setSelectedLead(updatedSelectedLead);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load leads.");
    } finally {
      setRefreshing(false);
    }
  }
  useEffect(() => {
    let cancelled = false;
    fetchLeads()
      .then((data) => {
        if (!cancelled) {
          setLeads(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load leads.");
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);
  async function updateLeadStatus(leadId: string, status: LeadStatus) {
    try {
      setUpdatingStatus(true);
      setError("");
      const response = await fetch("/api/leads", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: leadId, status }) });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to update lead status.");
      }
      const updatedLead = data.lead as Lead;
      setLeads((currentLeads) => currentLeads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead)));
      setSelectedLead((currentLead) => (currentLead?.id === updatedLead.id ? updatedLead : currentLead));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update lead status.");
    } finally {
      setUpdatingStatus(false);
    }
  }
  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = leads.filter((lead) => {
      const matchesStatus = statusFilter === "ALL" || lead.status === statusFilter;
      if (!matchesStatus) {
        return false;
      }
      if (!query) {
        return true;
      }
      return [lead.name, lead.phone, lead.email, lead.projectType, lead.budget, lead.location, lead.message, lead.status].filter(Boolean).some((value) => String(value).toLowerCase().includes(query));
    });
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "NEWEST" ? dateB - dateA : dateA - dateB;
    });
  }, [leads, search, statusFilter, sortOrder]);
  const counts = useMemo(() => ({ total: leads.length, new: leads.filter((lead) => lead.status === "NEW").length, contacted: leads.filter((lead) => lead.status === "CONTACTED").length, qualified: leads.filter((lead) => lead.status === "QUALIFIED").length, converted: leads.filter((lead) => lead.status === "CONVERTED").length, lost: leads.filter((lead) => lead.status === "LOST").length }), [leads]);
  function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-BD", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));
  }
  function formatTime(date: string) {
    return new Intl.DateTimeFormat("en-BD", { hour: "numeric", minute: "2-digit" }).format(new Date(date));
  }
  function clearFilters() {
    setSearch("");
    setStatusFilter("ALL");
    setSortOrder("NEWEST");
  }
  return (
    <main className="min-h-screen bg-white text-[#111111] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      {" "}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#111111]/95">
        {" "}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          {" "}
          <div>
            {" "}
            <Link href="/" className="text-lg font-bold tracking-tighter sm:text-xl">
              {" "}
              FORM<span className="text-[#F97316]">/</span> SPACE{" "}
            </Link>{" "}
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40"> Admin / Leads </p>{" "}
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-3">
            {" "}
            <ThemeToggle />{" "}
            <button type="button" onClick={refreshLeads} disabled={refreshing} aria-label="Refresh leads" className="flex h-9 items-center justify-center gap-2 border border-black/10 px-3 text-xs font-semibold transition-colors hover:border-[#F97316] hover:text-[#F97316] disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10">
              {" "}
              <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} /> <span className="hidden sm:inline"> Refresh </span>{" "}
            </button>{" "}
            <Link href="/" aria-label="Go to website" className="flex h-9 items-center justify-center gap-2 border border-black/10 px-3 text-xs font-semibold transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/10">
              {" "}
              <ArrowLeft size={14} /> <span className="hidden sm:inline"> Website </span>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        {" "}
        <div className="border-t-4 border-[#F97316] pt-6">
          {" "}
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs"> Lead management </p>{" "}
          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            {" "}
            <div>
              {" "}
              <h1 className="font-display text-4xl font-medium leading-none tracking-[-0.04em] sm:text-5xl"> Project inquiries </h1> <p className="mt-4 max-w-xl text-sm leading-6 text-black/50 dark:text-white/50"> Manage and follow up with people interested in working with FORM/SPACE. </p>{" "}
            </div>{" "}
            <div className="text-sm text-black/40 dark:text-white/40">
              {" "}
              {filteredLeads.length} {filteredLeads.length === 1 ? "lead" : "leads"} shown{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-10 grid grid-cols-2 border-t border-black/10 dark:border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {" "}
          <StatCard label="Total" value={counts.total} icon={<Users size={17} />} /> <StatCard label="New" value={counts.new} icon={<Clock3 size={17} />} active={statusFilter === "NEW"} onClick={() => setStatusFilter(statusFilter === "NEW" ? "ALL" : "NEW")} /> <StatCard label="Contacted" value={counts.contacted} active={statusFilter === "CONTACTED"} onClick={() => setStatusFilter(statusFilter === "CONTACTED" ? "ALL" : "CONTACTED")} /> <StatCard label="Qualified" value={counts.qualified} active={statusFilter === "QUALIFIED"} onClick={() => setStatusFilter(statusFilter === "QUALIFIED" ? "ALL" : "QUALIFIED")} /> <StatCard label="Converted" value={counts.converted} icon={<CheckCircle2 size={17} />} active={statusFilter === "CONVERTED"} onClick={() => setStatusFilter(statusFilter === "CONVERTED" ? "ALL" : "CONVERTED")} /> <StatCard label="Lost" value={counts.lost} icon={<XCircle size={17} />} active={statusFilter === "LOST"} onClick={() => setStatusFilter(statusFilter === "LOST" ? "ALL" : "LOST")} />{" "}
        </div>{" "}
        <div className="mt-10 flex flex-col gap-3 border-y border-black/10 py-4 dark:border-white/10 lg:flex-row">
          {" "}
          <div className="relative min-w-0 flex-1">
            {" "}
            <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/30" /> <input type="search" placeholder="Search name, phone, email, project..." value={search} onChange={(event) => setSearch(event.target.value)} className="w-full border border-black/10 bg-transparent py-3 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[#F97316] dark:border-white/10 dark:placeholder:text-white/30" />{" "}
          </div>{" "}
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as "ALL" | LeadStatus)} className="border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#F97316] dark:border-white/10 dark:bg-[#111111]">
            {" "}
            <option value="ALL">All statuses</option>{" "}
            {statuses.map((status) => (
              <option key={status} value={status}>
                {" "}
                {status}{" "}
              </option>
            ))}{" "}
          </select>{" "}
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)} className="border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#F97316] dark:border-white/10 dark:bg-[#111111]">
            {" "}
            <option value="NEWEST"> Newest first </option> <option value="OLDEST"> Oldest first </option>{" "}
          </select>{" "}
          {(search || statusFilter !== "ALL") && (
            <button type="button" onClick={clearFilters} className="border border-black/10 px-4 py-3 text-sm font-semibold transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/10">
              {" "}
              Clear{" "}
            </button>
          )}{" "}
        </div>{" "}
        {error && <div className="mt-6 border border-red-500/20 bg-red-500/5 px-4 py-4 text-sm text-red-600 dark:text-red-400"> {error} </div>}{" "}
        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            {" "}
            <Loader2 size={28} className="animate-spin text-[#F97316]" />{" "}
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="mt-8 border border-black/10 px-6 py-16 text-center dark:border-white/10">
            {" "}
            <p className="font-display text-2xl"> No leads found. </p> <p className="mt-2 text-sm text-black/40 dark:text-white/40"> Try changing your search or status filter. </p>{" "}
            {(search || statusFilter !== "ALL") && (
              <button type="button" onClick={clearFilters} className="mt-6 text-sm font-semibold text-[#F97316]">
                {" "}
                Clear filters{" "}
              </button>
            )}{" "}
          </div>
        ) : (
          <>
            {" "}
            <div className="mt-8 hidden overflow-hidden border border-black/10 dark:border-white/10 lg:block">
              {" "}
              <table className="w-full border-collapse text-left">
                {" "}
                <thead>
                  {" "}
                  <tr className="border-b border-black/10 bg-black/[0.02] text-[10px] font-semibold uppercase tracking-[0.16em] dark:border-white/10 dark:bg-white/[0.02]">
                    {" "}
                    <th className="px-5 py-4"> Client </th> <th className="px-5 py-4"> Project </th> <th className="px-5 py-4"> Budget </th> <th className="px-5 py-4"> Location </th> <th className="px-5 py-4"> Date </th> <th className="px-5 py-4"> Status </th> <th className="px-5 py-4" />{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="group border-b border-black/10 transition-colors last:border-0 hover:bg-black/[0.02] dark:border-white/10 dark:hover:bg-white/[0.02]">
                      {" "}
                      <td className="px-5 py-5">
                        {" "}
                        <p className="font-semibold"> {lead.name} </p> <p className="mt-1 text-xs text-black/40 dark:text-white/40"> {lead.phone} </p>{" "}
                      </td>{" "}
                      <td className="px-5 py-5">
                        {" "}
                        <p className="text-sm"> {lead.projectType} </p>{" "}
                      </td>{" "}
                      <td className="px-5 py-5">
                        {" "}
                        <p className="text-sm"> {lead.budget || "Not specified"} </p>{" "}
                      </td>{" "}
                      <td className="px-5 py-5">
                        {" "}
                        <p className="text-sm"> {lead.location || "Not specified"} </p>{" "}
                      </td>{" "}
                      <td className="px-5 py-5">
                        {" "}
                        <p className="text-sm"> {formatDate(lead.createdAt)} </p> <p className="mt-1 text-xs text-black/40 dark:text-white/40"> {formatTime(lead.createdAt)} </p>{" "}
                      </td>{" "}
                      <td className="px-5 py-5">
                        {" "}
                        <StatusBadge status={lead.status} />{" "}
                      </td>{" "}
                      <td className="px-5 py-5">
                        {" "}
                        <button type="button" onClick={() => setSelectedLead(lead)} className="flex h-9 w-9 items-center justify-center border border-black/10 transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/10" aria-label={`View ${lead.name}`}>
                          {" "}
                          <ArrowUpRight size={16} />{" "}
                        </button>{" "}
                      </td>{" "}
                    </tr>
                  ))}{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
            <div className="mt-8 grid gap-4 lg:hidden">
              {" "}
              {filteredLeads.map((lead) => (
                <button key={lead.id} type="button" onClick={() => setSelectedLead(lead)} className="w-full border border-black/10 p-5 text-left transition-colors hover:border-[#F97316] dark:border-white/10">
                  {" "}
                  <div className="flex items-start justify-between gap-4">
                    {" "}
                    <div>
                      {" "}
                      <p className="font-semibold"> {lead.name} </p> <p className="mt-1 text-xs text-black/40 dark:text-white/40"> {lead.phone} </p>{" "}
                    </div>{" "}
                    <StatusBadge status={lead.status} />{" "}
                  </div>{" "}
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-black/10 pt-4 dark:border-white/10">
                    {" "}
                    <InfoCell label="Project" value={lead.projectType} /> <InfoCell label="Budget" value={lead.budget || "Not specified"} /> <InfoCell label="Location" value={lead.location || "Not specified"} /> <InfoCell label="Received" value={formatDate(lead.createdAt)} />{" "}
                  </div>{" "}
                </button>
              ))}{" "}
            </div>{" "}
          </>
        )}{" "}
      </div>{" "}
      {selectedLead && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onClick={() => {
            if (!updatingStatus) {
              setSelectedLead(null);
            }
          }}
        >
          {" "}
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white text-[#111111] dark:bg-[#181818] dark:text-white" onClick={(event) => event.stopPropagation()}>
            {" "}
            <div className="flex items-start justify-between border-b border-black/10 p-6 dark:border-white/10 sm:p-8">
              {" "}
              <div>
                {" "}
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F97316]"> Lead details </p> <h2 className="mt-2 font-display text-3xl font-medium tracking-tight"> {selectedLead.name} </h2>{" "}
                <div className="mt-3">
                  {" "}
                  <StatusBadge status={selectedLead.status} />{" "}
                </div>{" "}
              </div>{" "}
              <button type="button" onClick={() => setSelectedLead(null)} disabled={updatingStatus} className="text-sm font-medium transition-colors hover:text-[#F97316] disabled:cursor-not-allowed disabled:opacity-50">
                {" "}
                Close{" "}
              </button>{" "}
            </div>{" "}
            <div className="space-y-7 p-6 sm:p-8">
              {" "}
              <div className="grid gap-5 sm:grid-cols-2">
                {" "}
                <DetailItem icon={<Phone size={16} />} label="Phone" value={selectedLead.phone} href={`tel:${selectedLead.phone}`} /> {selectedLead.email && <DetailItem icon={<Mail size={16} />} label="Email" value={selectedLead.email} href={`mailto:${selectedLead.email}`} />} <DetailItem icon={<MapPin size={16} />} label="Location" value={selectedLead.location || "Not specified"} /> <DetailItem label="Project type" value={selectedLead.projectType} /> <DetailItem label="Budget" value={selectedLead.budget || "Not specified"} /> <DetailItem label="Received" value={`${formatDate(selectedLead.createdAt)} at ${formatTime(selectedLead.createdAt)}`} />{" "}
              </div>{" "}
              <div className="border-t border-black/10 pt-6 dark:border-white/10">
                {" "}
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40"> Message </p> <p className="mt-4 whitespace-pre-wrap text-sm leading-7"> {selectedLead.message} </p>{" "}
              </div>{" "}
              <div className="border-t border-black/10 pt-6 dark:border-white/10">
                {" "}
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40"> Update status </p>{" "}
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {" "}
                  {statuses.map((status) => (
                    <button key={status} type="button" disabled={updatingStatus || selectedLead.status === status} onClick={() => updateLeadStatus(selectedLead.id, status)} className={`flex min-h-10 items-center justify-center px-2 text-[9px] font-bold tracking-[0.06em] transition-all ${selectedLead.status === status ? `${statusStyles[status]} ring-1 ring-current` : "border border-black/10 hover:border-[#F97316] hover:text-[#F97316] dark:border-white/10"} ${updatingStatus ? "cursor-not-allowed opacity-50" : ""}`}>
                      {" "}
                      {updatingStatus && selectedLead.status !== status ? (
                        status
                      ) : selectedLead.status === status ? (
                        <>
                          {" "}
                          <CheckCircle2 size={13} className="mr-1" /> {status}{" "}
                        </>
                      ) : (
                        status
                      )}{" "}
                    </button>
                  ))}{" "}
                </div>{" "}
                {updatingStatus && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-black/40 dark:text-white/40">
                    {" "}
                    <Loader2 size={13} className="animate-spin" /> Updating status...{" "}
                  </div>
                )}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </main>
  );
}
function StatCard({ label, value, icon, active = false, onClick }: { label: string; value: number; icon?: React.ReactNode; active?: boolean; onClick?: () => void }) {
  const content = (
    <>
      {" "}
      <div className="flex items-center justify-between">
        {" "}
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40 dark:text-white/40"> {label} </span> {icon && <span className="text-[#F97316]"> {icon} </span>}{" "}
      </div>{" "}
      <p className="mt-3 font-display text-3xl font-medium tracking-tight"> {value} </p>{" "}
    </>
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`border-b border-r border-black/10 px-4 py-5 text-left transition-colors dark:border-white/10 sm:px-5 ${active ? "bg-[#F97316]/5" : "hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"}`}>
        {" "}
        {content}{" "}
      </button>
    );
  }
  return <div className="border-b border-r border-black/10 px-4 py-5 dark:border-white/10 sm:px-5"> {content} </div>;
}
function StatusBadge({ status }: { status: LeadStatus }) {
  return <span className={`inline-flex px-2.5 py-1 text-[9px] font-bold tracking-[0.08em] ${statusStyles[status]}`}> {status} </span>;
}
function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      {" "}
      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40 dark:text-white/40"> {label} </p> <p className="mt-1 text-sm">{value}</p>{" "}
    </div>
  );
}
function DetailItem({ icon, label, value, href }: { icon?: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      {" "}
      <div className="flex items-center gap-2 text-[#F97316]">
        {" "}
        {icon} <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40 dark:text-white/40"> {label} </span>{" "}
      </div>{" "}
      <p className="mt-2 wrap-break-word text-sm font-medium"> {value} </p>{" "}
    </>
  );
  if (href) {
    return (
      <a href={href} className="block transition-colors hover:text-[#F97316]">
        {" "}
        {content}{" "}
      </a>
    );
  }
  return <div>{content}</div>;
}
