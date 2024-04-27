"use client";

import { useState, useCallback, useEffect } from "react";
import { useCampaignDetailContext } from "@/context/CampaignContext";
import { getCampaignBlockchainDetailsAPI } from "@/axios";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import formatTimestamp from "@/lib/formatTimestamp";
import { toastError } from "@/lib/toast";
import { formatEther } from "ethers";

const FundDetail = () => {
  const { campaignData } = useCampaignDetailContext();
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setStatus("loading");
      console.log(campaignData);
      if (!campaignData || !campaignData?._id)
        throw new Error(
          "Campaign not found. Please go back and try again later."
        );
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
    <>
      {status === "loading" && <SpinnerLoader />}
      {status === "error" && (
        <p className="my-4">Error fetching campaign data</p>
      )}
      {status === "success" && data && (
        <>
          <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
            <p className="text-sm font-semibold lg:text-lg">Creator Address:</p>
            <p>{data.recipient}</p>
          </div>

          <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
            <p className="text-sm font-semibold lg:text-lg">Target Amount:</p>
            <p>{data.targetAmount} eth</p>
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

          <div className="h-2" />
        </>
      )}
    </>
  );
};

export default FundDetail;
