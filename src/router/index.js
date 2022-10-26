import { createRouter, createWebHashHistory } from "vue-router";
// Lazy load components
const HomeView = () => import("@/views/HomeView");
const JobResultsView = () =>
  import(/*webpackChunkName:"jobs"*/ "@/views/JobResultsView");
const JobView = () => import(/*webpackChunkName:"jobs"*/ "@/views/JobView");

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/jobs/results/:id", name: "JobListing", component: JobView },
  { path: "/jobs/results", name: "JobResults", component: JobResultsView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
