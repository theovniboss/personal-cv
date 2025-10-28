<template>
<div>
	<section class="main-content">
		<div>
			<h2 class="title"><span>Entre</span> em Contato</h2>
			<p class="my-5">Você tem alguma dúvida, oportunidade, projeto ou quer apenas jogar conversa fora? Me mande uma mensagem que responderei o mais rápido que puder.</p>
			
			<form @submit="onSubmit" :disabled="isSubmitting">
				<div class="relative mb-5">
					<input id="nome" class="
						peer px-3.5 py-2.5 block w-full placeholder:text-transparent
						focus:border-primary focus:border focus:outline-0 focus:text-primary
						aria-required:border-red-800 aria-required:text-red-800
						disabled:opacity-50 disabled:pointer-events-none
						border border-gray-300 rounded
						focus:pt-4
						focus:pb-1
						not-placeholder-shown:pt-4
						not-placeholder-shown:pb-1
						autofill:pt-4
						autofill:pb-1" placeholder="Seu Nome" v-model="nome" v-bind="nomeAttrs" type="text" autocomplete="given-name" :aria-required="!!errors.nome">
					<label for="nome" class="absolute top-0 start-0 p-3.5 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-top-left peer-disabled:opacity-50 peer-disabled:pointer-events-none
						peer-focus:scale-90
						peer-focus:translate-x-0.5
						peer-focus:-translate-y-2.5
						peer-focus:text-primary  peer-aria-required:text-red-800
						peer-not-placeholder-shown:scale-90
						peer-not-placeholder-shown:translate-x-0.5
						peer-not-placeholder-shown:-translate-y-2.5
						peer-not-placeholder-shown:text-gray-500">Nome</label>
					
						<p class="text-[10px] text-red-800 absolute top-1 right-2">{{ errors.nome }}</p>

				</div>

				<div class="relative mb-5">
					<input  id="email" class="
						peer px-3.5 py-2.5 block w-full placeholder:text-transparent
						focus:border-primary focus:border focus:outline-0 focus:text-primary
						aria-required:border-red-800 aria-required:text-red-800
						disabled:opacity-50 disabled:pointer-events-none
						border border-gray-300 rounded
						focus:pt-4
						focus:pb-1
						not-placeholder-shown:pt-4
						not-placeholder-shown:pb-1
						autofill:pt-4
						autofill:pb-1" placeholder="you@email.com" v-model="email" v-bind="emailAttrs" type="email" autocomplete="email" :aria-required="!!errors.email">
					<label for="email" class="absolute top-0 start-0 p-3.5 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-top-left peer-disabled:opacity-50 peer-disabled:pointer-events-none
						peer-focus:scale-90
						peer-focus:translate-x-0.5
						peer-focus:-translate-y-2.5
						peer-focus:text-primary peer-aria-required:text-red-800
						peer-not-placeholder-shown:scale-90
						peer-not-placeholder-shown:translate-x-0.5
						peer-not-placeholder-shown:-translate-y-2.5
						peer-not-placeholder-shown:text-gray-500">E-mail</label>
						<p class="text-[10px] text-red-800 absolute top-1 right-2">{{ errors.email }}</p>
				</div>

				<div class="relative mb-5">
					<textarea id="mensagem" class=" h-30
						peer px-3.5 py-2.5 block w-full placeholder:text-transparent
						focus:border-primary focus:border focus:outline-0 focus:text-primary
						aria-required:border-red-800 aria-required:text-red-800
						disabled:opacity-50 disabled:pointer-events-none
						border border-gray-300 rounded
						focus:pt-4
						focus:pb-1
						not-placeholder-shown:pt-4
						not-placeholder-shown:pb-1
						autofill:pt-4
						autofill:pb-1" placeholder="Sua Mensagem" v-model="msg" v-bind="msgAttrs" type="text" :aria-required="!!errors.msg" />
					<label for="mensagem" class="absolute top-0 start-0 p-3.5 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-top-left peer-disabled:opacity-50 peer-disabled:pointer-events-none
						peer-focus:scale-90
						peer-focus:translate-x-0.5
						peer-focus:-translate-y-2.5
						peer-focus:text-primary peer-aria-required:text-red-800
						peer-not-placeholder-shown:scale-90
						peer-not-placeholder-shown:translate-x-0.5
						peer-not-placeholder-shown:-translate-y-2.5
						peer-not-placeholder-shown:text-gray-500">Mensagem</label>
						<p class="text-[10px] text-red-800 absolute top-1 right-2">{{ errors.msg }}</p>
				</div>
				<div class="relative mb-4 w-[302px] h-[67px]" :class="{'border border-red-800': !!errors.captchaToken}">
					<NuxtTurnstile :site-key="siteKey" v-model="captchaToken" @expired="handleExpire" />
					<p class="text-[10px] text-red-800 absolute top-1 left-4">{{ errors.captchaToken }}</p>
				</div>
				<button class="group relative flex items-center cursor-pointer rounded bg-primary p-3 text-white fill-white transition duration-300
					hover:bg-primary-600" type="submit" :disabled="isSubmitting" >
					
					<svg v-if="!isSubmitting" class="h-4 v-4 mr-3 group-hover:rotate-45 group-hover:translate-x-[135px] relative transition-all duration-1000"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z"/></svg>
					<span v-if="!isSubmitting" class="relative group-hover:-translate-x-7 transition-all duration-1000">Enviar Mensagem</span>
					
					
					
					<span v-if="isSubmitting" class="w-[125px]">Enviando...</span>
					<svg v-if="isSubmitting" class="h-4 v-4 mr-3 animate-spin" aria-hidden="true" role="status"  viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
					</svg>
					
				</button>



			</form>
		

		</div>
	</section>
	<Transition name="fade">
		<div class="fixed top-0 left-0 h-full w-full  flex flex-col justify-center items-center z-30 " v-if="alert.show" >
			<div class="bg-gray-900/90 absolute left-0 right-0 top-0 bottom-0" v-on:click="closeAlert"></div>
			
			<div class="relative flex flex-col overflow-auto mx-5  my-15 bg-white p-5 rounded   ">
			
				<div class="flex items-center" v-if="alert.success">
					<picture class="mr-5 min-w-[85px] w-[85px] h-[85px]">
						<img src="/images/icon-conversation-animated.webp" alt="Mensagem Enviada" width="130" height="130" class="w-[85px] h-[85px]" />
					</picture>
					<div>
						<p class="text-green-600 font-semibold text-xl mb-2">Mensagem enviada!</p>
						<p>Muito obrigado pela sua mensagem. Responderei o mais rápido possível.</p>
					</div>
				</div>
				<div class="flex items-center" v-else>
					<div class="flex flex-col">
						<p class="text-red-600 font-semibold text-xl mb-2">Houve uma falha!</p>
						<p>Infelizmente sua mensagem não foi enviada. Tente novamente mais tarde.</p>
						<button class="bg-gray-100 px-2 py-1 rounded text-sm mt-3 shadow ml-auto" v-on:click="closeAlert">Fechar</button>
					</div>
				</div>
			</div>

			<button class="absolute top-5 right-5 text-white border border-white rounded-full flex justify-center items-center w-6 h-6 transition duration-300
				hover:text-gray-400 hover:border-gray-400" v-on:click="closeAlert">✕</button>
		</div>
	</Transition>
</div>
</template>
<script setup>
	//import { localize } from '@vee-validate/i18n'
	import { toTypedSchema } from '@vee-validate/yup'
	import { object, setLocale, string  }  from 'yup';
	import { pt } from 'yup-locale-pt';
	setLocale(pt);

	import { ref } from "vue";
	import axios from 'axios';
	
	const alert = ref({
		show:false,
		success:false
	});
	const token = ref('');
	const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
	
	const { values, errors, meta, defineField, setFieldValue, handleSubmit, isSubmitting  } = useForm({
		initialValues:{
			captchaToken: ''
		},
		validationSchema: toTypedSchema(
			object({
				email: string().required().email().label("E-mail"),
				nome: string().required().min(4).label("Nome"),
				msg: string().required().min(10).label("Mensagem"),
				captchaToken: string().required("Responda o desafio")
			})
		)
	});
	const [nome, nomeAttrs] = defineField('nome');
	const [email, emailAttrs] = defineField('email');
	const [msg, msgAttrs] = defineField('msg');
	const [captchaToken, captchaTokenAttrs] = defineField('captchaToken');

	const handleExpire = () => {
		setFieldValue(captchaToken, '');
	};


	const onSubmit = handleSubmit(values => {	
		return sendForm().then(res=>{
			alert.value.success = res.data.success;
			alert.value.show = true;
		})

		
	});

	const closeAlert = () => {
		alert.value.success = false;
		alert.value.show = false;
	}

	const sendForm = () => {
		const data ={
			nome: values.nome,
			email: values.email,
			mensagem: values.msg,
			token: values.captchaToken
		};
		return new Promise((resolve, reject)=>{
			axios.post('https://x8ki-letl-twmt.n7.xano.io/api:9BTyeE3P/send-contact',  data).then(res=>{
				resolve(res);
			}), error=>{
				console.error(error);
				reject(error);
			}
			
		})
	}

</script>

