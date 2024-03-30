"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { getUserData } from "./utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState({ status: false, data: null });
  const checkSignedIn = async () => {
    const res = await getUserData();
    if (res) {
      setSignedIn({ status: true, data: res });
    } else {
      setSignedIn({ status: false, data: null });
    }
  };

  useEffect(() => {
    if (!signedIn.status) checkSignedIn();
  }, []);

  const checkout = () => setSignedIn({ status: false, data: null });

  return (
    <UserContext.Provider value={{ signedIn, checkSignedIn, checkout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
