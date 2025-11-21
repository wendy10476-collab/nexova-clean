"use client";

export default function HealthTrackingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Health Tracking</h1>

      <p className="text-lg text-gray-300 max-w-3xl text-center mb-14">
        Nexova Pulse brings advanced biometric tracking right to your fingertips.
        These insights help you stay informed, balanced, and in control of your wellness.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">

        {/* METRIC 1 */}
        <div className="bg-neutral-900 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-3">Heart Rate</h2>
          <p className="text-gray-300">
            Continuous heart rate monitoring lets you understand effort, stress levels,
            and daily fluctuations.
          </p>
        </div>

        {/* METRIC 2 */}
        <div className="bg-neutral-900 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-3">Heart Rate Variability (HRV)</h2>
          <p className="text-gray-300">
            HRV helps track recovery, readiness, stress, and overall fitness performance.
          </p>
        </div>

        {/* METRIC 3 */}
        <div className="bg-neutral-900 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-3">Sleep Stages</h2>
          <p className="text-gray-300">
            Measures REM, deep, and light sleep — providing a full picture of overnight rest.
          </p>
        </div>

        {/* METRIC 4 */}
        <div className="bg-neutral-900 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-3">Breathing Rate</h2>
          <p className="text-gray-300">
            Tracks your respiration patterns and early signs of strain or illness.
          </p>
        </div>

        {/* METRIC 5 */}
        <div className="bg-neutral-900 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-3">Body Temperature</h2>
          <p className="text-gray-300">
            Subtle temperature shifts can reveal recovery quality, cycle patterns,
            sickness onset, or stress.
          </p>
        </div>

        {/* METRIC 6 */}
        <div className="bg-neutral-900 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-3">Daily Activity</h2>
          <p className="text-gray-300">
            Steps, calories, movement, and active minutes — tracked automatically
            with no effort.
          </p>
        </div>

      </div>
    </main>
  );
}
