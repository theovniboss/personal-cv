<template>
	<article>
		<h2 class="title"><span>Sobre</span> mim</h2>
		<div class="flex grow">
			<p class="py-5 pr-5 leading-8 relative w-[50%]
				before:absolute before:h-full before:w-px before:right-0 before:top-0 before:bg-linear-to-t before:from-transparent before:to-70% before:to-gray-300">
				Sou Leonardo Gerasimenko Testa, conhecido como Leo, Lelo ou Testa, desenvolvedor front-end e gosto de jogar video games, bi-campeão brasileiro de flag football e head coach da equipe Crimson Fox
		</p>

			<ul class="py-5 pl-5 text-xs flex flex-col justify-between w-[50%] text-nowrap">
				<li class="flex justify-between items-center"><span class="bg-primary text-white inline px-2 py-0.5 rounded-xs mr-4">Idade....</span> <span>{{ idade }} anos</span></li>
				<li class="divider-x"></li>
				<li class="flex justify-between  items-center"><span class="bg-primary text-white inline px-2 py-0.5 rounded-xs mr-4">Nacionalidade....</span> <span>Brasileiro</span></li>
					<li class="divider-x"></li>
				<li class="flex justify-between  items-center"><span class="bg-primary text-white inline px-2 py-0.5 rounded-xs mr-4">Residência....</span> <span>São Paulo / SP</span></li>
					<li class="divider-x"></li>
				<li class="flex justify-between  items-center"><span class="bg-primary text-white inline px-2 py-0.5 rounded-xs mr-4">Estado Civil....</span> <span>Solteiro</span></li>
					<li class="divider-x"></li>	
				<li class="flex justify-between  items-center"><span class="bg-primary text-white inline px-2 py-0.5 rounded-xs mr-4">Filhos....</span> <span>1 filha</span></li>
			</ul>
		</div>
	</article>
	<article class="mt-5">
		<h2 class="title"><span>Resumo</span> Profissional</h2>
		<p class="leading-8 py-5">
			{{experiencia}} anos de experiência em tecnologia da informação, atuando nos últimos 7 anos como Desenvolvedor Front-End e UX, com domínio em Vue.js, .NET Core, JavaScript, PHP e SQL. Experiência sólida em SEO, análise de performance, design responsivo e integração de sistemas. Histórico de liderança técnica, equipes e entrega de soluções escaláveis para empresas de tecnologia e agências digitais.
		</p>
	</article>

	<article class="mt-5">
		<h2 class="title"><span>C</span>uriosiadades</h2>
		<div class="flex grow justify-evenly">			
			<p class="py-5 pr-5 relative text-center w-1/3 flex flex-col align-center justify-center
				before:absolute before:h-full before:w-px before:right-0 before:top-0 before:bg-linear-to-t before:from-transparent before:to-70% before:to-gray-300">

				<svg class="h-10 v-10 fill-primary mb-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
					<path d="m19,6h-4.865l3.633-4.36c.354-.424.296-1.055-.128-1.408s-1.054-.296-1.408.128l-4.232,5.078L7.768.36c-.354-.424-.984-.482-1.408-.128-.424.354-.481.984-.128,1.408l3.633,4.36h-4.865c-2.757,0-5,2.243-5,5v8c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8c0-2.757-2.243-5-5-5Zm3,13c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-8c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v8Zm-9-9h-7c-1.103,0-2,.897-2,2v6c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-6c0-1.103-.897-2-2-2Zm-7,8v-6h7v6s-7,0-7,0Zm14-5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm0,5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/>
				</svg>
				3 aparições<br />na televisão	

			</p>
			<p class="py-5 px-5 relative text-center w-1/3 flex flex-col align-center justify-center
				before:absolute before:h-full before:w-px before:right-0 before:top-0 before:bg-linear-to-t before:from-transparent before:to-70% before:to-gray-300">
				<svg class="h-10 v-10 fill-primary mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M325.1 86.6C236.1 104.6 174.6 150 135.1 210.5C111.8 246.1 97 285.8 88.4 326L315.9 553.4C404.9 535.4 466.4 490 506 429.5C529.3 393.9 544.1 354.2 552.7 314L325.1 86.6zM561.1 254.7C564.3 212.4 561.8 171.4 556.3 136C551.9 108.2 529.5 88 503.2 84.4C460.2 78.5 421 76.9 385.4 79L561.1 254.6zM255.7 561.1L79.9 385.4C76.7 427.7 79.2 468.7 84.7 504.1C89.1 531.9 111.5 552.1 137.8 555.7C180.8 561.6 220 563.2 255.6 561.1zM335.5 207C344.9 197.6 360.1 197.6 369.4 207L433.4 271C442.8 280.4 442.8 295.6 433.4 304.9C424 314.2 408.8 314.3 399.5 304.9L335.5 240.9C326.1 231.5 326.1 216.3 335.5 207zM271.5 271C280.9 261.6 296.1 261.6 305.4 271L369.4 335C378.8 344.4 378.8 359.6 369.4 368.9C360 378.2 344.8 378.3 335.5 368.9L271.5 304.9C262.1 295.5 262.1 280.3 271.5 271zM207.5 335C216.9 325.6 232.1 325.6 241.4 335L305.4 399C314.8 408.4 314.8 423.6 305.4 432.9C296 442.2 280.8 442.3 271.5 432.9L207.5 368.9C198.1 359.5 198.1 344.3 207.5 335z"/></svg>
				2 títulos<br/>brasileiro<br />
				
			</p>

			<p class="py-5 px-5 relative text-center w-1/3 flex flex-col align-center justify-center">
				<svg class="h-10 v-10 fill-primary mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
					<path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z"/>
				</svg>
				7 Platinas<br />
				1351 troféus
			</p>

			</div>
	</article>

	

</template>

<script setup>
import { computed } from 'vue';

const idade = computed(()=>{
	return ~~((Date.now() - new Date('1981-04-22')) / (31557600000))
})

const experiencia = computed(()=>{
	return ~~((Date.now() - new Date('1998-04-01')) / (31557600000))
})

</script>