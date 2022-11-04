import { createRouter, createWebHashHistory } from "vue-router";
// Lazy load components
const HomeView = () => import("@/views/HomeView");
const JobResultsView = () =>
  import(/*webpackChunkName:"jobs"*/ "@/views/JobResultsView");
const JobView = () => import(/*webpackChunkName:"jobs"*/ "@/views/JobView");
const TeamsView = () =>
  import(/*webpackChunkName:"teams"*/ "@/views/TeamsView");

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/jobs/results/:id", name: "JobListing", component: JobView },
  { path: "/jobs/results", name: "JobResults", component: JobResultsView },
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
