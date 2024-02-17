import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// export const uploadFile = (data) => api2.post("/upload", data);
// export const getFiles = () => api.get("/files");
// export const getFile = (id) => api.get(/${id});

export const getCausesAPI = () =>
  api.get("/campaigns/causes", { withCredentials: true });
export const postRegisterAPI = (body) =>
  api.post("/users/register", body, { withCredentials: true });
export const postLoginAPI = (body) =>
  api.post("/users/login", body, { withCredentials: true });
export const getUserAPI = () => api.get("/users/me", { withCredentials: true });
export const postCampaignAPI = (body) =>
  api.post("/campaign/create", { withCredentials: true });
export const getCampaignAPI = () =>
  api.get("/campaign/", { withCredentials: true });
export const getCampaignDetailsAPI = (id) =>
  api.get(`/campaigns/${id}`, { withCredentials: true });
