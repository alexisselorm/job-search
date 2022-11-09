import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav.vue";
import { ref } from "vue";
import useConfirmRoute from "@/composables/useConfirmRoute";
const useConfirmRouteMock = useConfirmRoute as jest.Mock;

import { useFilteredJobs } from "@/store/composables";
const useFilteredJobsMock = useFilteredJobs as jest.Mock;
jest.mock("@/composables/useConfirmRoute");
jest.mock("@/store/composables");
// Takes in the name of a route as an argument
describe("Subnav", () => {
  const SubNavConfig = () => ({
    global: {
      stubs: { FontAwesomeIcon: true },
    },
  });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      useConfirmRouteMock.mockReturnValue(ref(true));

      useFilteredJobsMock.mockReturnValue([{ id: 1 }, { id: 2 }]);
      const wrapper = mount(SubNav, SubNavConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      useConfirmRouteMock.mockReturnValue(ref(false));

      useFilteredJobsMock.mockReturnValue([{ id: 1 }, { id: 2 }]);
      const wrapper = mount(SubNav, SubNavConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
