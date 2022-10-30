import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  it("fetches jobs", async () => {
    shallowMount(JobListings);
    axios.get.mockResolvedValue({ data: [] });
    await flushPromises();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const wrapper = shallowMount(JobListings);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
