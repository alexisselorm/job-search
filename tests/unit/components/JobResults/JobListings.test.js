import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  it("fetches jobs", async () => {
    shallowMount(JobListings);
    await flushPromises();
    axios.get.mockResolvedValue({ data: [] });
    console.log(axios.get());
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for each received job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const wrapper = shallowMount(JobListings);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings.length).toHaveLength(15);
  });
});
