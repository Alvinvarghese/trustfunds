"use client";

import useFundCampaign from "./hooks/useFundCampaign";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FundFunction = () => {
  const { contributionAmount, setContributionAmount, handleContribute } =
    useFundCampaign();
  return (
    <div className="my-3 flex flex-col gap-1 lg:gap-2">
      <Input
        type="number"
        value={contributionAmount}
        onChange={(e) => setContributionAmount(e.target.value)}
        placeholder="Enter amount to contribute"
        className="lg:w-[300px]"
      />
      <span className="text-sm">(in eth)</span>
      <Button onClick={handleContribute} className="w-fit" variant="outline">
        Fund this campaign
      </Button>
    </div>
  );
};

export default FundFunction;
