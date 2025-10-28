// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	app: {
		rootTag: "body",
		pageTransition: { name: "fadeinleft", mode: "out-in" },
		head: {
			title: 'Leonardo G. Testa | Desenvolvedor Front-End | Desenvolvedor Full Stack', // default fallback title
			htmlAttrs: {
				lang: 'pt-BR',
			},
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', sizes: '57x57', href: '/images/favicon/apple-icon-57x57.png' },
				{ rel: 'apple-touch-icon', sizes: '60x60', href: '/images/favicon/apple-icon-60x60.png' },
				{ rel: 'apple-touch-icon', sizes: '72x72', href: '/images/favicon/apple-icon-72x72.png' },
				{ rel: 'apple-touch-icon', sizes: '76x76', href: '/images/favicon/apple-icon-76x76.png' },
				{ rel: 'apple-touch-icon', sizes: '114x114', href: '/images/favicon/apple-icon-114x114.png' },
				{ rel: 'apple-touch-icon', sizes: '120x120', href: '/images/favicon/apple-icon-120x120.png' },
				{ rel: 'apple-touch-icon', sizes: '144x144', href: '/images/favicon/apple-icon-144x144.png' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-icon-180x180.png' },
				{ rel: 'icon', type: 'image/png', sizes: '192x192',  href: '/images/favicon/android-icon-192x192.png' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32',  href: '/images/favicon/favicon-32x32.png' },
				{ rel: 'icon', type: 'image/png', sizes: '96x96',  href: '/images/favicon/favicon-96x96.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16',  href: '/images/favicon/favicon-16x16.png' },
				{ rel: 'manifest', href: '/manifest.json' },		
			],
			meta: [
				{ name: 'msapplication-TileImage', content: '/images/favicon/ms-icon-144x144.png'}
			]
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
