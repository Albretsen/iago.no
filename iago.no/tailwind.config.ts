import type { Config } from 'tailwindcss';
import colors from './constants/colors';

const mainColor = '#08605F';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-color': mainColor,
        'background-color': 'white',
        'light-color': '#81A3A2',
        'font-color': mainColor,
      },
      padding: {
        'standard': '6rem',
      }
    },
  },
  plugins: [],
}
export default config
