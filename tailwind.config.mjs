/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sgn,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        omp: {
          dark: '#0B0D17',
          card: '#151928',
          accent: '#3B82F6', // Blue
          green: '#10B981', // Green
          glow: 'rgba(59, 130, 246, 0.15)',
        }
      }
    },
  },
  plugins: [],
};
