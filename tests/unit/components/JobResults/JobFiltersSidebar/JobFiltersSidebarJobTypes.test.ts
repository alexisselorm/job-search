import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";

describe("JobFiltersSidebarJobTypes", () => {
  it("allows users to filter  by job type", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Intern"]));
    const wrapper = shallowMount(JobFiltersSidebarJobTypes);
    const jobTypesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    console.log(jobTypesFilter.props());
    const { uniquevalues, mutation } = jobTypesFilter.props();
    console.log(uniquevalues);
    expect(uniquevalues).toEqual(new Set(["Full-time", "Intern"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
});
