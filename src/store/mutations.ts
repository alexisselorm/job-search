import { Degree, Job } from "@/api/types";
import {
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  RECEIVE_DEGREES,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  UPDATE_SKILLS_SEARCH_TERM,
} from "@/store/constants";

import { GlobalState } from "@/store/types";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    // Take the current jobs 'state' (which is empty) and override it with the new array of jobs received from the backend
    state.jobs = jobs;
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    // Take the current degrees 'state' (which is empty) and override it with the new array of degrees received from the backend
    state.degrees = degrees;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    // Take the current selected organizations 'state' and override it with the new array of strings received represented by 'organizations'
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  [UPDATE_SKILLS_SEARCH_TERM](state: GlobalState, skillsSearchTerm: string) {
    state.skillsSearchTerm = skillsSearchTerm;
  },
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = "";
  },
};

export default mutations;
