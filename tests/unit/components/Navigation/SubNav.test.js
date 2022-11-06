import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav";
import { ref } from "vue";
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";
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
      useConfirmRoute.mockReturnValue(ref(true));

      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }]);
      const wrapper = mount(SubNav, SubNavConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      useConfirmRoute.mockReturnValue(ref(false));

      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }]);
      const wrapper = mount(SubNav, SubNavConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
