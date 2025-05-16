module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 10s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-particle-0': 'float-particle 20s ease-in-out infinite',
        'float-particle-1': 'float-particle 25s ease-in-out infinite',
        'float-particle-2': 'float-particle 30s ease-in-out infinite',
        'float-particle-3': 'float-particle 35s ease-in-out infinite',
        'float-particle-4': 'float-particle 40s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100px, -100px)' },
          '50%': { transform: 'translate(0, -200px)' },
          '75%': { transform: 'translate(-100px, -100px)' },
        },
      },
    },
  },
}