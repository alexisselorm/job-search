import { mount } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing";
import jobListingStub from "@/utils/jobListingStub";

describe("JobListing", () => {
  it("renders job title", () => {
    const wrapper = mount(
      JobListing,
      jobListingStub({
        title: "Vue Developer",
      })
    );
    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job organization", () => {
    const wrapper = mount(
      JobListing,
      jobListingStub({ organization: "Ship Happens" })
    );
    expect(wrapper.text()).toMatch("Ship Happens");
  });
});
