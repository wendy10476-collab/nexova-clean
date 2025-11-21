"use client";
import Image from "next/image";

export default function RingsPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-4">Our Smart Rings</h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-14">
        Explore the Nexova Pulse collection — engineered for performance, elegance, and everyday comfort.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {/* SILVER */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <Image
            src="/rings/silver.png"
            alt="Titanium Silver Ring"
            width={700}
            height={700}
            className="rounded-lg object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Titanium Silver</h2>
          <p className="text-gray-400 mt-2">
            Sleek, durable, and incredibly lightweight.
          </p>
        </div>

        {/* BLACK */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <Image
            src="/rings/black.png"
            alt="Black Smart Ring"
            width={700}
            height={700}
            className="rounded-lg object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Midnight Black</h2>
          <p className="text-gray-400 mt-2">
            Bold, modern, and stealthy elegance.
          </p>
        </div>

        {/* GOLD */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <Image
            src="/rings/gold.png"
            alt="Gold Smart Ring"
            width={700}
            height={700}
            className="rounded-lg object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Pure Gold</h2>
          <p className="text-gray-400 mt-2">
            Luxurious brilliance with everyday comfort.
          </p>
        </div>

        {/* ROSE GOLD */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <Image
            src="/rings/rose-gold.png"
            alt="Rose Gold Smart Ring"
            width={700}
            height={700}
            className="rounded-lg object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Rose Gold</h2>
          <p className="text-gray-400 mt-2">
            Warm, modern, and beautifully refined.
          </p>
        </div>
      </div>
    </main>
  );
}
