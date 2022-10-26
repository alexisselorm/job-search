import { RouterLinkStub } from "@vue/test-utils";

//Use a predefined stub for router-link. This method is passed in as the second argument in a mount/shallowMethod method.
const createConfig = () => ({
  global: {
    stubs: { "router-link": RouterLinkStub },
  },
});

export default createConfig;
