"use client";

import { useState } from "react";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-full shadow-xl hover:bg-gray-800 transition z-50"
      >
        Contact Us
      </button>

      {/* Popup Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 bg-white shadow-2xl rounded-2xl p-5 w-72 border z-50">
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-600 mb-4">
            Send us a message and we’ll reply ASAP.
          </p>

          <a
            href="mailto:nexovapulse@gmail.com"
            className="block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Email Us
          </a>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 w-full text-center bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
