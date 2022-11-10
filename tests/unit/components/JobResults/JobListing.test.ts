import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";
import jobListingStub from "@/utils/jobListingStub";
import { createJob } from "../../store/utils";

describe("JobListing", () => {
  it("renders job title", () => {
    const job = createJob({ title: "Vue Developer" });
    const wrapper = mount(JobListing, jobListingStub(job));
    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job organization", () => {
    const job = createJob({ organization: "Ship Happens" });
    const wrapper = mount(JobListing, jobListingStub(job));
    expect(wrapper.text()).toMatch("Ship Happens");
  });

  it("renders job location", () => {
    const job = createJob({ locations: ["Stockholm", "Paris"] });
    const wrapper = mount(JobListing, jobListingStub(job));
    expect(wrapper.text()).toMatch("Stockholm");
    expect(wrapper.text()).toMatch("Paris");
  });

  it("renders job qualifications", () => {
    const job = createJob({ minimumQualifications: ["Code", "Develop"] });
    const wrapper = mount(JobListing, jobListingStub(job));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to job's page", () => {
    const job = createJob({ id: 1 });
    const wrapper = mount(JobListing, jobListingStub(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/1");
  });
});
