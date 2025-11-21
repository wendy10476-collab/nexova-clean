"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white p-8 fade-in flex flex-col items-center">

      <h1 className="text-4xl font-bold mt-10 mb-6">About Nexova Pulse</h1>

      <p className="max-w-2xl text-gray-300 text-lg leading-relaxed text-center">
        Nexova Pulse was created to make advanced wellness technology elegant,
        accessible, and wearable. Our smart ring blends precision sensors, premium materials,
        and intuitive insights — giving you the power to understand your body in real time.
        <br /><br />
        Your ring works quietly in the background, tracking your sleep, activity, stress,
        temperature, and more — so you can focus on living life, not reading charts.
      </p>

      <style jsx>{`
        .fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>

    </main>
  );
}
