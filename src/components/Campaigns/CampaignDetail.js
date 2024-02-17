"use client";

import { useCallback, useEffect, useState } from "react";
import { getCampaignDetailsAPI } from "@/axios";
import { toastError } from "@/lib/toast";
import Loading from "./CampaignDetail/Loading";
import Details from "./CampaignDetail/Details";
import Error from "./CampaignDetail/Error";

const CampaignDetail = (props) => {
  // loading | success | error
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await getCampaignDetailsAPI(props.id);
      if (res.status === 200) {
        setData(res.data.result);
        setStatus("success");
      }
    } catch (error) {
      setStatus("error");
      toastError(error.response?.data?.error || error.message || defaultError);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error fetchData={fetchData} />;
  if (status === "success" && data) return <Details data={data} />;
  return <></>;
};

export default CampaignDetail;
