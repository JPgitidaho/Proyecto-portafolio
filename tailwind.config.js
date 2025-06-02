// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'], // ajusta según tu estructura
  theme: {
    extend: {
      animation: {
        zoomSlow: 'zoomSlow 20s ease-in-out infinite',
      },
      keyframes: {
        zoomSlow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: ["./index.html"],
  safelist: ['animate-logoIntro'],
  theme: {
    extend: {
      keyframes: {
        logoIntro: {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        logoIntro: 'logoIntro 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

// tailwind.config.js

module.exports = {
  content: [
    './index.html',
    './imagenes/*.html',
    './*.js',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a192f',
        light: '#ccd6f6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.1), transparent 40%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in forwards',
        'bounce': 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};



