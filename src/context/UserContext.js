"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { getUserData } from "./utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const checkSignedIn = async () => {
      console.log("Token check");
      const res = await getUserData();
      if (res) {
        setSignedIn(true);
        setUserData(userData);
      } else {
        setSignedIn(false);
      }
    };

    if (!signedIn) checkSignedIn();
  }, []);

  return (
    <UserContext.Provider value={{ signedIn }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
