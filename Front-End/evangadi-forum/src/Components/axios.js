import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://forum-backend-deployment-1.onrender.com/api",
});
export default axiosBase;
