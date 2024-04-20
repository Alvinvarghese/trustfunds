"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCampaignDetailContext } from "@/context/CampaignContext";
import { useState } from "react";

const Page = () => {
  const { status, campaignData, fetchCampaignData } = useCampaignDetailContext();
  const [contributionAmount, setContributionAmount] = useState("");

  const handleContribute = async () => {
    try {
      await fundCampaign(contributionAmount);
      fetchCampaignData();
      setContributionAmount("");
    } catch (error) {
      console.error("Error funding campaign:", error);
    }
  };

  const fundCampaign = async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Funded ${amount} ETH to the campaign.`);
  };


  // const sampleMilestones = [
  //   { deadline: "2024-05-01", completionPercentage: 25 },
  //   { deadline: "2024-05-15", completionPercentage: 50 },
  //   { deadline: "2024-06-01", completionPercentage: 75 },
  //   { deadline: "2024-06-15", completionPercentage: 100 },
  // ];

  return (
    <>
    <h1 className="text-center text-3xl font-semibold pt-10">Campaign Funds!</h1>
    <div className="m-6 flex h-screen flex-col gap-6 p-10">
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error fetching campaign data</p>}
      {status === "success" && campaignData && ( 
        <>
{/* 
          <h2> <span className="font-semibold text-lg">Recipient:</span>{" "}  '0x6B0edAB93F69696C66e7b1D5081eEbE33DB8f992'</h2>
          <p> <span className="font-semibold text-lg">Target Amount:</span>{"  "}  2250000000000000000</p>
          <p> <span className="font-semibold text-lg">Deadline:</span>{" "}  1714435200000</p>
          <p> <span className="font-semibold text-lg">Total Raised:</span>{" "}  campaignData.totalRaised</p>
          <p> <span className="font-semibold text-lg">Completed:</span>{" "}  No</p>
          <h3> <span className="font-semibold text-lg">Milestones:</span>{" "}</h3> 
            <ul>
            {sampleMilestones.map((milestone, index) => (
              <li key={index}>
              <div><span> Deadline: {milestone.deadline}</span> <span> Completion Percentage: {milestone.completionPercentage}%</span> </div> 
              </li>
            ))}
          </ul> */}

          <h2> <span className="font-semibold text-lg">Recipient:</span>{" "}  {campaignData.recipient}</h2>
          <p> <span className="font-semibold text-lg">Target Amount:</span>{" "}  {campaignData.targetAmount}</p>
          <p> <span className="font-semibold text-lg">Deadline:</span>{" "}  {campaignData.deadline}</p>
          <p> <span className="font-semibold text-lg">Total Raised:</span>{" "} {campaignData.totalRaised}</p>
          <p> <span className="font-semibold text-lg">Completed:</span>{" "} {campaignData.completed ? "Yes" : "No"}</p>
          <h3> <span className="font-semibold text-lg">Milestones:</span>{" "}</h3>
          <ul>
            {campaignData.milestones.map((milestone, index) => (
              <li key={index}>
                Deadline: {milestone.deadline}, Completion Percentage: {milestone.completionPercentage}%
              </li>
            ))}
          </ul>

        <div className="flex flex-row gap-10">
          <Input
            type="number"
            value={contributionAmount}
            onChange={(e) => setContributionAmount(e.target.value)}
            placeholder="Enter amount to contribute"
            className= "w-3/4"
          />
          <Button onClick={handleContribute} className="w-1/4">Fund</Button>
          </div>
        </>
       )} 
    </div>
    </>
  );
};

export default Page;
