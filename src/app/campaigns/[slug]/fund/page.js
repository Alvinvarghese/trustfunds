import PaddingLayout from "@/components/Layout/PaddingLayout";
import FundDetail from "@/components/CampaignFund/FundDetail";
import FundFunction from "@/components/CampaignFund/FundFunction";

const Page = () => {
  return (
    <PaddingLayout>
      <h1 className="text-center text-xl font-semibold underline lg:text-3xl">
        Fund this campaign!
      </h1>
      <div className="mb-20 mt-10 flex h-screen flex-col gap-4 lg:gap-2">
        <FundDetail />
        <div className="h-[1px] w-full bg-secondary-foreground" />
        <FundFunction />
      </div>
    </PaddingLayout>
  );
};

export default Page;
