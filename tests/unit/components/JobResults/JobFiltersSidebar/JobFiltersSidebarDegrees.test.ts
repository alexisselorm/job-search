import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";

describe("JobFiltersSidebarDegrees", () => {
  it("allows users to filter  by degree", () => {
    useUniqueDegreesMock.mockReturnValue(new Set(["Associate", "Master's"]));
    const wrapper = shallowMount(JobFiltersSidebarDegrees);
    const DegreesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = DegreesFilter.props();
    expect(uniqueValues).toEqual(new Set(["Associate", "Master's"]));
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
