import axios from "axios";
import { Degree } from "./types";

const getDegrees = async () => {
  try {
    const baseUrl = process.env.VUE_APP_API_URL;
    const response = await axios.get<Degree[]>(`${baseUrl}/degrees`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Backend may not be running or responding ${error}`);
  }
};
export default getDegrees;
