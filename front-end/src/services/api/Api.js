import axios from "axios";

const apiUrl =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000";

export default () => {
  return axios.create({
    baseURL: apiUrl,
  });
};
