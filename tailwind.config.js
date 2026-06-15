/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C2139',
        'primary-light': '#232B47',
        'primary-dark': '#151929',
        gold: '#D4AF37',
        'gold-soft': '#E6C76A',
        'gold-dim': '#B8962E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(212,175,55,0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E6C76A 50%, #D4AF37 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #E6C76A 25%, #fff9e6 50%, #E6C76A 75%, #D4AF37 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(212,175,55,0.05) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(212,175,55,0.3)',
        'gold-lg': '0 0 60px rgba(212,175,55,0.5)',
        'card': '0 4px 40px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 60px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
