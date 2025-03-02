import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/.netlify/functions': {
				target: 'http://localhost:8888',
				changeOrigin: true,
				secure: false
			}
		}
	}
});
