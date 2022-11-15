import axios from "axios";
import { Job } from "./types";

const getJobs = async () => {
  try {
    const baseUrl = process.env.VUE_APP_API_URL;
    const response = await axios.get<Job[]>(`${baseUrl}/jobs`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Backend may not be running or responding ${error}`);
  }
};
export default getJobs;
