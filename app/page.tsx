"use client";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/wendy10476@gmail.com";

    const inputMsg = document.createElement("input");
    inputMsg.type = "hidden";
    inputMsg.name = "message";
    inputMsg.value = message;

    const captcha = document.createElement("input");
    captcha.type = "hidden";
    captcha.name = "_captcha";
    captcha.value = "false";

    form.appendChild(inputMsg);
    form.appendChild(captcha);

    document.body.appendChild(form);
    form.submit();

    setMessage("");
    setOpen(false);
  };

  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-gray-800">

        {/* Left: Logo */}
        <h1 className="text-2xl font-bold">Nexova Pulse</h1>

        {/* Center Links */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="/" className="hover:text-gray-300 transition">Home</a>
          <a href="/rings" className="hover:text-gray-300 transition">Rings</a>
          <a href="/pricing" className="hover:text-gray-300 transition">Pricing</a>
          <a href="/features" className="hover:text-gray-300 transition">Features</a>
          <a href="/about" className="hover:text-gray-300 transition">About</a>
        </div>

        {/* Right: Contact Button */}
        <button
          onClick={() => setOpen(true)}
          className="border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition"
        >
          Contact
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-4 text-center animate-fadeIn">
        <h1 className="text-6xl font-bold mb-4">Redefining Smart Living</h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Elegant. Intelligent. Effortless.
          The smart ring designed for everyday life — without sacrificing style.
        </p>
      </section>

      {/* RINGS SECTION */}
      <section id="rings" className="py-20 px-6 text-center animate-fadeIn">
        <h2 className="text-4xl font-semibold mb-10">Our Smart Rings</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {/* BLACK */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <img src="/rings/black.png" alt="Black Ring" className="w-full rounded-lg" />
            <p className="mt-4 text-xl">Midnight Black</p>
          </div>

          {/* SILVER */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <img src="/rings/silver.png" alt="Silver Ring" className="w-full rounded-lg" />
            <p className="mt-4 text-xl">Titanium Silver</p>
          </div>

          {/* GOLD */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <img src="/rings/gold.png" alt="Gold Ring" className="w-full rounded-lg" />
            <p className="mt-4 text-xl">Pure Gold</p>
          </div>

          {/* ROSE GOLD */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <img src="/rings/rose-gold.png" alt="Rose Gold Ring" className="w-full rounded-lg" />
            <p className="mt-4 text-xl">Rose Gold</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 bg-black border-t border-gray-800">
        <p>© {new Date().getFullYear()} Nexova Pulse. All Rights Reserved.</p>
      </footer>

      {/* CONTACT MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black w-full max-w-md p-6 rounded-2xl shadow-xl">

            <h2 className="text-2xl font-semibold mb-2">Contact Nexova Pulse</h2>
            <p className="text-gray-600 mb-6">Have a question? Send us a quick message.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea
                className="border p-3 rounded-lg w-full"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />

              <button
                type="submit"
                className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>

              <button
                type="button"
                className="text-sm text-gray-600 hover:underline mt-2"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </form>

          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>

    </main>
  );
}
