"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCampaignDetailContext } from "@/context/CampaignContext";
import { formatUnits } from "ethers";
import { toastError } from "@/lib/toast";
import SpinnerLoader from "@/components/common/SpinnerLoader";

const Page = () => {
  const { status, campaignData, fetchCampaignData } =
    useCampaignDetailContext();
  const [contributionAmount, setContributionAmount] = useState("");

  const fundCampaign = async (amount) => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // getting accounts linked
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (!accounts[0]) throw new Error("No metamask account found!");
        console.log(accounts);
        const params = [
          {
            to: "0x3f9d67b4D5efd02C0e3a4Dd44E915489d8399514",
            from: accounts[0],
            value: amount.toString(),
          },
        ];
        console.log(params);
        // Send the transaction
        let result = await window.ethereum.request({
          method: "eth_sendTransaction",
          params,
        });

        console.log(result);
      } catch (error) {
        console.error("User denied account access:", error);
        toastError(error.message || "User denied account access.");
      }
    } else {
      toastError("MetaMask is not installed");
    }
  };

  const handleContribute = async () => {
    try {
      let amount = parseFloat(contributionAmount);
      if (amount && typeof amount === "number") {
        await fundCampaign(contributionAmount);
        setContributionAmount("");
      } else toastError("Enter a valid donating amount.");
    } catch (error) {
      console.error("Error funding campaign:", error);
    }
  };

  return (
    <>
      <h1 className="pt-4 text-center text-xl font-semibold underline lg:pt-10 lg:text-3xl">
        Fund this campaign!
      </h1>
      <div className="m-6 flex h-screen flex-col gap-4 lg:gap-2 lg:p-10">
        {status === "loading" && <SpinnerLoader />}
        {status === "error" && <p>Error fetching campaign data</p>}
        {status === "success" && campaignData && (
          <>
            <h2 className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <span className="text-sm font-semibold lg:text-lg">
                Creator address:
              </span>
              <span>{campaignData.creator}</span>
            </h2>
            <p className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <span className="text-sm font-semibold lg:text-lg">
                Target Amount:
              </span>
              <span>{campaignData.goal}</span>
            </p>
            <p className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <span className="text-sm font-semibold lg:text-lg">
                Deadline:
              </span>
              <span>{campaignData.endDate}</span>
            </p>
            <p className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <span className="text-sm font-semibold lg:text-lg">
                Total Raised:
              </span>
              <span>{campaignData.totalRaised}</span>
            </p>
            <p className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <span className="text-sm font-semibold lg:text-lg">
                Completion Status:
              </span>
              <span>{campaignData.completed ? "Complete" : "Incomplete"}</span>
            </p>

            <div className="my-3 flex flex-col gap-1 lg:gap-2">
              <Input
                type="number"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(e.target.value)}
                placeholder="Enter amount to contribute"
                className="lg:w-[300px]"
              />
              <span className="text-sm">
                {contributionAmount.length > 0 ? contributionAmount : 0} wei ={" "}
                {contributionAmount
                  ? formatUnits(contributionAmount, "ether")
                  : "0"}{" "}
                ETH
              </span>
              <Button onClick={handleContribute} className="w-fit">
                Fund this campaign
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
