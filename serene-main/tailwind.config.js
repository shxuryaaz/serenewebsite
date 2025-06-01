// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bg-particles': 'moveParticles 60s linear infinite',
      },
      keyframes: {
        moveParticles: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
      },
    },
  },
  plugins: [],
};
