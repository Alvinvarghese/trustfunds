import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
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
export const getLogoutAPI = () =>
  api.get("/users/logout", { withCredentials: true });
export const getUserAPI = () => api.get("/users/me", { withCredentials: true });
export const createCampaignAPI = (body) =>
  api.post("/campaigns/create", body, { withCredentials: true });
export const getUserCampaignsAPI = () =>
  api.get("/campaigns/user", { withCredentials: true });
export const getCampaignAPI = () =>
  api.get("/campaigns/", { withCredentials: true });
export const getAllCampaignsAPI = () =>
  api.get("/campaigns/all", { withCredentials: true });
export const getCampaignDetailsAPI = (id) =>
  api.get(`/campaigns/${id}`, { withCredentials: true });
export const getCampaignDetailsUserAPI = (id) =>
  api.get(`/campaigns/user/${id}`, { withCredentials: true });
export const searchCampaignsAPI = (id) =>
  api.get(`/campaigns/search?q=${id}`, { withCredentials: true });
export const postMessageAPI = (slug, body) =>
  api.post(`/campaigns/${slug}/forum`, body, { withCredentials: true });
export const getMessagesAPI = (slug) =>
  api.get(`/campaigns/${slug}/forum`, {withCredentials: true });