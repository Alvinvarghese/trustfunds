import { getUserAPI } from "@/axios";

export const getUserData = async () => {
  try {
    const res = await getUserAPI();
    if (res.status === 200 && res.data.success) return res.data?.result;
    else return false;
  } catch (err) {
    return false;
  }
};
