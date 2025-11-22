"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Nexova Pulse</h1>
        <nav className="space-x-6">
          <Link href="/rings">Rings</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/features">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="text-center mt-20">
        <h2 className="text-4xl font-bold mb-4">
          The Future of Smart Rings is Here.
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Elegant. Powerful. Designed to elevate your everyday life.
        </p>
        <Image
          src="/rings/silver.png"
          alt="Nexova Pulse Smart Ring"
          width={500}
          height={500}
          className="mx-auto rounded-xl"
        />
      </section>
    </main>
  );
}
