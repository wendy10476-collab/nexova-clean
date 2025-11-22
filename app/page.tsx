export default function HomePage() {
  return (
    <main className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Nexova Pulse</h1>
      <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
        Smart. Elegant. Powerful. Your next-generation smart ring is here.
      </p>

      <img
        src="/rings/silver.png"
        alt="Nexova Pulse Smart Ring"
        width={500}
        height={500}
        className="mx-auto rounded-xl shadow-xl"
      />
    </main>
  );
}
