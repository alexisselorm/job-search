import { Degree, Job } from "@/api/types";
export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
  degrees: Degree[];
  skillsSearchTerm: string;
}
