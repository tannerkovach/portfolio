const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
	'./components/**/*.{vue,js}',
	'./layouts/**/*.vue',
	'./pages/**/*.vue',
	'./plugins/**/*.{js,ts}',
	'./nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
	extend: {
		colors: {
			// Build your palette here
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.blueGray,
			blue: colors.lightBlue,
			yellow: colors.amber,
			purple: colors.violet,
		},
		height: {
			112: '28rem',
			128: '32rem',
			144: '36rem',
		}
	},
	screens: {
		'sm': '640px',
		// => @media (min-width: 640px) { ... }
  
		'md': '768px',
		// => @media (min-width: 768px) { ... }
  
		'lg': '1024px',
		// => @media (min-width: 1024px) { ... }
  
		'xl': '1280px',
		// => @media (min-width: 1280px) { ... }
	  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
