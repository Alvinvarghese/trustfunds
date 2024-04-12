"use client";

import AdminCampaign from "@/components/AdminCampaign/AdminCampaign";
import PublicBanner from "@/components/AdminCampaign/components/PublicBanner";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import PageLayout from "@/components/Layout/PageLayout";

const Page = (props) => {
  const id = props.params.slug;
  return (
    <PaddingLayout>
      <div className="flex flex-col pb-[100px]">
        <PageLayout />
        <PublicBanner link={`/campaigns/${id}`} />
        {id && <AdminCampaign id={id} />}
      </div>
    </PaddingLayout>
  );
};

export default Page;
