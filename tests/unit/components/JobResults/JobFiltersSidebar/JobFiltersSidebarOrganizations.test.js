import { mount } from "@vue/test-utils";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
describe("JobFiltersSidebarOrganizations", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  it("renders a unique list of organiztions for filtering jobs", async () => {
    useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const organizationLabels = wrapper.findAll("[data-test='organization']");
    const organizations = organizationLabels.map((node) => node.text());
    expect(organizations).toEqual(["Google", "Amazon"]);
  });
  describe("when user clicks checkkbox", () => {
    it("communicates that user has selected checkbox for organization", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));

      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });
      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const googleInput = wrapper.find("[data-test='Google']");
      await googleInput.setChecked();
      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
        "Google",
      ]);
    });
    it("navigates user to job page for fresh job results", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });
      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const googleInput = wrapper.find("[data-test='Google']");
      await googleInput.setChecked();
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
