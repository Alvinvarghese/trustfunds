import PaddingLayout from "@/components/Layout/PaddingLayout";
import FundDetail from "@/components/CampaignFund/FundDetail";
import FundFunction from "@/components/CampaignFund/FundFunction";
import TokenCheckLayout from "@/components/Layout/TokenCheckLayout";
// import FundVoting from "@/components/CampaignFund/FundVoting";

const Page = () => {
  const Line = () => (
    <div className="py-3">
      <div className="h-[1px] w-full bg-secondary-foreground opacity-20 hover:opacity-40" />
    </div>
  );
  return (
    <TokenCheckLayout>
      <PaddingLayout>
        <h1 className="text-center text-xl font-semibold underline lg:text-3xl">
          Fund this campaign!
        </h1>
        <div className="mb-20 mt-10 flex h-screen flex-col gap-4 lg:gap-2">
          <FundDetail />
          <Line />
          <FundFunction />
        </div>
      </PaddingLayout>
    </TokenCheckLayout>
  );
};

export default Page;

{/* <FundVoting /> */}