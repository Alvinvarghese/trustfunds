import { getContractAPI } from "@/axios";

const getContractAddress = async () => {
  const res = await getContractAPI();
  if (res.data.success) return res.data.result.address;
  else
    throw new Error(
      "Could not fetch contract details. Please try again later."
    );
};

const requestAccounts = async () => {
  if (typeof window.ethereum === "undefined")
    throw new Error("MetaMask is not installed. Install it first!");
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return accounts;
};

const sendTransaction = async (contractAddress, from, amount) => {
  const result = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        to: contractAddress,
        from,
        value: amount.toString(),
      },
    ],
  });
  return result;
};

export { getContractAddress, requestAccounts, sendTransaction };
