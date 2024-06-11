import axios from "axios";
import perf from "@react-native-firebase/perf";

axios.interceptors.request.use(async function (config) {
  try {
    if (config.url && config.method) {
      // eslint-disable-next-line no-comments/disallowComments
      // @ts-ignore NOTE
      const httpMetric = perf().newHttpMetric(config.url, config.method);
      // eslint-disable-next-line no-comments/disallowComments
      // @ts-ignore
      config.metadata = { httpMetric };
      await httpMetric.start();
    }
  } finally {
    return config;
  }
});

axios.interceptors.response.use(
  async function (response) {
    try {
      // eslint-disable-next-line no-comments/disallowComments
      // @ts-ignore
      const { httpMetric } = response.config.metadata;
      httpMetric.setHttpResponseCode(response.status);
      httpMetric.setResponseContentType(response.headers["content-type"]);
      await httpMetric.stop();
    } finally {
      return response;
    }
  },
  async function (error) {
    try {
      const { httpMetric } = error.config.metadata;
      httpMetric.setHttpResponseCode(error.response.status);
      httpMetric.setResponseContentType(error.response.headers["content-type"]);
      await httpMetric.stop();
    } finally {
      return Promise.reject(error);
    }
  },
);

const baseURL = __DEV__ ? "https://api.github.com" : "https://api.github.com";

const api = (jwt = "") =>
  axios.create({
    baseURL,
    headers: jwt ? { Authorization: `Bearer ${jwt}` } : {},
  });

export default api;
