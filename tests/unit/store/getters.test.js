import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_JobTypes", () => {
    it("finds unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          // Double google entry because I need to confirm the set method really works and everything is unique
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });
  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated with the given organizations", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Microsoft" },
          { organization: "Amazon" },
        ],
        selectedOrganizations: ["Google", "Microsoft"],
      };
      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "Google" },
        { organization: "Microsoft" },
      ]);
    });

    describe("when the user has not selected any organizations", () => {
      it("should return all jobs", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Microsoft" },
            { organization: "Amazon" },
          ],
          selectedOrganizations: [],
        };
        const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
        expect(filteredJobs).toEqual([
          { organization: "Google" },
          { organization: "Microsoft" },
          { organization: "Amazon" },
        ]);
      });
    });
  });
  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const state = {
        jobs: [
          // Double google entry because I need to confirm the set method really works and everything is unique
          { jobType: "Intern" },
          { jobType: "Part-time" },
          { jobType: "Full-time" },
          { jobType: "Intern" },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Intern", "Part-time", "Full-time"]));
    });
  });
  describe("FILTERED_JOBS_BY_JOB_TYPES", () => {
    it("identifies jobs that are associated with the given job types", () => {
      const state = {
        jobs: [
          { jobType: "Full-Time" },
          { jobType: "Intern" },
          { jobType: "Part-time" },
        ],
        selectedJobTypes: ["Intern", "Part-time"],
      };
      const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
      expect(filteredJobs).toEqual([
        { jobType: "Intern" },
        { jobType: "Part-time" },
      ]);
    });

    describe("when the user has not selected any job type", () => {
      it("should return all jobs", () => {
        const state = {
          jobs: [
            { jobType: "Full-Time" },
            { jobType: "Intern" },
            { jobType: "Part-time" },
          ],
          selectedJobTypes: [],
        };
        const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
        expect(filteredJobs).toEqual([
          { jobType: "Full-Time" },
          { jobType: "Intern" },
          { jobType: "Part-time" },
        ]);
      });
    });
  });
  describe("INCLUDE_JOBS_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("includes job", () => {
        const state = {
          selectedOrganizations: [],
        };
        const job = { organization: "Google" };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated with given organizations", () => {
      const state = {
        selectedOrganizations: ["Google", "Amazon"],
      };
      const job = { organization: "Google" };
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
      expect(includeJob).toBe(true);
    });
  });
  describe("INCLUDE_JOBS_BY_JOB_TYPES", () => {
    describe("when the user has not selected any job type", () => {
      it("includes job", () => {
        const state = {
          selectedJobTypes: [],
        };
        const job = { jobType: "Intern" };
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated with given job types", () => {
      const state = {
        selectedJobTypes: ["Intern", "Full-time"],
      };
      const job = { jobType: "Intern" };
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
      expect(includeJob).toBe(true);
    });
  });
});
