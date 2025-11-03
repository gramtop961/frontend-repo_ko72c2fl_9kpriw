import React from 'react';
import { BarChart, Activity, Users } from 'lucide-react';

const Stat = ({ icon: Icon, label, value, trend }) => (
  <div className="rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-slate-600">
        <Icon className="h-4 w-4 text-indigo-600" />
        <span className="text-sm">{label}</span>
      </div>
      <span className={`text-xs ${trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{trend}</span>
    </div>
    <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
  </div>
);

const DashboardCards = () => {
  return (
    <section id="analytics" className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Analytics Overview</h2>
          <p className="mt-1 text-slate-600">Understand growth with clean, simple metrics.</p>
        </div>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">Open dashboard</a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Stat icon={BarChart} label="MRR" value="$24,830" trend="+6.2%" />
        <Stat icon={Users} label="Active Users" value="12,481" trend="+3.1%" />
        <Stat icon={Activity} label="Churn" value="2.1%" trend="-0.3%" />
      </div>
    </section>
  );
};

export default DashboardCards;
