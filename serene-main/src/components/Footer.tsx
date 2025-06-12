import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 font-serif px-6 py-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm">
        <div>
          <h2 className="text-xl font-bold mb-2">SereneMUN</h2>
          <p>Fostering diplomacy, leadership, and global dialogue.</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/events" className="hover:text-blue-600">Events</a>
          <a href="/team" className="hover:text-blue-600">Team</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>
        <div className="text-right">
          <div className="flex justify-end gap-4 mb-2">
            <a href="https://www.instagram.com/serene_modelun/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a href="mailto:serenemodelunitednations@gmail.com" aria-label="Email">
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
          <p>&copy; 2025 SereneMUN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
