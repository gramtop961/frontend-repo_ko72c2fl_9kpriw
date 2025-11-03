import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, UserCheck } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[520px] w-full rounded-3xl bg-gradient-to-br from-indigo-50 via-sky-50 to-rose-50 p-1">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft gradient overlay for readability without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
            <UserCheck className="h-4 w-4 text-sky-600" />
            Secure identity for modern SaaS
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Build, launch, and scale your SaaS
            <span className="block bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">with authentication, analytics, and billing</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            A minimal, pastel UI with a futuristic 3D identity card. Everything you need to go from prototype to production.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white shadow-sm transition hover:bg-sky-700"
            >
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
            <a
              href="#help"
              className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 text-slate-800 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
