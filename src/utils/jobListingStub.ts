import { Job } from "@/api/types";
import { RouterLinkStub } from "@vue/test-utils";
//Use a predefined stub for router-link. This method is passed in as the second argument in a mount/shallowMethod method.
// this config takes in an job object, a property and a value that is to be expected
const jobListingStub = (job: Job) => ({
  global: {
    stubs: { "router-link": RouterLinkStub },
  },
  props: {
    job,
  },
});

export default jobListingStub;
