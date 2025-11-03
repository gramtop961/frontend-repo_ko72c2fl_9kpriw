import React from 'react';
import { Check, CreditCard } from 'lucide-react';

const Tier = ({ name, price, descriptor, features, cta }) => (
  <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{descriptor}</p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-slate-900">{price}</span>
        <span className="text-slate-500">/month</span>
      </div>
    </div>
    <ul className="mt-6 space-y-2 text-sm">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-700">
          <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a
      href="#"
      className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white shadow-sm transition hover:bg-slate-800"
    >
      <CreditCard className="h-4 w-4" />
      {cta}
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Simple, transparent pricing</h2>
        <p className="mt-2 text-slate-600">
          Start free, then scale with usage. No hidden fees. Cancel anytime.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Tier
          name="Starter"
          price="$0"
          descriptor="For personal projects"
          features={['Auth up to 1k users', 'Basic analytics', 'Community support']}
          cta="Start for free"
        />
        <Tier
          name="Growth"
          price="$29"
          descriptor="For growing teams"
          features={['Auth up to 10k users', 'Advanced analytics', 'Priority support']}
          cta="Upgrade to Growth"
        />
        <Tier
          name="Scale"
          price="$99"
          descriptor="For production apps"
          features={['Unlimited users', 'Realtime dashboards', 'SLA + dedicated support']}
          cta="Go Scale"
        />
      </div>
    </section>
  );
};

export default Pricing;
