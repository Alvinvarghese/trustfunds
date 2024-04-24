"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCampaignDetailContext } from "@/context/CampaignContext";
import { formatEther, formatUnits, parseEther } from "ethers";
import { toastError } from "@/lib/toast";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import { getCampaignBlockchainDetailsAPI } from "@/axios";
import formatTimestamp from "@/lib/formatTimestamp";
import PaddingLayout from "@/components/Layout/PaddingLayout";

const Page = () => {
  const { campaignData } = useCampaignDetailContext();
  const [contributionAmount, setContributionAmount] = useState("");
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);

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

  const fetchData = useCallback(async () => {
    try {
      setStatus("loading");
      console.log(campaignData);
      if (!campaignData._id) {
        return toastError("No Campaign ID found. Try again later.");
      }
      const res = await getCampaignBlockchainDetailsAPI(campaignData._id);
      console.log(res);
      if (res.data.success) {
        setData(res.data.result);
        setStatus("success");
      } else setStatus("error");
    } catch (err) {
      console.log(err);
      setStatus("error");
      toastError(err.message);
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PaddingLayout>
      <h1 className="text-center text-xl font-semibold underline lg:text-3xl">
        Fund this campaign!
      </h1>
      <div className="mb-20 mt-10 flex h-screen flex-col gap-4 lg:gap-2">
        {status === "loading" && <SpinnerLoader />}
        {status === "error" && <p>Error fetching campaign data</p>}
        {status === "success" && data && (
          <>
            <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <p className="text-sm font-semibold lg:text-lg">Recipient:</p>
              <p>{data.recipient}</p>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <p className="text-sm font-semibold lg:text-lg">Target Amount:</p>
              <p>{data.targetAmount} wei</p>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <p className="text-sm font-semibold lg:text-lg">Deadline:</p>
              <p>{formatTimestamp(data.deadline)}</p>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <p className="text-sm font-semibold lg:text-lg">Total Raised:</p>
              <p>{data.totalRaised}</p>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <p className="text-sm font-semibold lg:text-lg">Completed:</p>
              <p>{data.completed ? "Yes" : "No"}</p>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <p className="text-sm font-semibold lg:text-lg">
                Number of Contributors:
              </p>
              <p>{data.numberOfContributors}</p>
            </div>

            {data.milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col justify-start">
                <p className="text-sm font-semibold lg:text-lg">
                  Milestone {index + 1}:
                </p>
                <p>Deadline: {formatTimestamp(milestone.deadline)}</p>
                <p>Completion Percentage: {milestone.completionPercentage}%</p>
                <p>Reached: {milestone.reached ? "Yes" : "No"}</p>
              </div>
            ))}

            <div className="my-3 flex flex-col gap-1 lg:gap-2">
              <Input
                type="number"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(e.target.value)}
                placeholder="Enter amount to contribute"
                className="lg:w-[300px]"
              />
              <span className="text-sm">
                {contributionAmount.length > 0 ? contributionAmount : 0} eth ={" "}
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
    </PaddingLayout>
  );
};

export default Page;
