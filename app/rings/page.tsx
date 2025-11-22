"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = document.createElement("form");
    form.action = "https://formsubmit.co/wendy10476@gmail.com";
    form.method = "POST";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "message";
    input.value = message;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Nexova Pulse</h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <textarea
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 border rounded-lg w-80 text-black"
        />

        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
