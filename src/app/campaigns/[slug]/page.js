"use client";

import CampaignDetail from "@/components/Campaigns/CampaignDetail";
import GoBack from "@/components/GoBack";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import GoToButton from "@/components/goToButton";

const Page = (props) => {
  const id = props.params.slug;
  return (
    <PaddingLayout>
      <div className="flex flex-col pb-[200px]">
        <div className="flex flex-row gap-5">
          <GoBack />
          <GoToButton href="/user/campaigns" text="Go To Dashboard" />
        </div>
        {id && <CampaignDetail id={id} />}
      </div>
    </PaddingLayout>
  );
};

export default Page;
