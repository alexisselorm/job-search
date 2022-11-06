import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav";

import { useStore } from "vuex";
import { useRoute } from "vue-router";
jest.mock("vuex");
jest.mock("vue-router");
// Takes in the name of a route as an argument
describe("Subnav", () => {
  const SubNavConfig = () => ({
    global: {
      stubs: { FontAwesomeIcon: true },
    },
  });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      useRoute.mockReturnValue({ name: "JobResults" });

      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });
      const wrapper = mount(SubNav, SubNavConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      useRoute.mockReturnValue({ name: "home" });

      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });
      const wrapper = mount(SubNav, SubNavConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
