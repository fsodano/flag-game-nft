import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: './ui',
		adapter: adapter()
	}
};

export default config;
