"use client";

import { useEffect } from "react";
import Details from "./components/Details";
import Error from "../common/Error";
import SpinnerLoader from "../common/SpinnerLoader";
import { useCampaignDetailContext } from "@/context/CampaignContext";

const CampaignDetail = (props) => {
  const { setSlug, status, campaignData } = useCampaignDetailContext();

  useEffect(() => {
    setSlug(props.id);
  }, [props.id]);

  return (
    <>
      {status === "loading" && <SpinnerLoader />}
      {status === "error" && <Error retry={fetchData} />}
      {status === "success" && campaignData && <Details data={campaignData} />}
    </>
  );
};

export default CampaignDetail;
