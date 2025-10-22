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
				<svg class="h-10 v-10 fill-primary mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m22.1 1.9c-3.436-3.431-12.728-1.967-17.448 2.752s-6.183 14.012-2.752 17.448a8.106 8.106 0 0 0 5.767 1.88 17.434 17.434 0 0 0 11.681-4.632c4.718-4.719 6.183-14.012 2.752-17.448zm-5.767.1a6.232 6.232 0 0 1 4.351 1.314c1.016 1.017 1.427 2.986 1.275 5.231l-6.5-6.5c.295-.019.591-.045.874-.045zm-13.017 18.684c-1.016-1.015-1.427-2.984-1.275-5.229l6.5 6.5c-2.241.155-4.21-.255-5.225-1.271zm14.618-2.75a14.685 14.685 0 0 1 -6.929 3.657l-8.6-8.6a14.674 14.674 0 0 1 3.661-6.925 14.645 14.645 0 0 1 6.94-3.646l8.586 8.586a14.674 14.674 0 0 1 -3.658 6.928zm-.227-6.227a1 1 0 0 1 -1.414 0l-1.293-1.293-1.586 1.586 1.293 1.293a1 1 0 1 1 -1.414 1.414l-1.293-1.293-1.586 1.586 1.293 1.293a1 1 0 1 1 -1.414 1.414l-4-4a1 1 0 0 1 1.414-1.414l1.293 1.293 1.586-1.586-1.293-1.293a1 1 0 0 1 1.414-1.414l1.293 1.293 1.586-1.586-1.293-1.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"/></svg>
				2 títulos<br/>brasileiro<br />
				
			</p>

			<p class="py-5 px-5 relative text-center w-1/3 flex flex-col align-center justify-center">
				<svg  class="h-10 v-10 fill-primary mb-5" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"><path d="M15.091,15.997c6.571-.033,8.909-3.513,8.909-6.497,0-1.677-1.187-3.08-2.764-3.419,.136-.387,.254-.742,.334-1.011,.353-1.193,.124-2.454-.627-3.459-.766-1.023-1.937-1.611-3.214-1.611H6.271c-1.277,0-2.449,.588-3.215,1.612-.751,1.005-.979,2.266-.626,3.458,.08,.269,.197,.624,.334,1.011-1.577,.339-2.764,1.742-2.764,3.419,0,2.984,2.339,6.464,8.909,6.497,.056,.302,.091,.61,.091,.923v3.08c0,1.826-1.536,1.992-2,2h-1c-.553,0-1,.447-1,1s.447,1,1,1h12c.553,0,1-.447,1-1s-.447-1-1-1h-.992c-.472-.008-2.008-.174-2.008-2v-3.08c0-.313,.035-.621,.091-.923Zm5.409-7.997c.827,0,1.5,.673,1.5,1.5,0,2.034-1.609,4.197-6.036,4.47,.221-.299,.474-.576,.762-.821,1.739-1.478,2.933-3.453,3.727-5.159,.017,0,.031,.01,.048,.01ZM2,9.5c0-.827,.673-1.5,1.5-1.5,.017,0,.031-.009,.047-.01,.794,1.706,1.987,3.68,3.727,5.159,.288,.245,.541,.521,.762,.821-4.427-.273-6.036-2.436-6.036-4.47Zm8.513,12.5c.295-.541,.487-1.194,.487-2v-3.08c0-2.051-.886-3.98-2.431-5.294-1.769-1.504-3.347-4.167-4.221-7.122-.172-.583-.06-1.2,.311-1.694,.384-.515,.972-.81,1.612-.81h11.457c.64,0,1.228,.295,1.612,.809,.369,.495,.482,1.112,.311,1.694-.875,2.957-2.453,5.619-4.221,7.123-1.545,1.313-2.431,3.243-2.431,5.294v3.08c0,.806,.191,1.459,.487,2h-2.973Zm-.722-12.237c-.264-.182-.375-.518-.27-.822l.519-1.606-1.366-1c-.327-.24-.398-.699-.158-1.026,.138-.188,.358-.3,.591-.3h1.681l.511-1.593c.129-.387,.547-.595,.934-.466,.22,.073,.393,.246,.466,.466l.51,1.593h1.681c.405,0,.734,.328,.734,.734,0,.235-.112,.455-.301,.593l-1.366,1,.519,1.606c.124,.386-.088,.8-.475,.925-.224,.072-.469,.032-.659-.107l-1.343-.988-1.344,.987c-.256,.191-.606,.192-.864,.004Z"/></svg>
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