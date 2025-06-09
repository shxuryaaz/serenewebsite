'use client';
import { motion } from 'framer-motion';

export default function Home() {
  // Scroll handler for the arrow click
  const scrollToWhatIs = () => {
    const element = document.getElementById('what-is-serene-mun');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover object-center -z-10"
        src="/bgvideo.mp4"
      />

      {/* Hero Section */}
      <div className="relative pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to Serene Model United Nations
            </h1>

            <p className="text-xl sm:text-2xl text-gray-100 mb-12">
              Diplomacy. Dialogue. Development.
            </p>

            {/* Register Now Button */}
            <a
              href="https://linktr.ee/Serenemun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#152238] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#0f1a2a] transition-colors mb-4"
            >
              Register Now
            </a>

            {/* Date of the MUN */}
            <p className="text-gray-200 mb-10 text-lg font-medium">
              2-3 August 2025
            </p>

            <div
              className="animate-bounce cursor-pointer"
              onClick={scrollToWhatIs}
              aria-label="Scroll down to What is Serene MUN section"
            >
              <svg
                className="w-6 h-6 mx-auto text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* What is Serene MUN? Section */}
      <motion.div
        id="what-is-serene-mun"
        className="bg-white text-[#152238] py-24 px-6 sm:px-12 lg:px-32 mt-[600px]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Serene MUN</h2>
          <p className="text-lg leading-relaxed">
            <strong>Unity in Calm: Crafting Global Peace through Diplomatic Serenity</strong><br /><br />
            Serene Model United Nations embodies the essence of peaceful diplomacy, where delegates from
            diverse backgrounds come together in a respectful and thoughtful environment. The focus is on
            listening, understanding, and finding common ground rather than dominating debate. Calm, composed
            dialogue takes precedence over heated rhetoric, encouraging meaningful collaboration that mirrors
            the UN's real mission—maintaining international peace and security.
          </p>
        </div>
      </motion.div>

      {/* Why Participate Section */}
      <motion.div
        id="why-participate"
        className="bg-white text-[#152238] py-24 px-6 sm:px-12 lg:px-32"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Why Participate?</h2>
          <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
            <li>Receive prestigious certificates recognized by top institutions and professionals.</li>
            <li>Gain access to expert-led training sessions designed to boost your confidence and diplomacy skills.</li>
            <li>Eligible participants may request personalized Letters of Recommendation for future opportunities.</li>
            <li>Stand out with awards and recognition for excellence in debate and diplomacy.</li>
            <li>Explore a wide range of curated learning resources to enhance your understanding of global affairs.</li>
            <li>Compete for a cash prize pool totaling over ₹1,00,000.</li>
            <li>Sharpen your skills with high-impact mock sessions and feedback from experienced MUNers.</li>
            <li>Be mentored by a well-renowned Executive Board with a legacy of national and international recognition.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
