import { useCallback, useEffect, useState } from "react";
import Error from "../common/Error";
import SpinnerLoader from "../common/SpinnerLoader";
import { getCampaignDetailsUserAPI } from "@/axios";
import CampaignAdminDetails from "./components/CampaignAdminDetails";
import { useUserContext } from "@/context/UserContext";
import { toastError } from "@/lib/toast";
import { useRouter } from "next/navigation";

export default function AdminCampaign({ id }) {
  const [status, setStatus] = useState("loading");
  const [campaignData, setCampaignData] = useState(null);
  const { signedIn } = useUserContext();
  const router = useRouter();

  const fetchData = useCallback(
    async (campaignId) => {
      try {
        const res = await getCampaignDetailsUserAPI(campaignId);
        if (res.status === 200) {
          setCampaignData(res.data.result);
          setStatus("success");
        }
      } catch (error) {
        setStatus("error");
        if (error.response?.data?.status == 403) router.push("/not-allowed");
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
      {status === "success" &&
        campaignData &&
        signedIn?.status &&
        signedIn.data._id === campaignData.creator && (
          <CampaignAdminDetails data={campaignData} />
        )}
    </>
  );
}
