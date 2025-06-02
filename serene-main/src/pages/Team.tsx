'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function Team() {
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
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white text-[#152238]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

        {/* Founder's Message */}
        <div
          className="mb-16 bg-[#f9f9f9] rounded-lg shadow-lg p-8 cursor-pointer hover:bg-[#ececec] transition-colors"
          onClick={() => setOpenModal('founder')}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/hrisik.jpg"
              alt="Founder - Hrisik Ladia"
              className="w-48 h-48 object-cover rounded-full shadow-md"
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
              alt="President - Eva Uniyal"
              className="w-48 h-48 object-cover rounded-full shadow-md"
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
  );
}
