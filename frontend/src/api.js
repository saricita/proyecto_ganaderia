import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const getUsers = () => API.get("/users");
export const createUser = (data) => API.post("/users", data);