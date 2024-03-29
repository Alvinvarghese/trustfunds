import { getUserAPI } from "@/axios";

export const getUserData = async () => {
  try {
    const res = await getUserAPI();
    if (res.status === 200) return res.response?.data?.data;
    else return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};
