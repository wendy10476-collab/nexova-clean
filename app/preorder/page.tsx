"use client";

import { useState } from "react";

export default function Preorder() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10 fade-in flex flex-col items-center">

      <h1 className="text-4xl font-bold mt-10 mb-4">Pre-Order Nexova Pulse</h1>

      <p className="text-gray-300 max-w-xl text-center mb-10">
        Secure your Nexova Pulse Ring before the official launch.  
        No payment required today — reserve your ring for FREE.
      </p>

      {/* CONFIRMATION MESSAGE */}
      {submitted && (
        <div className="bg-green-700 p-6 rounded-xl text-center max-w-md w-full mb-10">
          <h2 className="text-2xl font-bold mb-2">Pre-Order Submitted!</h2>
          <p className="text-gray-200">
            Thank you! We will notify you by email and text as soon as orders open.
          </p>
        </div>
      )}

      {/* ORDER FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl shadow-xl max-w-xl w-full space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="block text-gray-400 mb-2">Full Name</label>
          <input
            type="text"
            required
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-400 mb-2">Phone Number</label>
          <input
            type="text"
            required
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            placeholder="732-123-4567"
          />
        </div>

        {/* Ring Color */}
        <div>
          <label className="block text-gray-400 mb-2">Choose Color</label>
          <select className="w-full p-3 rounded bg-black border border-gray-700 text-white" required>
            <option value="">Select a color</option>
            <option value="silver">Titanium Silver</option>
            <option value="black">Carbon Black</option>
            <option value="gold">Gold Finish</option>
            <option value="rose-gold">Rose Gold</option>
          </select>
        </div>

        {/* Ring Size */}
        <div>
          <label className="block text-gray-400 mb-2">Ring Size</label>
          <select className="w-full p-3 rounded bg-black border border-gray-700 text-white" required>
            <option value="">Choose a size</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
          </select>
        </div>

        {/* Pricing Display */}
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <p className="text-xl font-semibold">Launch Price: $249</p>
          <p className="text-gray-400 text-sm">You pay nothing today — this is a free reservation.</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full p-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition"
        >
          Reserve My Free Pre-Order
        </button>
      </form>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.2s ease-out forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
