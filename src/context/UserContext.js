"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { getUserData } from "./utils";
import { useRouter } from "next/navigation";
import { toastError } from "@/lib/toast";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState({
    status: false,
    data: null,
    fetched: false,
  });
  const checkSignedIn = async () => {
    const res = await getUserData();
    if (res) {
      setSignedIn({ status: true, data: res, fetched: true });
    } else {
      setSignedIn({ status: false, data: null, fetched: true });
    }
  };

  useEffect(() => {
    if (!signedIn.status) checkSignedIn();
  }, []);

  const checkout = () =>
    setSignedIn({ status: false, data: null, fetched: false });

  const router = useRouter();
  const checkIfLoggedInAndRedirect = async () => {
    const res = await getUserData();
    if (!res) {
      toastError(
        "You must be logged in to perform this operation. Please login and try again!"
      );
      router.push("/auth/login");
      return false
    }
    else return true
  };

  return (
    <UserContext.Provider
      value={{ signedIn, checkSignedIn, checkout, checkIfLoggedInAndRedirect }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
