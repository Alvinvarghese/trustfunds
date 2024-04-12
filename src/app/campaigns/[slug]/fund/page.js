"use client";

import { useCampaignDetailContext } from "@/context/CampaignContext";

const Page = () => {
  const { status, campaignData } = useCampaignDetailContext();
  return (
    <div className="m-6 flex h-screen flex-col gap-6">
      <h1 className="text-center text-3xl font-semibold">Campaign Funds!</h1>
    </div>
  );
};

export default Page;
