import axios from "axios";

export const api = axios.create({
  baseURL: "https://pugialli-money-db.vercel.app",
});
