import formatTimestamp from "@/lib/formatTimestamp";
import React from "react";

const Message = (props) => {
  const { data } = props;
  if (data)
    return (
      <div className="m-3 mr-6 flex flex-col rounded-2xl border border-secondary-foreground px-4 py-3 text-sm leading-snug">
        <h2 className="font-bold">{data.name}</h2>
        <p className="mt-1 pl-1 opacity-85">{data.message}</p>
        <p className="pr-2 pt-2 text-end text-xs opacity-70">
          {formatTimestamp(data.date)}
        </p>
      </div>
    );
};

export default Message;
