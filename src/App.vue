<template>
	<aside class="bg-white flex flex-col w-[70px] h-auto relative mr-2 rounded p-[5px]">
		<Menu />
	</aside>
	<section class="w-[480px] h-[660px] bg-white rounded-sm relative z-20 shadow-lg flex flex-col">
		<Card />
	</section>
	<RouterView v-slot="{ Component, route }">	
		<Transition  name="fadeinleft" mode="out-in">	
			<Component :is="Component" :key="route.path"  />			
		</Transition>
	</RouterView>

</template>

<script setup>
import Card from './components/Card.vue';
import Menu from './components/Menu.vue';
</script>
