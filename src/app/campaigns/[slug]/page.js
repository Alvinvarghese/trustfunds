"use client";

import CampaignDetail from "@/components/CampaignDetail/CampaignDetail";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import PageLayout from "@/components/Layout/PageLayout";

const Page = (props) => {
  const id = props.params.slug;
  return (
    <PaddingLayout>
      <div className="flex flex-col pb-[100px]">
        <PageLayout />
        {id && <CampaignDetail id={id} />}
      </div>
    </PaddingLayout>
  );
};

export default Page;
