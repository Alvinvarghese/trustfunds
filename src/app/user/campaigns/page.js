import ExploreCampaigns from "@/components/CampaignsList/ExploreCampaigns";
import UserCampaignsList from "@/components/CampaignsList/UserCampaignsList";
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
