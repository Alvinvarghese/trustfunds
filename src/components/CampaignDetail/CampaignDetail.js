"use client";

import { useEffect } from "react";
import Details from "./components/Details";
import Error from "../common/Error";
import SpinnerLoader from "../common/SpinnerLoader";
import { useCampaignDetailContext } from "@/context/CampaignContext";

const CampaignDetail = (props) => {
  const { setSlug, status, campaignData, fetchCampaignData } = useCampaignDetailContext();

  useEffect(() => {
    setSlug(props.id);
  }, [props.id]);

  return (
    <>
      {status === "loading" && <SpinnerLoader />}
      {status === "error" && <Error retry={fetchCampaignData} />}
      {status === "success" && campaignData && <Details data={campaignData} />}
    </>
  );
};

export default CampaignDetail;
