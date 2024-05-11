"use client";

import { useUserContext } from "@/context/UserContext";
import { useEffect } from "react";

const TokenCheckLayout = (props) => {
  const { checkIfLoggedInAndRedirect } = useUserContext();
  useEffect(() => {
    checkIfLoggedInAndRedirect();
  });
  return <>{props.children}</>;
};

export default TokenCheckLayout;
