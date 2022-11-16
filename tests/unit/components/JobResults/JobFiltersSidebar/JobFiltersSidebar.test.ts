import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

describe("JobFiltersSidebar", () => {
  it("sets up panel for user to filter jobs by one or more criteria", () => {
    const wrapper = shallowMount(JobFiltersSidebar);
    expect(wrapper.exists()).toBe(true);
  });
  it("allows users to filter  by job type", () => {
    // useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Intern"]));
    // useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB", "Google"]));
    // useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    // const wrapper = shallowMount(JobFiltersSidebar);
    // const jobTypesFilter = wrapper.findComponent(
    //   "[data-test='job-types-filter']"
    // );
    // console.log(jobTypesFilter.props());
    // const { header, uniquevalues, mutation } = jobTypesFilter.attributes();
    // console.log(uniquevalues);
    // expect(header).toBe("Job Types");
    // expect(uniquevalues).toEqual(new Set(["Full-time", "Intern"]));
    // expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });

  it("allows users to filter  by organization", () => {
    // useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    // useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    // const wrapper = shallowMount(JobFiltersSidebar);
    // const jobOrganizationFilter = wrapper.findComponent(
    //   "[data-test='organizations-filter']"
    // );
    // const { header, uniqueValues, mutation } = jobOrganizationFilter.props();
    // expect(header).toBe("Organizations");
    // expect(uniqueValues).toEqual(new Set(["AirBnB"]));
    // expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
  it("allows users to filter  by degree", () => {
    // useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    // const wrapper = shallowMount(JobFiltersSidebar);
    // const degreesFilter = wrapper.findComponent(
    //   "[data-test='degrees-filter']"
    // );
    // const { header, uniqueValues, mutation } = degreesFilter.props();
    // expect(header).toBe("Degrees");
    // expect(uniqueValues).toEqual(["Associate","Bachelor's"]);
    // expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
