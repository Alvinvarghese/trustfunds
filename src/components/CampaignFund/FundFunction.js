"use client";

import useFundCampaign from "./hooks/useFundCampaign";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SpinnerLoader from "../common/SpinnerLoader";

const FundFunction = () => {
  const { contributionAmount, setContributionAmount, handleContribute, state } =
    useFundCampaign();
  return (
    <div className="lg:my-3 flex flex-col gap-1 lg:gap-2">
      <Input
        type="number"
        value={contributionAmount}
        onChange={(e) => setContributionAmount(e.target.value)}
        placeholder="Enter amount to contribute (in eth)"
        className="lg:w-[300px]"
      />
      <Button
        onClick={handleContribute}
        className="w-fit"
        variant="outline"
        disabled={state === "loading"}
      >
        {state === "loading" ? (
          <SpinnerLoader className="h-[200px] pb-0" />
        ) : (
          "Fund this campaign"
        )}
      </Button>
    </div>
  );
};

export default FundFunction;
