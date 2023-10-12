import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'textRed': '#DC0B0B',
        'cyan': '#12CACA',
      },
      fontFamily: {
        roboto: ['Roboto Serif','serif'],
        robotoBold: ['Roboto Bold','serif'],
      }
    },
  },
  plugins: [],
}

export default config
