// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	app: {
		rootTag: "body",
		pageTransition: { name: "fadeinleft", mode: "out-in" },
		head: {
			title: 'Leonardo G. Testa | Desenvolvedor Front-End', // default fallback title
			htmlAttrs: {
				lang: 'pt-BR',
			},
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			],
		},
	},
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	modules: [
		//...
		"@vee-validate/nuxt",
		'@nuxtjs/turnstile',
	],
});
