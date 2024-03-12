import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "https://adminmasark.bermeejo.com/api",
});
export default BASE_URL;
