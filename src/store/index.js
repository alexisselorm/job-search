import { createStore } from "vuex";
import getJobs from "@/api/getJobs";

// Mutations
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";

// Actions
export const FETCH_JOBS = "FETCH_JOBS";

// Getters - We use getters whenever we want Vue to automatically rerun a bit of logic when some other core data changes
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedOrganizations: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    // Take the current jobs 'state' (which is empty) and override it with the new array of jobs received from the backend
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    // Take the current selected organizations 'state' and override it with the new array of strings received represented by 'organizations'
    state.selectedOrganizations = organizations;
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
