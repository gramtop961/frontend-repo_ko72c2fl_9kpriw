import React from 'react';
import { HelpCircle, Mail, MessageSquare } from 'lucide-react';

const HelpItem = ({ icon: Icon, title, desc, href }) => (
  <a
    href={href}
    className="flex flex-col gap-2 rounded-xl border border-slate-200/80 bg-white/80 p-5 text-left shadow-sm transition hover:shadow-md backdrop-blur"
  >
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-sky-600" />
      <h4 className="font-medium text-slate-900">{title}</h4>
    </div>
    <p className="text-sm text-slate-600">{desc}</p>
  </a>
);

const HelpCenter = () => {
  return (
    <section id="help" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Help Center</h2>
        <p className="mt-2 text-slate-600">
          Find quick answers or reach out to our team whenever you need support.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <HelpItem icon={HelpCircle} title="Documentation" desc="Guides and API references to help you ship faster." href="#" />
        <HelpItem icon={MessageSquare} title="Community" desc="Join discussions, share tips, and get feedback." href="#" />
        <HelpItem icon={Mail} title="Contact Support" desc="Email our team for priority assistance." href="#" />
      </div>
    </section>
  );
};

export default HelpCenter;
