"use client";

import { useEffect, useState } from "react";
import { getUserAPI } from "@/axios";
import { toastError } from "@/lib/toast";
import { useRouter } from "next/navigation";
import LinkMetamask from "./LinkMetamask";

const InitialsIcon = ({ name }) => {
  const initials = name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("");
  return <div className="initials-icon">{initials}</div>;
};

const EmailUsername = (props) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserAPI();
        if (res.status === 200) {
          setUsername(res.data.result.name);
          setEmail(res.data.result.email);
        }
      } catch (err) {
        if (err.response?.data?.status === 401) {
          toastError("Login first before trying to view profile details.");
          router.push("/auth/login");
        } else {
          toastError("Error fetching user details. Please try again later!");
        }
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <InitialsIcon name={username || ""} />
        <div className="py-2">
          <strong>{username}</strong>
        </div>
        <div className="py-2">{email}</div>
      </div>
      <LinkMetamask />
    </>
  );
};

export default EmailUsername;
