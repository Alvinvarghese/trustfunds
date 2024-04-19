"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { formatEther } from "ethers";
import { toastError } from "@/lib/toast";
import { postMetamaskAPI } from "@/axios";

export default function LinkMetamask(props) {
  const [data, setData] = useState(null);
  const getBalance = async (account) => {
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [String(account), "latest"],
      });
      return formatEther(balance) + " ETH";
    } catch (error) {
      throw new Error("Failed to fetch balance: " + error.message);
    }
  };

  const handleLink = async () => {
    try {
      if (!window.ethereum)
        throw new Error(
          "Metamask cannot be found. Please try again after installing it."
        );
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const response = await registerMetamaskAccount();
      const balance = await getBalance(accounts[0]);
      setData({
        address: accounts[0],
        balance: balance,
      });
    } catch (error) {
      toastError(error.message);
    }
  };

  const registerMetamaskAccount = async () => {
    try {
      if (!data.address)
        toastError(
          "The metamask account is not connect yet. Click on link to link your metamask account with the application."
        );

      const res = await postMetamaskAPI(data.address);
      console.log(res);
      if (res.status === 200) {
      }
    } catch (err) {
      console.log(err);
      toastError(err.response?.data?.error || err.message);
    }
  };

  useEffect(() => {
    if (props.account)
      setData({
        address: props.account,
        balance: null,
      });
  }, []);

  return (
    <div className="py-4">
      <h1 className="text-darkgray mt-8 w-full pt-3 text-base font-bold lg:text-2xl">
        Link your metamask wallet here:
      </h1>
      {data ? (
        <div className="my-2">
          <p>Address: {data.address}</p>
          <p>Balance: {data.balance}</p>
        </div>
      ) : (
        <Button variant="outline" className="my-2" onClick={handleLink}>
          Click to link
        </Button>
      )}
    </div>
  );
}
