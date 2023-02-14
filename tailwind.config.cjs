/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				'11px': '11px',
				'10px': '10px',
				'9px': '9px',
				'8px': '8px'
			},
			colors: {
				'active-warning': '#80FF00',
				'blue-primary': '#53BEBE',
				'blue-secondary': '#074452',
				'red-primary': '#FF5151',
				'red-secondary': '#892323',
				'orange-primary': '#FFAA47',
				'orange-secondary': '#FF9900',
				'violet-light': '#DB00FF',
				'violet-dark': '#310752',
				'brown-dark': '#523407',
				'blue-dark': '#072152'
			}
		}
	},
	plugins: []
};
