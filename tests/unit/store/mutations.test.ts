import mutations from "@/store/mutations";
import { createDegree, createJob, createState } from "./utils";
describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const startingState = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(startingState);
      expect(startingState.isLoggedIn).toBe(true);
    });
  });
  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const startingState = createState({ jobs: [] });
      const jobOne = createJob();
      const jobTwo = createJob();

      mutations.RECEIVE_JOBS(startingState, [jobOne, jobTwo]);
      expect(startingState.jobs).toEqual([jobOne, jobTwo]);
    });
  });
  describe("RECEIVE_DEGREES", () => {
    it("receives degrees from API response", () => {
      const startingState = createState({ degrees: [] });
      const degreeOne = createDegree();
      mutations.RECEIVE_DEGREES(startingState, [degreeOne]);
      expect(startingState.degrees).toEqual([degreeOne]);
    });
  });
  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedOrganizations: [] });
      mutations.ADD_SELECTED_ORGANIZATIONS(startingState, ["Amazon", "Google"]);
      expect(startingState.selectedOrganizations).toEqual(["Amazon", "Google"]);
    });
  });
  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates job types that the user has chose to filter jobs by", () => {
      const startingState = createState({ selectedJobTypes: [] });
      mutations.ADD_SELECTED_JOB_TYPES(startingState, [
        "Full-time",
        "Part-time",
      ]);
      expect(startingState.selectedJobTypes).toEqual([
        "Full-time",
        "Part-time",
      ]);
    });
  });
  describe("ADD_SELECTED_DEGREES", () => {
    it("updates degrees that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedDegrees: [] });
      mutations.ADD_SELECTED_DEGREES(startingState, ["Ph.D", "Associate"]);
      expect(startingState.selectedDegrees).toEqual(["Ph.D", "Associate"]);
    });
  });
  describe("CLEAR_USER_JOB_FILTER_SELECTIONS", () => {
    it("removes all job filters that the user has chosen", () => {
      const startingState = createState({
        selectedDegrees: ["Random degree"],
        selectedOrganizations: ["Random organization"],
        selectedJobTypes: ["Random job type"],
      });
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(startingState);
      expect(startingState.selectedDegrees).toEqual([]);
      expect(startingState.selectedOrganizations).toEqual([]);
      expect(startingState.selectedJobTypes).toEqual([]);
    });
  });
});
