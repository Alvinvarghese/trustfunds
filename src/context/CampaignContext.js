"use client";

import { getCampaignDetailsAPI } from "@/axios";
import { toastError } from "@/lib/toast";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

export const CampaignDetailContext = createContext();

export const CampaignDetailProvider = ({ children }) => {
  const router = useRouter();
  // loading | success | error
  const [status, setStatus] = useState("loading");
  const [campaignData, setCampaignData] = useState(null);
  const [slug, setSlug] = useState(null);

  const fetchData = useCallback(
    async (id) => {
      try {
        const res = await getCampaignDetailsAPI(id);
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
    [slug]
  );

  // on dom loaded
  useEffect(() => {
    if (slug) fetchData(slug);
  }, [slug]);

  // on refreshing & if slug and campaignData are not present
  useEffect(() => {
    if (!slug && !campaignData) {
      if (typeof window !== "undefined") {
        let arr = window.location.href.split("/");
        let index = arr.findIndex((e) => e === "campaigns") + 1;
        setSlug(arr[index]);
      }
    }
  }, []);

  return (
    <CampaignDetailContext.Provider
      value={{
        status,
        campaignData,
        fetchCampaignData: fetchData,
        setSlug,
      }}
    >
      {children}
    </CampaignDetailContext.Provider>
  );
};

export const useCampaignDetailContext = () => useContext(CampaignDetailContext);
