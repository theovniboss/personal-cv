import { createWebHistory, createRouter } from "vue-router";

import Index from "../views/Index.vue";
import Contact from "../views/Contact.vue";
import Resume from "../views/Resume.vue";
import Projects from "../views/Projects.vue";
const routes = [
	{ path: "/", component: Index, name: "index" },	
	{ path: "/contact", component: Contact, name: "contact" },
	{ path: "/resume", component: Resume, name: "resume" },
	{ path: "/projects", component: Projects, name: "projects" },
];

export const router = createRouter({
	history: createWebHistory(),
	routes
});
