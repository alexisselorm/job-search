import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav";
import SubNavConfig from "@/utils/subNavConfig";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      const $store = {
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      };
      const wrapper = mount(SubNav, SubNavConfig(routeName, $store));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      const wrapper = mount(SubNav, SubNavConfig("home"));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
