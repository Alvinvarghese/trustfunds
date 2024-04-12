"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Loading from "../common/Loading";
import Error from "../common/Error";
import { getAllCampaignsAPI } from "@/axios";
import { toastError } from "@/lib/toast";
import AllCampaigns from "./components/AllCampaigns";

const ExploreCampaigns = () => {
  // loading | success | error
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await getAllCampaignsAPI();
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

  return (
    <div className="w-full py-5">
      <SectionHeading text="Explore Campaigns" />
      {status === "loading" && <Loading />}
      {status === "error" && <Error retry={fetchData} />}
      {status === "success" && data && (
        <AllCampaigns data={data} users={false} />
      )}
    </div>
  );
};

export default ExploreCampaigns;
