import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Nexova Pulse",
  description: "Smart rings designed for elegance and performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* NAVIGATION HEADER */}
        <header className="w-full bg-neutral-900 py-4 shadow-lg">
          <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
            <Link href="/" className="text-2xl font-bold hover:text-gray-300">
              Nexova Pulse
            </Link>

            <div className="flex gap-6 text-lg">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/rings" className="hover:text-gray-300">Rings</Link>
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/features" className="hover:text-gray-300">Features</Link>
              <Link href="/health" className="hover:text-gray-300">Health</Link>
              <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
              <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}
