import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://64de102a825d19d9bfb1f7ba.mockapi.io/",
});

export default fetcher;
