<template>
	<aside class="bg-white flex flex-wrap w-[calc(100%-16px)]  rounded-b p-[5px] mb-2 mx-2 fixed z-50 shadow
		md:h-[70px] lg:relative
		lg:flex-col lg:w-[70px] lg:h-auto lg:mr-2 lg:rounded lg:mx-0
	">
		<CardMobile />
		<Menu />
	</aside>
	<section class="w-[480px] h-[660px] bg-white rounded relative z-20 shadow-lg flex-col hidden
		lg:flex">
		<Card />
	</section>

	<NuxtPage />

</template>
