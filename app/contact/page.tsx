"use client";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-10 fade-in">

      <h1 className="text-4xl font-bold mt-10 mb-8">Contact Us</h1>

      <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full">
        <p className="text-gray-300 mb-4">
          Have a question or need support? We're here to help.
        </p>

        <p className="mb-4">
          <span className="font-semibold">Phone:</span><br />
          732-6NEXOVA <br />
          (732-663-9682)
        </p>

        <p>
          <span className="font-semibold">Email:</span><br />
          support@nexovapulse.com
        </p>
      </div>

      <style jsx>{`
        .fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>

    </main>
  );
}
