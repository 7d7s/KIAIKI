import type { Config } from "tailwindcss";

export default {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          floral: '#FFFBF4',
          givry: '#EBD1AE',
          brown: '#373833',
          accent : '#255C56',
          umber : '#5d4f3f',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
