import { mount } from "@vue/test-utils";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes";
describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = ($store, $router) => ({
    global: {
      mocks: {
        $store,
        $router,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  it("renders a unique list of job types for filtering jobs", async () => {
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Intern", "Full-time"]),
      },
    };
    const $router = { push: jest.fn() };
    const wrapper = mount(
      JobFiltersSidebarJobTypes,
      createConfig($store, $router)
    );

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const jobTypeLabels = wrapper.findAll("[data-test='job-type']");
    const jobTypes = jobTypeLabels.map((node) => node.text());
    expect(jobTypes).toEqual(["Intern", "Full-time"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for job types", async () => {
      const commit = jest.fn();
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Intern", "Full-time"]),
        },
        commit,
      };
      const $router = { push: jest.fn() };
      const wrapper = mount(
        JobFiltersSidebarJobTypes,
        createConfig($store, $router)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const internInput = wrapper.find("[data-test='Intern']");
      await internInput.setChecked();
      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", ["Intern"]);
    });
    it("navigates user to job page for fresh job results", async () => {
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Intern", "Full-time"]),
        },
        commit: jest.fn(),
      };
      const push = jest.fn();
      const $router = { push };
      const wrapper = mount(
        JobFiltersSidebarJobTypes,
        createConfig($store, $router)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const internInput = wrapper.find("[data-test='Intern']");
      await internInput.setChecked();
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
