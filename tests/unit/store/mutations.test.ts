import mutations from "@/store/mutations";
import { GlobalState } from "@/store/types";
import state from "@/store/state";
import { Job } from "@/api/types";
describe("mutations", () => {
  const createState = (config: Partial<GlobalState> = {}): GlobalState => {
    const initialState = state();
    return { ...initialState, ...config };
  };
  const createJob = (config: Partial<Job> = {}): Job => ({
    id: 1,
    title: "Angular Developer",
    organization: "Vue and Me",
    degree: "Master's",
    jobType: "Intern",
    locations: ["Lisbon"],
    minimumQualifications: [],
    preferredQualifications: [],
    description: [],
    dateAdded: "2022-07-04",
  });

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
  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chose to filter jobs by", () => {
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
});
