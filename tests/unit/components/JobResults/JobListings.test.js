import { shallowMount } from "@vue/test-utils";
import axios from "axios";
import JobListings from "@/components/JobResults/JobListings";
jest.mock("axios");

describe("JobListings", () => {
  shallowMount(JobListings);
  expect(axios.get).toHaveBeenCalled("http://localhost:3000/jobs");
});
