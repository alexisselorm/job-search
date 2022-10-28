import { mount, RouterLinkStub } from "@vue/test-utils";

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

  it("renders job location", () => {
    const wrapper = mount(
      JobListing,
      jobListingStub({ locations: ["Stockholm", "Paris"] })
    );
    expect(wrapper.text()).toMatch("Stockholm");
    expect(wrapper.text()).toMatch("Paris");
  });

  it("renders job qualifications", () => {
    const wrapper = mount(
      JobListing,
      jobListingStub({ minimumQualifications: ["Code", "Develop"] })
    );
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to job's page", () => {
    const wrapper = mount(JobListing, jobListingStub({ id: 1 }));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/1");
  });
});
