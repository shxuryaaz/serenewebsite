import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">SereneMUN</h2>
          <p className="text-sm text-gray-400">
            Fostering diplomacy, leadership, and global dialogue through youth engagement.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white transition-all">About</a></li>
            <li><a href="/events" className="hover:text-white transition-all">Events</a></li>
            <li><a href="/team" className="hover:text-white transition-all">Team</a></li>
            <li><a href="/contact" className="hover:text-white transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Social and Contact */}
        <div className="text-left md:text-right">
          <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
          <div className="flex md:justify-end gap-4 text-xl mb-2">
            <a
              href="https://www.instagram.com/serene_modelun/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:serenemodelunitednations@gmail.com"
              className="hover:text-blue-400 transition"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="text-sm text-gray-500">serenemodelunitednations@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Serene Model United Nations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
