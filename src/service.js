import axios from "axios";

const HttpService = {
  appUrl: "https://coffeestorebe-production.up.railway.app",
  // appUrl: "http://localhost:3001",
};

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: HttpService.appUrl,
    timeout: 30000,
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
    },
  });
};

const FormatterService = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export { FormatterService };
export default HttpService;
