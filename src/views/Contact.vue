<template>
	<h2 class="title"><span>Entre</span> em Contato</h2>
	<p class="my-5">Você tem alguma dúvida, oportunidade, projeto ou quer apenas jogar conversa fora? Me mande uma mensagem que responderei o mais rápido que puder.</p>
	<div class="relative mb-5">
		<input  id="email" class="
			peer px-3.5 py-2.5 block w-full placeholder:text-transparent
			focus:border-primary focus:border focus:outline-0 focus:text-primary
			disabled:opacity-50 disabled:pointer-events-none
			border border-gray-300 rounded
			focus:pt-4
			focus:pb-1
			not-placeholder-shown:pt-4
			not-placeholder-shown:pb-1
			autofill:pt-4
			autofill:pb-1" placeholder="you@email.com" v-model="nome" v-bind="nomeAttrs" type="text" autocomplete="given-name">
		<label for="email" class="absolute top-0 start-0 p-3.5 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-top-left peer-disabled:opacity-50 peer-disabled:pointer-events-none
			peer-focus:scale-90
			peer-focus:translate-x-0.5
			peer-focus:-translate-y-2.5
			peer-focus:text-primary 
			peer-not-placeholder-shown:scale-90
			peer-not-placeholder-shown:translate-x-0.5
			peer-not-placeholder-shown:-translate-y-2.5
			peer-not-placeholder-shown:text-gray-500">Nome</label>
	</div>

	<div class="relative mb-5">
		<input  id="email" class="
			peer px-3.5 py-2.5 block w-full placeholder:text-transparent
			focus:border-primary focus:border focus:outline-0 focus:text-primary
			disabled:opacity-50 disabled:pointer-events-none
			border border-gray-300 rounded
			focus:pt-4
			focus:pb-1
			not-placeholder-shown:pt-4
			not-placeholder-shown:pb-1
			autofill:pt-4
			autofill:pb-1" placeholder="you@email.com" v-model="email" v-bind="emailAttrs" type="email" autocomplete="email">
		<label for="email" class="absolute top-0 start-0 p-3.5 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-top-left peer-disabled:opacity-50 peer-disabled:pointer-events-none
			peer-focus:scale-90
			peer-focus:translate-x-0.5
			peer-focus:-translate-y-2.5
			peer-focus:text-primary 
			peer-not-placeholder-shown:scale-90
			peer-not-placeholder-shown:translate-x-0.5
			peer-not-placeholder-shown:-translate-y-2.5
			peer-not-placeholder-shown:text-gray-500">E-mail</label>
	</div>

    <div class="relative">
		<textarea id="email" class=" h-30
			peer px-3.5 py-2.5 block w-full placeholder:text-transparent
			focus:border-primary focus:border focus:outline-0 focus:text-primary
			disabled:opacity-50 disabled:pointer-events-none
			border border-gray-300 rounded
			focus:pt-4
			focus:pb-1
			not-placeholder-shown:pt-4
			not-placeholder-shown:pb-1
			autofill:pt-4
			autofill:pb-1" placeholder="you@email.com" v-model="msg" v-bind="msgAttrs" type="text"> </textarea>
		<label for="email" class="absolute top-0 start-0 p-3.5 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-top-left peer-disabled:opacity-50 peer-disabled:pointer-events-none
			peer-focus:scale-90
			peer-focus:translate-x-0.5
			peer-focus:-translate-y-2.5
			peer-focus:text-primary 
			peer-not-placeholder-shown:scale-90
			peer-not-placeholder-shown:translate-x-0.5
			peer-not-placeholder-shown:-translate-y-2.5
			peer-not-placeholder-shown:text-gray-500">Mensagem</label>
		</div>
		<div class="mt-5">
			<Turnstile :site-key="siteKey" @complete="handleSuccess" v-model="token" />
		</div>
	<button class="group relative flex justify-center items-center mt-5 cursor-pointer rounded bg-primary p-3 text-white fill-white hover:bg-primary-600 transition duration-300" v-on:click="send">
		<svg class="h-4 v-4 mr-3 group-hover:rotate-45  group-hover:translate-x-[155px] relative transition-all duration-1000"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z"/></svg>
		<span class="relative group-hover:-translate-x-6 transition-all duration-300">Enviar Mensagem</span>	
	</button>

	
 
</template>
<script setup>
	import { useForm } from 'vee-validate';
	import { Turnstile } from '@sctg/turnstile-vue3';
	import { ref } from "vue"
	import axios from 'axios';
	
	const token = ref('');
	const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
	const { values, defineField } = useForm();


	const [nome, nomeAttrs] = defineField('nome');
	const [email, emailAttrs] = defineField('email');
	const [msg, msgAttrs] = defineField('msg');
	

	const handleSuccess = () => {
    	console.log('Turnstile token:', token.value);
	};
	const send = () =>{
		const data ={
			nome: values.nome,
			email: values.email,
			mensagem: values.msg,
			token: token.value
		};
		axios.post('https://x8ki-letl-twmt.n7.xano.io/api:9BTyeE3P/send-contact',  data, 			
		).then(res=>{
			console.log(res);
		})
		.catch((error) => console.log(error));
	}

</script>

