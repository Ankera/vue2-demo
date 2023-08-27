import axios from "axios";
import config from "../config/index";

class HttpRequest {
  constructor() {
    this.baseURL = config.baseURL;
    this.timeout = 3000;
  }

  setInterceptors(instance) {
    instance.interceptors.request.use((config) => {
      return config;
    });

    instance.interceptors.response.use(
      (res) => {
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.reject(res.data.data);
        }
      },
      (err) => {
        switch (err.response.status) {
          case "401":
            break;
          default:
            break;
        }
        return Promise.reject(err);
      }
    );
  }

  mergeOptions(options) {
    return {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options,
    };
  }

  request(options) {
    const instance = axios.create();

    this.setInterceptors(instance);

    const opts = this.mergeOptions(options);

    return instance(opts);
  }

  get(url, config) {
    return this.request({
      method: "get",
      url,
      ...config,
    });
  }

  post(url, data) {
    return this.request({
      method: "post",
      url,
      data,
    });
  }
}

export default new HttpRequest();
