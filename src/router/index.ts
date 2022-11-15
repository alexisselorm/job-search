import { createRouter, createWebHashHistory } from "vue-router";
// Lazy load components
const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
  import(/*webpackChunkName:"jobs"*/ "@/views/JobResultsView.vue");
const JobView = () => import(/*webpackChunkName:"jobs"*/ "@/views/JobView.vue");
const TeamsView = () =>
  import(/*webpackChunkName:"teams"*/ "@/views/TeamsView.vue");

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/jobs/results", name: "JobResults", component: JobResultsView },
  { path: "/jobs/results/:id", name: "JobListing", component: JobView },
  { path: "/teams", name: "Teams", component: TeamsView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
