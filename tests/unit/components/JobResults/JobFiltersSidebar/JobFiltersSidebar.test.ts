import { shallowMount } from "@vue/test-utils";
import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

describe("JobFiltersSidebar", () => {
  it("allows users to filter  by job type", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Intern"]));
    // useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB", "Google"]));
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='job-types-filter']"
    );
    console.log(jobTypesFilter.props());
    const { header, uniquevalues, mutation } = jobTypesFilter.attributes();
    console.log(uniquevalues);
    expect(header).toBe("Job Types");
    expect(uniquevalues).toEqual(new Set(["Full-time", "Intern"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });

  it("allows users to filter  by organization", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobOrganizationFilter = wrapper.findComponent(
      "[data-test='organiztions-filter']"
    );
    const { header, uniqueValues, mutation } = jobOrganizationFilter.props();
    expect(header).toBe("Organizations");
    expect(uniqueValues).toEqual(new Set(["AirBnB"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
