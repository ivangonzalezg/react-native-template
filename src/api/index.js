import axios from "axios";

const baseURL = __DEV__ ? "http://localhost:5000" : "https://api.github.com";

const api = (jwt = "") =>
  axios.create({
    baseURL,
    headers: jwt ? { Authorization: `Bearer ${jwt}` } : {},
  });

export default api;
