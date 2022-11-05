import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
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
});
