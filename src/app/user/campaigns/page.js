import ExploreCampaigns from "@/components/Campaigns/ExploreCampaigns";
import UserCampaignsList from "@/components/Campaigns/UserCampaignsList";
import PaddingLayout from "@/components/Layout/PaddingLayout";

const Page = () => {
  return (
    <PaddingLayout>
      <UserCampaignsList />
      <ExploreCampaigns />
    </PaddingLayout>
  );
};

export default Page;
