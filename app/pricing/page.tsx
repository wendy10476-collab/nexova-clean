"use client";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-black text-white p-12 fade-in text-center">

      <h1 className="text-4xl font-bold mt-10 mb-6">Pricing</h1>

      <p className="text-gray-400 max-w-lg mx-auto">
        Pricing will be announced once final manufacturing costs are confirmed.
        Nexova Pulse aims to offer premium technology at a fair and accessible price.
      </p>

      <style jsx>{`
        .fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>

    </main>
  );
}
