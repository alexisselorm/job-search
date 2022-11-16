import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

describe("JobFiltersSidebarOrganizations", () => {
  it("allows users to filter  by organization", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB", "Google"]));
    const wrapper = shallowMount(JobFiltersSidebarOrganizations);
    const OrganizationsFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = OrganizationsFilter.props();
    expect(uniqueValues).toEqual(new Set(["AirBnB", "Google"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
