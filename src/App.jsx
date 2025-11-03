import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import Hero3D from './components/Hero3D';
import DashboardCards from './components/DashboardCards';
import Pricing from './components/Pricing';
import HelpCenter from './components/HelpCenter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-sky-500 to-indigo-600" />
            <span className="font-semibold text-slate-900">Iridescent</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#analytics" className="hover:text-slate-900">Analytics</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#help" className="hover:text-slate-900">Help Center</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-slate-800 ring-1 ring-slate-200 hover:bg-white"
            >
              <LogIn className="h-4 w-4" />
              Sign in
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-1.5 text-white shadow-sm hover:bg-slate-800"
            >
              <UserPlus className="h-4 w-4" />
              Sign up
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-6 py-8">
        <Hero3D />
        {/* Authentication blurb */}
        <section className="mx-auto max-w-5xl rounded-2xl border border-slate-200/80 bg-white/70 p-6 text-center shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold text-slate-900">Authentication built-in</h2>
          <p className="mt-2 text-slate-600">
            Social logins, email magic links, and secure sessions out of the box. Plug into your app in minutes.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-200">OAuth</span>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700 ring-1 ring-sky-200">Magic Links</span>
            <span className="rounded-full bg-violet-50 px-3 py-1 text-sm text-violet-700 ring-1 ring-violet-200">MFA</span>
          </div>
        </section>

        <DashboardCards />
        <Pricing />
        <HelpCenter />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 bg-white/60 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Iridescent, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#help" className="hover:text-slate-900">Support</a>
            <a href="#" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
