"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { formatEther } from "ethers";
import { toastError, toastSuccess } from "@/lib/toast";
import { postMetamaskAPI } from "@/axios";

export default function LinkMetamask(props) {
  const [data, setData] = useState(null);
  const getBalance = async (account) => {
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [String(account), "latest"],
      });
      console.log(account);
      if (!balance) throw new Error("Could not fetch the balance.");
      setData({
        address: account,
        balance: formatEther(balance) + " ETH",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLink = async () => {
    try {
      if (!window.ethereum)
        throw new Error(
          "Metamask cannot be found. Please try again after installing it."
        );
      // getting accounts linked
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (!accounts[0]) throw new Error("No metamask account found!");
      // saving account details to user
      const response = await registerMetamaskAccount(accounts[0]);
      console.log(response);
      if (!response) throw new Error("Could not save metamask details.");
      // getting balance in the account
      await getBalance(accounts[0]);
    } catch (error) {
      console.error(error);
      toastError(error.message);
    }
  };

  const registerMetamaskAccount = async (paramAddress) => {
    try {
      console.log(paramAddress);
      if (!data?.address && !paramAddress) {
        toastError(
          "The metamask account is not connected yet. Click on link to link your metamask account with the application."
        );
        return null;
      }
      const res = await postMetamaskAPI({
        metamaskAddress: paramAddress || data?.address,
      });
      console.log(res);
      if (res.status === 200) return res.data?.result;
      else return null;
    } catch (err) {
      console.log(err);
      toastError(err.response?.data?.error || err.message);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (props.account && !data) await getBalance(props.account); // on load, already linked metamask
      toastSuccess(
        "The metamask account already used is synced with the application."
      );
    };

    fetchData();
  }, []);

  return (
    <div className="py-4">
      <h1 className="text-darkgray mt-8 w-full pt-3 text-base font-bold lg:text-2xl">
        Link your metamask wallet here:
      </h1>
      {data ? (
        <div className="md:text-md my-2 space-y-2 text-sm">
          <p>
            <span className="font-medium underline">Address:</span> {data.address}
          </p>
          <p>
            <span className="font-medium underline">Balance:</span> {data.balance}
          </p>
        </div>
      ) : (
        <Button variant="outline" className="my-2" onClick={handleLink}>
          Click to link
        </Button>
      )}
    </div>
  );
}
