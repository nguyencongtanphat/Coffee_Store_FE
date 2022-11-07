const HttpService = {
  appUrl: "https://voicoffee.herokuapp.com",
};

const FormatterService = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export {FormatterService};
export default HttpService;