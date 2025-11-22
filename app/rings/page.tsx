"use client";

import { useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a form element and submit (placeholder)
    const form = document.createElement("form");
    alert("Your message has been sent!");
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-black text-white p-8 pt-20">
      {/* HERO SECTION */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Nexova Pulse Smart Ring</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Elegant. Intelligent. Powerful. Your next-generation smart ring for
          health insights, wellness tracking, and effortless modern living.
        </p>
      </section>

      {/* IMAGE SECTION */}
      <section className="flex justify-center mb-20">
        <img
          src="/rings/silver.png"
          alt="Nexova Pulse Silver Ring"
          className="w-72 h-auto rounded-xl shadow-lg"
        />
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full h-32 p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
