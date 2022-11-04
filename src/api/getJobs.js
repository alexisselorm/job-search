import axios from "axios";

const getJobs = async () => {
  try {
    const baseUrl = process.env.VUE_APP_API_URL;
    const response = await axios.get(`${baseUrl}/jobs`);
    return response.data;
  } catch (error) {
    throw new Error("Backend may not be running or responding", error);
  }
};
export default getJobs;
