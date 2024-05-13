"use client"

import { toastError } from "@/lib/toast";
import { ThumbsUp } from "../Icons";
import IconButton from "../common/IconButton";

const FundVoting = () => {
  const onVote = async () => {
    try {
      // const res = await 
    } catch (err) {
      console.log(err);
      toastError(err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      FundVoting
      <div>
        <IconButton Icon={ThumbsUp} text="Vote" onClick={onVote} />
      </div>
    </div>
  );
};

export default FundVoting;
