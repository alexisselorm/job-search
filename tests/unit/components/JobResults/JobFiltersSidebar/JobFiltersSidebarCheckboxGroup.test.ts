import { mount } from "@vue/test-utils";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { useRouter } from "vue-router";
jest.mock("vue-router");
const useRouterMock = useRouter as jest.Mock;

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Some header",
      uniqueValues: new Set(["Value A", "Value B"]),
      mutation: "some mutation",
      ...props,
    },
  });
  it("renders a unique list of job types for filtering jobs", async () => {
    const props = { uniqueValues: new Set(["Value A", "Value B"]) };
    const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const inputLabels = wrapper.findAll("[data-test='value']");
    const inputs = inputLabels.map((node) => node.text());
    expect(inputs).toEqual(["Value A", "Value B"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const commit = jest.fn();
      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Full-time"]),
        commit,
      };
      useStoreMock.mockReturnValue({ commit });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const internInput = wrapper.find("[data-test='Full-time']");
      await internInput.setValue(true);
      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Full-time"]);
    });
    it("navigates user to job page for fresh job results", async () => {
      useStoreMock.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });
      const props = {
        uniqueValues: new Set(["Full-time"]),
      };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const internInput = wrapper.find("[data-test='Full-time']");
      await internInput.setValue(true);
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
