import { createMemoryHistory, createRouter } from "vue-router";
import AboutPage from "../pages/AboutUsPage.vue";
import ResumePage from "../pages/ResumePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ResumeNPage from "../pages/ResumeNPage.vue";
import ResumeMPage from "../pages/ResumeMPage.vue";
import ResumeApage from "../pages/ResumeApage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";

const routes = [
  { path: "/", component: AboutPage },
  { path: "/services", component: ServicesPage },
  { path: "/resume", component: ResumePage },
  { path: "/resume-n", component: ResumeNPage },
  { path: "/resume-m", component: ResumeMPage },
  { path: "/resume-a", component: ResumeApage },
  { path: "/projects", component: ProjectPage },
  { path: "/contact", component: ContactPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  linkActiveClass: "active-link",
});
