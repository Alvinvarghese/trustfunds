"use client";

import { getLogoutAPI } from "@/axios";
import { toastError, toastSuccess } from "@/lib/toast";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/UserContext";
import Logouticon from "./icons/LogoutIcon";

export default function Logout() {
  const router = useRouter();
  const { checkout } = useUserContext();
  const handleLogout = async () => {
    try {
      const res = await getLogoutAPI();
      console.log(res);
      if (res.status === 200) {
        toastSuccess("Successfully logged out");
        checkout();
        router.push("/auth/login");
      }
    } catch (err) {
      console.log(err);
      toastError("Something went wrong while trying to logout!");
    }
  };
  return (
    <Button className="navbar_button gap-2 px-6" onClick={handleLogout}>
      <Logouticon />
      <span>Logout</span>
    </Button>
  );
}
