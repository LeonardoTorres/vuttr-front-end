import axios from "axios";

const ApiRequestor = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default ApiRequestor;
