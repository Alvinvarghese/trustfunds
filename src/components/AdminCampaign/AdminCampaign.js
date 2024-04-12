import { useCallback, useEffect, useState } from "react";
import Error from "../common/Error";
import SpinnerLoader from "../common/SpinnerLoader";
import { getCampaignDetailsAPI } from "@/axios";
import CampaignAdminDetails from "./components/CampaignAdminDetails";

export default function AdminCampaign({ id }) {
  const [status, setStatus] = useState("loading");
  const [campaignData, setCampaignData] = useState(null);

  const fetchData = useCallback(
    async (campaignId) => {
      try {
        const res = await getCampaignDetailsAPI(campaignId);
        if (res.status === 200) {
          setCampaignData(res.data.result);
          console.log(res.data.result);
          setStatus("success");
        }
      } catch (error) {
        setStatus("error");
        toastError(
          error.response?.data?.error || error.message || defaultError
        );
      }
    },
    [id]
  );

  // on dom loaded
  useEffect(() => {
    fetchData(id);
  }, []);
  return (
    <>
      {status === "loading" && <SpinnerLoader />}
      {status === "error" && <Error retry={fetchData} />}
      {status === "success" && campaignData && (
        <CampaignAdminDetails data={campaignData} />
      )}
    </>
  );
}
