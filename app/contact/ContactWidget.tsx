"use client";
import { useState } from "react";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-full shadow-lg border border-gray-500 hover:shadow-[0_0_15px_rgba(180,180,180,0.8)] transition-all duration-300"
        style={{
          boxShadow: "0 0 10px rgba(180,180,180,0.5)",
          borderColor: "rgba(200,200,200,0.8)",
        }}
      >
        Contact Us
      </button>

      {/* Dark Background Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Contact Form Sliding Box */}
      <div
        className={`fixed bottom-0 right-0 w-full sm:w-96 bg-white rounded-t-2xl shadow-xl z-50 p-6 border-l border-t border-gray-300 transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
