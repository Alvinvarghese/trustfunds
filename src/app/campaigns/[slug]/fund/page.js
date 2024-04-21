"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCampaignDetailContext } from "@/context/CampaignContext";

const Page = () => {
  const { status, campaignData, fetchCampaignData } =
    useCampaignDetailContext();
  const [contributionAmount, setContributionAmount] = useState("");

  const fundCampaign = async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Funded ${amount} ETH to the campaign.`);
  };

  const handleContribute = async () => {
    try {
      await fundCampaign(contributionAmount);
      fetchCampaignData();
      setContributionAmount("");
    } catch (error) {
      console.error("Error funding campaign:", error);
    }
  };

  return (
    <>
      <h1 className="pt-4 text-center text-xl font-semibold underline lg:pt-10 lg:text-3xl">
        Campaign Funds!
      </h1>
      <div className="m-6 flex h-screen flex-col gap-4 lg:gap-6 lg:p-10">
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>Error fetching campaign data</p>}
        {status === "success" && campaignData && (
          <>
            <h2 className="flex flex-col items-center justify-start gap-2 lg:flex-row">
              <span className="text-sm font-semibold lg:text-lg">
                Recipient:
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

            <div className="flex flex-col gap-1 lg:flex-row lg:gap-5">
              <Input
                type="number"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(e.target.value)}
                placeholder="Enter amount to contribute"
                className="lg:w-[300px]"
              />
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
