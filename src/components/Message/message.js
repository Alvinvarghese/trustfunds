import React from "react";

const Message = () => {
  return (
    <div className="m-3 flex flex-col rounded-2xl border border-black  p-2 text-sm leading-tight">
      <h2 className="font-medium">Alvin varghese</h2>
      <p>
        This contract provides a foundation for a crowdfunding platform with
        campaign creation, contribution, refunding, milestone.
      </p>
      <p className="pr-2 text-end text-xs text-slate-600">11:11 am</p>
    </div>
  );
};

export default Message;
