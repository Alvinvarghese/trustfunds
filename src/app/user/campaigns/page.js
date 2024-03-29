import ExploreCampaigns from "@/components/Campaigns/ExploreCampaigns";
import UserCampaignsList from "@/components/Campaigns/UserCampaignsList";
import Logout from "@/components/Home/Logout";
import PaddingLayout from "@/components/Layout/PaddingLayout";

const Page = () => {

  return (
    <PaddingLayout>
      <Logout />
      <UserCampaignsList />
      <ExploreCampaigns />
    </PaddingLayout>
  );
};

export default Page;
