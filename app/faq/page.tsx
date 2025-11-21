"use client";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="max-w-3xl w-full space-y-8">

        {/* FAQ 1 */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">What is Nexova Pulse?</h2>
          <p className="text-gray-300">
            Nexova Pulse is a next-generation smart ring designed to combine style,
            comfort, and powerful health tracking — without bulky devices.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">What features does the ring track?</h2>
          <p className="text-gray-300">
            Our rings monitor heart rate, sleep quality, steps, readiness score,
            energy levels, and more — with full app integration.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Is the ring waterproof?</h2>
          <p className="text-gray-300">
            Yes — Nexova Pulse rings are water-resistant for everyday use, including
            washing hands, rain, and light exposure to water.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">How long does the battery last?</h2>
          <p className="text-gray-300">
            Expect 4–7 days depending on usage, with magnetic fast charging included.
          </p>
        </div>

        {/* FAQ 5 */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">When will the rings be available?</h2>
          <p className="text-gray-300">
            We are currently preparing production. Join our updates to be notified
            the moment pre-orders go live.
          </p>
        </div>

      </div>
    </main>
  );
}
