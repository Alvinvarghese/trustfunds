import { getUserAPI } from "@/axios";

export const getUserData = async () => {
  try {
    const res = await getUserAPI();
    console.log(res);
    if (res.status === 200 && res.data.success) return res.data?.result;
    else return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};
