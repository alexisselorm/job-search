import {
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
} from "@/store/constants";

const mutations = {
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

export default mutations;
