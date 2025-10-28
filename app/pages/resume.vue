<template>
	<div>
		<section class="main-content ">
			<div >
				<article>
					<h2 class="title"><span>Experiência</span> Profissional</h2>
					<div class="flex flex-wrap max-[321px]:flex-col">
						<div class="
					relative py-5 pr-5 w-1/2 max-[321px]:w-full
					before-divider-solid-y-xs 
					after-divider-radial-x
				">
							<p class="text-xs w-fit bg-primary text-white p-0.5  rounded">2018 - 2025</p>
							<p class="mt-2">Desenvolvedor Front-End Lider</p>
							<p class="text-primary-500 text-sm mb-2">Fastchannel</p>
							<p class="text-gray-700">
								Responsável pela áera de front-end, liderança técnica, desenvolvimento e UX.
							</p>
						</div>
						<div class="
					relative py-5 min-[321px]:pl-5 w-1/2 max-[321px]:w-full
					after-divider-radial-x">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2017 - 2018</p>
							<p class="mt-2">Desenvolvedor Full Stack Lider</p>
							<p class="text-primary-500 text-sm mb-2">WeContent</p>
							<p class="text-gray-700">
								Responsável por análise, documentação, modelagem e desenvolvimento.
							</p>
						</div>

						<div class="				
					relative pt-10 pb-5 pr-5 w-1/2 max-[321px]:w-full
					after-divider-radial-x
					before-divider-solid-y-xs 
				">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2015 - 2017</p>
							<p class="mt-2">Desenvolvedor Full Stack Sênior</p>
							<p class="text-primary-500 text-sm mb-2">Verti/Fastchannel</p>
							<p class="text-gray-700">
								Desenvolvimento de lojas virtuais dos mais diferente ramos de atividade.
							</p>
						</div>
						<div class="
					relative pt-10 pb-5 min-[321px]:pl-5 w-1/2 max-[321px]:w-full
					after-divider-radial-x">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2014 - 2015</p>
							<p class="mt-2">Desenvolvedor Full Stack Sênior</p>
							<p class="text-primary-500 text-sm mb-2">Sorte Online</p>
							<p class="text-gray-700">
								Manutenção e Desenvolvimento de API RestFull e Loja Virtual.
							</p>
						</div>
						<div class="				
					relative pt-10 pb-5 pr-5 w-1/2 max-[321px]:w-full
					before-divider-gradient-y-xs 				
				">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2013 - 2014</p>
							<p class="mt-2">Desenvolvedor Full Stack Sênior</p>
							<p class="text-primary-500 text-sm mb-2">Vertis</p>
							<p class="text-gray-700">
								Desenvolvimento front-end e back-end do e-commerce da FastShop.
							</p>
						</div>
						<div class=" flex justify-center items-center
					relative pt-10 pb-5 pl-5 w-1/2 max-[321px]:w-full">
							<button class="text-lg w-fit bg-primary text-white fill-white p-3 rounded flex flex-col lg:flex-row items-center
							hover:bg-primary-700 transition duration-300" v-on:click="toggleModal">
								1998 - 2013
								<svg class="h-8 w-8 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
								</svg>
							</button>
						</div>
					</div>
				</article>

				<Skills />

				<article class="mt-10">
					<h2 class="title"><span>Formação</span> Acadêmica</h2>
					<div class="flex flex-col">
						<div class="relative w-full py-5 after-divider-radial-x">
							<div class="flex items-center">
								<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2007 - 2008</p><span
									class="ml-5 text-[12px] text-gray-300">não concluido</span>
							</div>
							<p class="mt-2">Tecnólogo em Banco de Dados</p>
							<p class="text-primary-500 text-sm mb-2">Faculdade Módulo</p>
						</div>
						<div class="relative py-5 after-divider-radial-x">
							<div class="flex items-center">
								<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2002 - 2003</p>
							</div>
							<p class="mt-2">Básico de Design e Desenho - Design gráfico</p>
							<p class="text-primary-500 text-sm mb-2">Escola Panamericana de Arte</p>
						</div>
						<div class="relative py-5 ">
							<div class="flex items-center">
								<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">1996 - 1998</p>
							</div>
							<p class="mt-2">Tecnólogo em Processamento de Dados</p>
							<p class="text-primary-500 text-sm mb-2">Colégio Bernardino de Campos</p>
						</div>
					</div>
				</article>

				<article class="mt-10">
					<h2 class="title"><span>Cursos</span> Complementares</h2>
					<div class="flex flex-wrap flex-col sm:flex-row ">
						<div class="relative sm:w-[50%] py-5 after-divider-radial-x before-divider-gradient-y-sm">
							<div class="flex items-center">
								<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2011</p>
							</div>
							<p class="mt-2">Curso de SEO</p>
							<p class="text-primary-500 text-sm mb-2">Mestre SEO</p>
						</div>
						<div class="relative sm:w-[50%] py-5 sm:pl-5 after-divider-radial-x">
							<div class="flex items-center">
								<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2004</p>
							</div>
							<p class="mt-2">Managing Windows Server 2003 Enviroment - 2274</p>
							<p class="text-primary-500 text-sm mb-2">KA Solution</p>
						</div>
						<div class="relative py-5 ">
							<div class="flex items-center">
								<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2004</p>
							</div>
							<p class="mt-2">Manintaing a Microsoft Windows Server 2003 Enviroment - 2275</p>
							<p class="text-primary-500 text-sm mb-2">KA Solution</p>
						</div>
					</div>
				</article>
				<article class="mt-10">
					<h2 class="title"><span>Principais</span> Qualidades</h2>
					<div class="flex flex-wrap">
						<ul class="list-disc p-5 flex flex-col gap-5">
							<li>Competência em trabalhar com metodologias ágeis.</li>
							<li>Colaboração efetiva em equipes multidisciplinares.</li>
							<li>Estudo contínuo de novas tecnologias e ferramentas.</li>
							<li>Capacidade de comunicação clara para alinhamento com clientes.</li>
							<li>Liderança técnica e tomada de decisões estratégicas.</li>
						</ul>

					</div>
				</article>

				<RouterLink to="/projects">
					<span
						class="my-10 flex items-center p-3 bg-gray-200 rounded w-fit hover:bg-primary hover:text-white hover:fill-white transition duration-300">
						Confira alguns projetos
						<svg class="h-6 w-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
						</svg>
					</span>
				</RouterLink>
			</div>
		</section>
		<Transition name="fade">
			<div class="fixed top-0 left-0 h-full w-full  flex flex-col justify-center items-center z-30 " v-if="modalOpened" >
				<div class="bg-gray-900/90 absolute left-0 right-0 top-0 bottom-0" v-on:click="toggleModal"></div>
				<div class="relative flex flex-col overflow-auto mx-5  my-15 bg-white p-5 rounded lg:h-2/3  ">
					<div class="flex flex-col ">
						<div class="mb-5">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2012 - 2013</p>
							<p class="mt-2">Desenvolvedor Microsoft Dynamics CRM</p>
							<p class="text-primary-500 text-sm mb-2">AlfaPeople</p>
							<p class="text-gray-700">
								Desenvolvimentos de plug-ins, relatórios e integrações (Integration Services)
							</p>
						</div> 
						<div class="divider-x "></div>
						<div class="my-5">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2012 - 2012</p>
							<p class="mt-2">Desenvolvedor .NET Sênior / Microsoft Dynamics CRM</p>
							<p class="text-primary-500 text-sm mb-2">UOL Diveo</p>
							<p class="text-gray-700">
								Desenvolvimentos de componentes personalizados e relatorios.
							</p>
						</div>
						<div class="divider-x "></div>
						<div class="my-5">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2010 - 2012</p>
							<p class="mt-2">Analista Desenvolvedor Líder</p>
							<p class="text-primary-500 text-sm mb-2">Grupo InternetPro</p>
							<p class="text-gray-700">
								Responável pela analise e desenvolvimento de projetos e liderança de equipe. 
							</p>
						</div>
						<div class="divider-x "></div>
						<div class="my-5">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2009 - 2010</p>
							<p class="mt-2">Analista Desenvolvedor Pleno</p>
							<p class="text-primary-500 text-sm mb-2">Empahsys IT Solution</p>
							<p class="text-gray-700">
								Desenvolvimento de sistema de pedidos de franqueados.
							</p>
						</div>
						<div class="divider-x "></div>
						<div class="my-5">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2008 - 2009</p>
							<p class="mt-2">Analista Desenvolvedor Pleno</p>
							<p class="text-primary-500 text-sm mb-2">Deal Technologies</p>
							<p class="text-gray-700">
								Desenvolvimento para multiplos clientes de diversas áreas.
							</p>
						</div>
						<div class="divider-x "></div>
						<div class="my-5">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">2004 - 2008</p>
							<p class="mt-2">Analista Desenvolvedor Pleno</p>
							<p class="text-primary-500 text-sm mb-2">Helix Tecnologia</p>
							<p class="text-gray-700">
								Responsável por análise e desenvolvimento de multiplos projetos para os mais diversos clientes.
							</p>
						</div>
						<div class="divider-x"> </div>
						<div class="my-5">
							<p class="text-xs w-fit bg-gray-300 text-white p-0.5  rounded">1998 - 2004</p>
							<p class="mt-2">Desenvolvedor Web</p>
							<p class="text-primary-500 text-sm mb-2">RealWorks Marketing e Tecnologia</p>
							<p class="text-gray-700">
								Desenvolvimento de web sites, criação online e offline, infra estrutura, etc. 
							</p>
						</div>
						<button class="bg-gray-300 p-3 rounded mt-10 ml-auto" v-on:click="toggleModal">
							Fechar
						</button>
					</div>
				</div>

				<button 
					class="absolute top-5 right-5 text-white border border-white rounded-full flex justify-center items-center w-6 h-6 transition duration-300
						hover:text-gray-400 hover:border-gray-400" v-on:click="toggleModal">✕</button>
				
			</div>
		</Transition>
	</div>
</template>

<script setup>
import {ref} from 'vue'


const modalOpened = ref(false);
const toggleModal = () =>{
	modalOpened.value = !modalOpened.value;
}


</script>