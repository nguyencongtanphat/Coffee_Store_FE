const HttpService = {
  appUrl: "https://voicoffee.herokuapp.com",
  //appUrl: "http://localhost:3001",
};

const FormatterService = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export {FormatterService};
export default HttpService;