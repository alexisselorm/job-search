import { RouterLinkStub } from "@vue/test-utils";

//Use a predefined stub for router-link. This method is passed in as the second argument in a mount/shallowMethod method.
// this config takes in an object, a property and a value that is to be expected
const jobListingStub = (object) => ({
  global: {
    stubs: { "router-link": RouterLinkStub },
  },
  props: {
    job: object,
  },
});

export default jobListingStub;
