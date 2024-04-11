"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHeading from "../Home/SectionHeading";
import Loading from "./components/Loading";
import Error from "./components/Error";
import AllCampaigns from "./components/AllCampaigns";
import { toastError } from "@/lib/toast";
import { getUserCampaignsAPI } from "@/axios";

const UserCampaignsList = () => {
  // loading | success | error
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await getUserCampaignsAPI();
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
    <div className="w-full py-10">
      <SectionHeading text="Dashboard" p="Your campaigns" />
      {status === "loading" && <Loading />}
      {status === "error" && <Error fetchData={fetchData} />}
      {status === "success" && data && <AllCampaigns data={data} />}
    </div>
  );
};

export default UserCampaignsList;
