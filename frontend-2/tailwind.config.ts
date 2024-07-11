import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';


export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
