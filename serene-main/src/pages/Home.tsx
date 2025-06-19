'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

export default function Home() {
  // Scroll handler for the arrow click
  const scrollToWhatIs = () => {
    const element = document.getElementById('what-is-serene-mun');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Modal state for Team messages
  const [openModal, setOpenModal] = useState<null | 'founder' | 'president'>(null);

  const founderMessage = `As the Founder of Serene Model United Nations, it is with immense pride and emotion that I welcome you to the first edition of our journey.

Serene MUN was born from a simple yet powerful vision — where diplomacy is more than debate. It's about empathy, respect, and calm leadership.

Our mission is to create a platform where every delegate feels heard, valued, and empowered — regardless of their experience or background.

We believe peace isn’t passive; it’s something we build together. Every conference we host, every committee we conduct, and every delegate who joins us is a vital part of that mission.

Welcome to Serene MUN — where calm voices lead to bold ideas, and diplomacy thrives on serenity.`;

  const presidentMessage = `As the President of Serene Model United Nations, my vision is to lead a conference rooted in optimism and meaningful dialogue.

At Serene MUN, we believe diplomacy begins with understanding, and leadership grows from calm, thoughtful conversations.

Serene MUN is a testament to the power of peace and the strength found in optimism.

My goal is for every delegate to leave this conference feeling more inspired, more informed, and more hopeful about shaping the world.

Together, we're building the future of diplomacy — grounded in calmness and purpose.`;

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
              26th-27th July 2025
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
    the UN's real mission—maintaining international peace and security.<br /><br />
    At SereneMUN, diplomacy is not a competition — it's a conversation. Our conferences create a space where the 
    power of words is valued more than volume, and empathy is the most persuasive tool. Delegates are encouraged 
    to see through different lenses, embrace cultural diversity, and navigate complex global issues through patience, 
    intellect, and unity.<br /><br />
    What sets SereneMUN apart is its commitment to <em>serenity as a strategy</em>. We believe that impactful solutions stem 
    from mutual respect, active listening, and balanced discourse. By nurturing future leaders in a calm, inclusive 
    atmosphere, we aim to cultivate not just skilled diplomats, but compassionate global citizens.<br /><br />
    Whether you're a seasoned MUN participant or a first-time delegate, SereneMUN offers a unique platform where your 
    voice is heard, your ideas matter, and your presence contributes to a shared mission — building a more peaceful world, 
    one resolution at a time.</p>
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

      {/* Team Section */}
      <div className="bg-white text-[#152238] py-24 px-6 sm:px-12 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Visionaries</h2>

          {/* Founder's Message */}
          <div
            className="mb-16 bg-[#f9f9f9] rounded-lg shadow-lg p-8 cursor-pointer hover:bg-[#ececec] transition-colors"
            onClick={() => setOpenModal('founder')}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/hrisik.jpg"
                alt="Founder Hrisik Ladia"
                className="w-48 h-48 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold mb-1">Founder's Message</h3>
                <p className="text-lg font-medium text-[#152238] mb-2">Hrisik Ladia</p>
                <p className="text-gray-600 italic">
                  Click to read a message from the founder about the vision and soul of Serene MUN.
                </p>
              </div>
            </div>
          </div>

          {/* President's Message */}
          <div
            className="bg-[#f9f9f9] rounded-lg shadow-lg p-8 cursor-pointer hover:bg-[#ececec] transition-colors"
            onClick={() => setOpenModal('president')}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/eva.jpg"
                alt="President Eva Uniyal"
                className="w-48 h-48 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold mb-1">President's Message</h3>
                <p className="text-lg font-medium text-[#152238] mb-2">Eva Uniyal</p>
                <p className="text-gray-600 italic">
                  Click to read the president’s message about leadership through calm diplomacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for full messages */}
        <Dialog
          open={openModal !== null}
          onClose={() => setOpenModal(null)}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <Dialog.Panel className="bg-white max-w-2xl w-full p-8 rounded-xl shadow-2xl relative">
              <Dialog.Title className="text-2xl font-bold mb-4">
                {openModal === 'founder' ? "Message from the Founder" : "Message from the President"}
              </Dialog.Title>
              <Dialog.Description className="whitespace-pre-wrap text-[#152238] leading-relaxed mb-6">
                {openModal === 'founder' ? founderMessage : presidentMessage}
              </Dialog.Description>
              <button
                onClick={() => setOpenModal(null)}
                className="absolute top-4 right-4 text-[#152238] hover:text-red-500 text-xl"
                aria-label="Close"
              >
                ✕
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
