import { FaBolt, FaShieldAlt, FaHeart } from "react-icons/fa";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl text-center shadow-lg hover:bg-gray-800 transition">
      <div className="text-4xl text-yellow-400 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Smart Ring Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <FeatureCard
          icon={<FaBolt />}
          title="Fast Performance"
          text="Engineered for quick syncing and seamless real-time tracking."
        />

        <FeatureCard
          icon={<FaShieldAlt />}
          title="Premium Security"
          text="Your data stays encrypted and protected at every step."
        />

        <FeatureCard
          icon={<FaHeart />}
          title="Health Insights"
          text="Pulse tracking, sleep monitoring, and wellness analytics."
        />
      </div>
    </main>
  );
}
