import axios from "axios";
import { apiConfig } from "../config";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: apiConfig.KEY
  }
});
