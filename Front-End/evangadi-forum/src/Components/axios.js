import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://forum-backend-deployment-0lj7.onrender.com",
});
export default axiosBase;
