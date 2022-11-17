import getters from "@/store/getters";
import { createStore } from "vuex";
import { createDegree, createJob, createState } from "./utils";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const jobs = [
        // Double google entry because I need to confirm the set method really works and everything is unique
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });
  describe("UNIQUE_DEGREES", () => {
    it("finds unique degrees from list of jobs", () => {
      const degrees = [
        // Double google entry because I need to confirm the set method really works and everything is unique
        createDegree({ degree: "Master's" }),
        createDegree({ degree: "Bachelor's" }),
      ];
      const state = createState({ degrees });
      const result = getters.UNIQUE_DEGREES(state);
      expect(result).toEqual(["Master's", "Bachelor's"]);
    });
  });
  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const jobs = [
        createJob({ jobType: "Intern" }),
        createJob({ jobType: "Part-time" }),
        createJob({ jobType: "Full-time" }),
        createJob({ jobType: "Intern" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Intern", "Part-time", "Full-time"]));
    });
  });
  describe("INCLUDE_JOBS_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("includes job", () => {
        const state = createState({
          selectedOrganizations: [],
        });
        const job = createJob({ organization: "Google" });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated with given organizations", () => {
      const state = createState({
        selectedOrganizations: ["Google", "Amazon"],
      });
      const job = createJob({ organization: "Google" });
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
      expect(includeJob).toBe(true);
    });
  });
  describe("INCLUDE_JOBS_BY_JOB_TYPES", () => {
    describe("when the user has not selected any job type", () => {
      it("includes job", () => {
        const state = createState({
          selectedJobTypes: [],
        });
        const job = createJob({ jobType: "Intern" });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated with given job types", () => {
      const state = createState({
        selectedJobTypes: ["Intern", "Full-time"],
      });
      const job = createJob({ jobType: "Intern" });
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
      expect(includeJob).toBe(true);
    });
  });
  describe("INCLUDE_JOBS_BY_DEGREE", () => {
    describe("when the user has not selected any degree", () => {
      it("includes job", () => {
        const state = createState({
          selectedDegrees: [],
        });
        const job = createJob({ degree: "Master's" });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated with given degrees", () => {
      const state = createState({
        selectedDegrees: ["Ph.D", "Associate"],
      });
      const job = createJob({ degree: "Associate" });
      const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
      expect(includeJob).toBe(true);
    });
  });
  describe("INCLUDE_JOB_BY_SKILL", () => {
    it("identifies if job matches user's skill", () => {
      const state = createState({ skillsSearchTerm: "Vue" });
      const job = createJob({ title: "Vue Developer" });
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);
      expect(includeJob).toBe(true);
    });
  });
  describe("FILTERED_JOBS", () => {
    it("filters jobs by organizations, job types, and degree", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true);
      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
      };
      const job = createJob({ title: "Best" });
      const state = createState({
        jobs: [job],
      });
      const result = getters.FILTERED_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job);
    });
  });
});
