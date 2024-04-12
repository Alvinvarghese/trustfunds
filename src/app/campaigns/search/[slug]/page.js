"use client";

import { useState, useEffect, useCallback } from "react";
import { searchCampaignsAPI } from "@/axios";
import AllCampaigns from "@/components/CampaignsList/components/AllCampaigns";
import { toastError } from "@/lib/toast";
import PageLayout from "@/components/Layout/PageLayout";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import Error from "@/components/common/Error";

const SearchResults = (props) => {
  const query = props.params.slug;
  const [status, setStatus] = useState("loading");
  const [campaigns, setCampaigns] = useState([]);

  const fetchSearchResults = useCallback(async () => {
    if (!query || query.lenght <= 1) return;
    try {
      setStatus("loading");
      const res = await searchCampaignsAPI(query);
      if (res.status === 200) {
        console.log(res);
        setCampaigns(res.data.result);
        setStatus("success");
      }
    } catch (error) {
      setStatus("error");
      toastError(
        error?.response?.data?.error ||
          "Something went wrong whle fetching campaigns. Try again later!"
      );
      console.log(error);
    }
  }, [query]);

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <PaddingLayout>
      {status === "loading" && <SpinnerLoader />}
      {status === "error" && <Error fetchData={fetchSearchResults} />}
      {status === "success" && campaigns && campaigns.length > 0 && (
        <section>
          <PageLayout>
            <h1 className="font-regular w-full text-right text-xl leading-none">
              Search Results for{" "}
              <span className="font-bold italic">"{query}"</span>
            </h1>
          </PageLayout>
          <div className="flex flex-col flex-wrap gap-4 pb-40">
            <AllCampaigns data={campaigns} />
          </div>
        </section>
      )}
      {status === "success" && campaigns && campaigns.length === 0 && (
        <p>No campaigns found for the keyword.</p>
      )}
      {status === "success" && !campaigns && (
        <Error fetchData={fetchSearchResults} />
      )}
    </PaddingLayout>
  );
};

export default SearchResults;
