import { mount } from "@vue/test-utils";
import SubNav from "@/components/SubNav";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobResultspage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobResultspage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
