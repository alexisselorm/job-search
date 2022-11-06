import { mount } from "@vue/test-utils";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes";

import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");
describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  it("renders a unique list of job types for filtering jobs", async () => {
    useUniqueJobTypes.mockReturnValue(new Set(["Intern", "Full-time"]));

    const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const jobTypeLabels = wrapper.findAll("[data-test='job-type']");
    const jobTypes = jobTypeLabels.map((node) => node.text());
    expect(jobTypes).toEqual(["Intern", "Full-time"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for job types", async () => {
      useUniqueJobTypes.mockReturnValue(new Set(["Intern", "Full-time"]));
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });
      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const internInput = wrapper.find("[data-test='Intern']");
      await internInput.setChecked();
      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", ["Intern"]);
    });
    it("navigates user to job page for fresh job results", async () => {
      useUniqueJobTypes.mockReturnValue(new Set(["Intern", "Full-time"]));
      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });
      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const internInput = wrapper.find("[data-test='Intern']");
      await internInput.setChecked();
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
