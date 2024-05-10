import { useState } from "react";
import { toastError, toastSuccess } from "@/lib/toast";
import { sendFundConfirmationAPI } from "@/axios";
import { getContractAddress, requestAccounts, sendTransaction } from "./utils";
import { parseEther } from "ethers";
import { useCampaignDetailContext } from "@/context/CampaignContext";

const useFundCampaign = () => {
  const [contributionAmount, setContributionAmount] = useState("");
  const { campaignData } = useCampaignDetailContext();

  const sendConfirmation = async (campaignId, sendersAddress, value) => {
    // sending payment successful confirmation
    const data = { sendersAddress, value };
    const res = await sendFundConfirmationAPI(campaignId, data);
    const { success, message, error } = res.data;
    if (success) toastSuccess(message);
    else throw new Error(error);
  };

  const fundCampaign = async (amount) => {
    // getting contract address
    const contractAddress = await getContractAddress();
    // getting accounts for transactions
    const accounts = await requestAccounts();
    if (accounts.length === 0 || !accounts[0])
      throw new Error("No metamask account(s) found!");
    // changing units
    let newAmount = parseEther(amount);
    console.log({ newAmount, amount });
    // initiating metamask transaction
    const result = await sendTransaction(
      contractAddress,
      accounts[0],
      newAmount
    );
    if (!result) throw new Error("The donation process was not completed.");
    toastSuccess(
      `The payment was completed successfully. Txn Hash: ${result}. Please wait for transaction confirmation.`
    );
    return { result, sendersAddress: accounts[0] };
  };

  const handleContribute = async () => {
    try {
      // checking if campaign context present
      if (!campaignData || !campaignData?._id)
        throw new Error("Chose a campaign to donate first.");
      const amount = contributionAmount.trim();
      // checking transaction amount
      if (amount === "" || !amount || isNaN(amount))
        throw new Error("Enter a valid donating amount.");
      // Step 1: Fund Campaign
      const { result, sendersAddress } = await fundCampaign(amount);
      // Step 2: Send confirmation if funded
      if (result)
        await sendConfirmation(
          campaignData._id,
          sendersAddress,
          parseFloat(amount)
        );
    } catch (err) {
      console.error("Error funding campaign:", err);
      toastError(err?.response?.data?.error || err.message);
    } finally {
      setContributionAmount("");
    }
  };

  return {
    contributionAmount,
    setContributionAmount,
    handleContribute,
  };
};

export default useFundCampaign;
