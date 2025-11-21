"use client";

import { FaHeartbeat, FaRegMoon, FaLungs, FaFire, FaThermometerHalf, FaWalking, FaBatteryFull, FaChartLine } from "react-icons/fa";

export default function Features() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6 fade-in">

      <h1 className="text-4xl font-bold mt-10 mb-6">Health & Features</h1>
      <p className="text-gray-300 max-w-xl text-center mb-12">
        Nexova Pulse tracks the metrics that matter. Designed for clarity, accuracy, and daily wellness insights.
      </p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl">
        <FeatureCard icon={<FaHeartbeat />} title="Heart Rate Monitoring" text="Real-time BPM tracking for fitness, stress, and overall wellness." />
        <FeatureCard icon={<FaChartLine />} title="HRV Tracking" text="Heart Rate Variability insights to monitor stress and recovery." />
        <FeatureCard icon={<FaRegMoon />} title="Sleep Stages" text="Deep, REM, and light sleep breakdowns for improved rest." />
        <FeatureCard icon={<FaLungs />} title="SpO₂ Monitoring" text="Blood oxygen estimates while you sleep or rest." />
        <FeatureCard icon={<FaThermometerHalf />} title="Temperature Trends" text="Nightly temperature changes that indicate readiness + recovery." />
        <FeatureCard icon={<FaWalking />} title="Activity Tracking" text="Steps, movement, and your full daily activity profile." />
        <FeatureCard icon={<FaFire />} title="Calorie Burn" text="Daily energy burn estimates to help balance your routine." />
        <FeatureCard icon={<FaBatteryFull />} title="Long Battery Life" text="A multi-day battery so you can focus on life, not charging." />
      </section>

      <style jsx>{`
        .fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>

    </main>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl text-center shadow-lg hover:bg-gray-800 transition">
      <div className="text-4xl text-yellow-400 mb-4 flex justify-center">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
}
