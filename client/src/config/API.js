import axios from "axios";

const API = await axios.create({ baseURL: "http://localhost:3000" });

export default API;