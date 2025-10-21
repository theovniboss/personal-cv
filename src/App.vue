<template>
	<aside class="w-1 flex flex-col">
		
	</aside>
	<section class="w-[480px] h-[660px] bg-white rounded-sm relative z-20 shadow-lg flex flex-col">
		<Card />
	</section>
	<section class="w-[700px] h-[620px] bg-white rounded-sm relative z-10 -left-1 shadow-lg p-7 overflow-auto" >
		<RouterView />
	</section>

</template>

<script setup>
import Card from './components/Card.vue';
</script>
