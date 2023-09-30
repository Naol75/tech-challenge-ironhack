import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
})

export default service