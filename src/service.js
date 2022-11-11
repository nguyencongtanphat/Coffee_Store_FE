const HttpService = {
  appUrl: "https://voi-coffee.onrender.com",
  //appUrl: "http://localhost:3001",
};

const FormatterService = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export {FormatterService};
export default HttpService;