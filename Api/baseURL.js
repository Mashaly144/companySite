import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "https://adminbermejodev.bermeejo.com/api",
  headers: {
    localization: "en",
  },
});
export default BASE_URL;
