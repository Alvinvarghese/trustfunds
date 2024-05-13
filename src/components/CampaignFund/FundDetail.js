"use client";

import { useState, useCallback, useEffect } from "react";
import { useCampaignDetailContext } from "@/context/CampaignContext";
import { getCampaignBlockchainDetailsAPI } from "@/axios";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import formatTimestamp from "@/lib/formatTimestamp";
import { toastError } from "@/lib/toast";
import { useRouter } from "next/navigation";
import IconButton from "../common/IconButton";
import { ArrowLeft, RefreshIcon } from "../Icons";

function weiToEth(weiAmount, decimal, exp) {
  if (typeof weiAmount !== "string") weiAmount = weiAmount.toString();
  const ethAmount =
    parseFloat(weiAmount) / parseFloat(Math.pow(10, exp));
  if (decimal) return ethAmount.toFixed(decimal);
  return ethAmount;
}

const FundDetail = () => {
  const { campaignData } = useCampaignDetailContext();
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);
  const router = useRouter();
  const goBack = () => router.back();

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
        let temp = res.data.result;
        const goal = weiToEth(temp.targetAmount, 4, 36);
        const balance = weiToEth(temp.totalRaised, 10, 18).toString();
        setData({ ...temp, targetAmount: goal, totalRaised: balance });
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
      <div className="mb-4 flex flex-col items-center justify-start gap-2 lg:flex-row">
        <IconButton onClick={goBack} text="Back" Icon={ArrowLeft} />
        <IconButton onClick={fetchData} text="Refresh" Icon={RefreshIcon} />
      </div>

      {status === "loading" && <SpinnerLoader />}
      {status === "error" && <></>}
      {status === "success" && data && (
        <>
        {console.log(data)}
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
            <p>{data.totalRaised} eth</p>
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
        </>
      )}
    </>
  );
};

export default FundDetail;
