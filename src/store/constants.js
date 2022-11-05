// Mutations
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";

// Actions
export const FETCH_JOBS = "FETCH_JOBS";

// Getters - We use getters whenever we want Vue to automatically rerun a bit of logic when some other core data changes
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const FILTERED_JOBS_BY_ORGANIZATIONS = "FILTERED_JOBS_BY_ORGANIZATIONS";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const FILTERED_JOBS_BY_JOB_TYPES = "FILTERED_JOBS_BY_JOB_TYPES";
export const FILTERED_JOBS = "FILTERED_JOBS";
