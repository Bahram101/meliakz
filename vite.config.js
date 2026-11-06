import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		host: true, // доступ из локальной сети (телефон по Wi-Fi)
		allowedHosts: ['.devtunnels.ms'], // проверка на телефоне через VS Code Dev Tunnels
	},
	build: {
		outDir: 'build', // как было в CRA — для текущего деплоя
	},
});
