import axios from "axios";

const api = axios.create({
  baseURL: process.env.DOMAIN_SERVER_API,
});

// Function to set the authorization token in the headers
export const setAuthorizationToken = (token: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
