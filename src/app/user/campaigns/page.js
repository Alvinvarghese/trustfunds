import Dashboard from "@/components/Home/Dashboard";
import ExploreCampaigns from "@/components/Home/ExploreCampaigns";
import PaddingLayout from "@/components/Layout/PaddingLayout";

const Page = () => {
  return (
    <PaddingLayout>
      <Dashboard />
      <ExploreCampaigns />
    </PaddingLayout>
  );
};

export default Page;
