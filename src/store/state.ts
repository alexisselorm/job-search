import { Job } from "@/api/types";
import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
  };
};

export default state;
