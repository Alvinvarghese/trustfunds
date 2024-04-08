"use client";

import { useCallback, useEffect, useState } from "react";
import { getCampaignDetailsAPI } from "@/axios";
import { toastError } from "@/lib/toast";
import Loading from "./components/Loading";
import Details from "./components/Details";
import Error from "./components/Error";
import PaddingLayout from "../Layout/PaddingLayout";

const CampaignDetail = (props) => {
  // loading | success | error
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await getCampaignDetailsAPI(props.id);
      if (res.status === 200) {
        setData(res.data.result);
        console.log(res.data.result)
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

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <Error fetchData={fetchData} />}
      {status === "success" && data && <Details data={data} />}
    </>
  );
};

export default CampaignDetail;
