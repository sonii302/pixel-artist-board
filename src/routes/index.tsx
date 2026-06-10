import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Megaphone,
  Users,
  BookOpen,
  FileBarChart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  RefreshCw,
  Calendar,
  Plus,
  Bell,
  Sun,
  Globe,
  Smartphone,
  PauseCircle,
  ArrowUpDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campaigns — Opsis Pro" },
      { name: "description", content: "View and manage advertising campaigns across apps and the web." },
      { property: "og:title", content: "Campaigns — Opsis Pro" },
      { property: "og:description", content: "View and manage advertising campaigns across apps and the web." },
    ],
  }),
  component: Dashboard,
});

type Campaign = {
  id: number;
  name: string;
  initials: string;
  iconColor: string;
  status: "Active" | "Paused";
  type: "App" | "Web";
  objective: "Conversions" | "Impressions";
  impressions: number;
  clicks: number;
  installs: number;
  ctr: string;
  cpm: string;
  conversion: number;
  budget: string;
  start: string;
  end: string;
};

const campaigns: Campaign[] = [
  { id: 85, name: "Gowith Test", initials: "G", iconColor: "bg-orange-500", status: "Paused", type: "App", objective: "Conversions", impressions: 0, clicks: 0, installs: 0, ctr: "0.00%", cpm: "$0.00", conversion: 0, budget: "USD 0.00", start: "Jun 09, 2026", end: "—" },
  { id: 84, name: "pixelkart-unity-integration-test", initials: "P", iconColor: "bg-rose-500", status: "Active", type: "Web", objective: "Impressions", impressions: 0, clicks: 1, installs: 0, ctr: "0.00%", cpm: "$0.00", conversion: 0, budget: "USD 0.00", start: "Jun 09, 2026", end: "—" },
  { id: 83, name: "Tudummmshots_AOS_CPA", initials: "T", iconColor: "bg-zinc-900", status: "Active", type: "App", objective: "Conversions", impressions: 0, clicks: 6, installs: 0, ctr: "0.00%", cpm: "$0.00", conversion: 0, budget: "USD 0.00", start: "Jun 08, 2026", end: "—" },
  { id: 81, name: "Appcampaign-PRACHI", initials: "A", iconColor: "bg-emerald-500", status: "Paused", type: "App", objective: "Conversions", impressions: 0, clicks: 0, installs: 0, ctr: "0.00%", cpm: "$0.00", conversion: 0, budget: "USD 0.00", start: "Jun 02, 2026", end: "—" },
  { id: 80, name: "prachi-test campaign", initials: "P", iconColor: "bg-stone-700", status: "Paused", type: "Web", objective: "Conversions", impressions: 0, clicks: 0, installs: 0, ctr: "0.00%", cpm: "$0.00", conversion: 0, budget: "USD 100.00", start: "Jun 01, 2026", end: "—" },
  { id: 79, name: "test vishal", initials: "T", iconColor: "bg-sky-500", status: "Paused", type: "Web", objective: "Conversions", impressions: 0, clicks: 4, installs: 0, ctr: "0.00%", cpm: "$0.00", conversion: 0, budget: "USD 0.00", start: "Jun 01, 2026", end: "—" },
  { id: 78, name: "ANYTIME_ASTRO_CPE_01_ios", initials: "A", iconColor: "bg-rose-500", status: "Paused", type: "App", objective: "Conversions", impressions: 0, clicks: 0, installs: 0, ctr: "0.00%", cpm: "$0.00", conversion: 0, budget: "USD 0.00", start: "May 29, 2026", end: "—" },
  { id: 76, name: "Paytm UPI IN CPA 2", initials: "P", iconColor: "bg-blue-600", status: "Active", type: "App", objective: "Conversions", impressions: 0, clicks: 0, installs: 0, ctr: "0.00%", cpm: "$0.00", conversion: 0, budget: "USD 0.00", start: "May 28, 2026", end: "—" },
];

function Dashboard() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 px-8 py-6 overflow-auto">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Campaigns</h1>
              <p className="text-sm text-muted-foreground mt-1">View and manage advertising campaigns</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card text-sm text-foreground hover:bg-muted transition">
                <Calendar className="w-4 h-4" />
                Select date range
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-sm">
                <Plus className="w-4 h-4" />
                Create Campaign
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg">
            <div className="flex items-center gap-3 p-4 border-b border-border flex-wrap">
              <div className="relative flex-1 min-w-[220px] max-w-sm">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  placeholder="Search campaigns..."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <SelectBox label="All Status" />
              <SelectBox label="All Apps" />
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-card text-sm hover:bg-muted transition">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <span className="text-sm text-muted-foreground ml-auto">10 of 63 campaigns</span>
              <Pagination active={activePage} onChange={setActivePage} />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60 text-muted-foreground">
                    <th className="px-4 py-3 w-10"><input type="checkbox" className="rounded border-border" /></th>
                    {["Campaign Name","Status","Type","Objective","Impressions","Clicks","Installs","CTR","CPM","Conversion","Budget","Start Date","End Date","Ac"].map(h => (
                      <th key={h} className="px-4 py-3 text-left font-medium whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">{h}<ArrowUpDown className="w-3 h-3 opacity-60" /></span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((c) => (
                    <tr key={c.id} className="border-t border-border hover:bg-muted/40 transition">
                      <td className="px-4 py-4"><input type="checkbox" className="rounded border-border" /></td>
                      <td className="px-4 py-4 min-w-[240px]">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-md flex items-center justify-center text-primary-foreground text-sm font-semibold ${c.iconColor}`}>
                            {c.initials}
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{c.name}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">ID: {c.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4"><StatusBadge status={c.status} /></td>
                      <td className="px-4 py-4"><TypeBadge type={c.type} /></td>
                      <td className="px-4 py-4 text-foreground">{c.objective}</td>
                      <td className="px-4 py-4">{c.impressions}</td>
                      <td className="px-4 py-4">{c.clicks}</td>
                      <td className="px-4 py-4">{c.installs}</td>
                      <td className="px-4 py-4">{c.ctr}</td>
                      <td className="px-4 py-4">{c.cpm}</td>
                      <td className="px-4 py-4">{c.conversion}</td>
                      <td className="px-4 py-4 whitespace-nowrap">{c.budget}</td>
                      <td className="px-4 py-4 whitespace-nowrap">{c.start}</td>
                      <td className="px-4 py-4 text-muted-foreground">{c.end}</td>
                      <td className="px-4 py-4 text-muted-foreground">⋯</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  const items = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Megaphone, label: "Campaigns", active: true, children: ["Manage Campaigns", "Create Campaign"] },
    { icon: Users, label: "Advertisers" },
    { icon: BookOpen, label: "Publishers" },
    { icon: FileBarChart, label: "MMP Reporting" },
    { icon: FileBarChart, label: "Reports" },
  ];
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="px-6 py-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">opsis</span>
          <span className="text-xs font-semibold text-primary -ml-1 mt-1">pro</span>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4">
        <div className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Main Menu</div>
        <ul className="space-y-1">
          {items.map((it) => (
            <li key={it.label}>
              <button
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition ${
                  it.active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground hover:bg-muted"
                }`}
              >
                <span className="flex items-center gap-3">
                  <it.icon className="w-4 h-4" />
                  {it.label}
                </span>
                {it.children && <ChevronDown className="w-4 h-4" />}
              </button>
              {it.active && it.children && (
                <ul className="mt-1 ml-9 space-y-1 border-l border-sidebar-border pl-3">
                  {it.children.map((child, i) => (
                    <li key={child}>
                      <button className={`w-full text-left px-2 py-1.5 rounded text-sm ${i === 0 ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}>
                        {child}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-4 py-4 border-t border-sidebar-border">
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-4 h-4" />
          Collapse Sidebar
        </button>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-end px-8 gap-4">
      <button className="p-2 rounded-md hover:bg-muted text-muted-foreground"><Sun className="w-5 h-5" /></button>
      <button className="p-2 rounded-md hover:bg-muted text-muted-foreground relative">
        <Bell className="w-5 h-5" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
      </button>
      <div className="w-9 h-9 rounded-full bg-zinc-800 text-white flex items-center justify-center text-sm font-semibold">PD</div>
    </header>
  );
}

function SelectBox({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center justify-between gap-2 min-w-[150px] px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground hover:bg-muted transition">
      {label}
      <ChevronDown className="w-4 h-4 text-muted-foreground" />
    </button>
  );
}

function StatusBadge({ status }: { status: "Active" | "Paused" }) {
  if (status === "Active") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-success/10 text-success text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-success" />
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
      <PauseCircle className="w-3 h-3" />
      Paused
    </span>
  );
}

function TypeBadge({ type }: { type: "App" | "Web" }) {
  const Icon = type === "App" ? Smartphone : Globe;
  const color = type === "App" ? "text-success" : "text-info";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
      <Icon className={`w-4 h-4 ${color}`} />
      {type}
    </span>
  );
}

function Pagination({ active, onChange }: { active: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      <button className="p-1.5 rounded-md border border-border hover:bg-muted text-muted-foreground"><ChevronLeft className="w-4 h-4" /></button>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`w-8 h-8 rounded-md text-sm font-medium transition ${
            active === n ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted text-foreground"
          }`}
        >
          {n}
        </button>
      ))}
      <button className="p-1.5 rounded-md border border-border hover:bg-muted text-muted-foreground"><ChevronRight className="w-4 h-4" /></button>
    </div>
  );
}
