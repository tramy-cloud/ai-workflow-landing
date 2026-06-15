/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A1022',
        'bg-secondary': '#111C3D',
        'card-hover': '#162650',
        'card-border': '#24447A',
        'accent-blue': '#3DA5FF',
        'accent-cyan': '#53D7FF',
        gold: '#D4AF37',
        'gold-light': '#F0D878',
        'text-secondary': '#AAB4D6',
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
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'scan': 'scanLine 3s linear infinite',
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
          '50%': { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(61,165,255,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(61,165,255,0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanLine: {
          '0%': { top: '0%', opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 20% 50%, rgba(61,165,255,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(169,142,255,0.06) 0%, transparent 50%)',
        'blue-gradient': 'linear-gradient(135deg, #3DA5FF 0%, #53D7FF 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F0D878 50%, #D4AF37 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(17,28,61,0.8) 0%, rgba(10,16,34,0.9) 100%)',
        'hero-text-gradient': 'linear-gradient(90deg, #FFFFFF 0%, #4EB8FF 50%, #A98EFF 100%)',
      },
      boxShadow: {
        'blue': '0 0 30px rgba(61,165,255,0.3)',
        'blue-lg': '0 0 60px rgba(61,165,255,0.5)',
        'gold': '0 0 30px rgba(212,175,55,0.3)',
        'gold-lg': '0 0 60px rgba(212,175,55,0.5)',
        'card': '0 4px 40px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 60px rgba(0,0,0,0.5)',
        'glow-blue': '0 0 20px rgba(61,165,255,0.15), 0 0 60px rgba(61,165,255,0.08)',
      },
      borderRadius: {
        'xl2': '20px',
      },
    },
  },
  plugins: [],
}
