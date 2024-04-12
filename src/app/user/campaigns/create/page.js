"use client";

import CampaignCreate from "@/components/CampaignCreate/CampaignCreate";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import PageLayout from "@/components/Layout/PageLayout";

const Page = () => {
  return (
    <PaddingLayout>
      <PageLayout>
        <h1 className="w-full text-right text-xl font-bold text-secondary-foreground lg:text-3xl">
          Start a Campaign
        </h1>
      </PageLayout>
      <div className="flex flex-col items-center pb-32 pt-4">
        <CampaignCreate />
      </div>
    </PaddingLayout>
  );
};

export default Page;
