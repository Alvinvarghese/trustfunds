"use client";

import AdminCampaign from "@/components/AdminCampaign/AdminCampaign";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import PageLayout from "@/components/Layout/PageLayout";

const Page = (props) => {
  const id = props.params.slug;
  return (
    <PaddingLayout>
      <div className="flex flex-col pb-[100px]">
        <PageLayout />
        {id && <AdminCampaign id={id} />}
      </div>
    </PaddingLayout>
  );
};

export default Page;
