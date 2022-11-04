import { createStore } from "vuex";
import getJobs from "@/api/getJobs";

export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";

// Getters - We use getters whenever we want Vue to automatically rerun a bit of logic when some other core data changes
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
};

// Getters
// Never modify data in getters.
export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  // getters
  getters,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
