import React from "react";

const Message = (props) => {
  const { data } = props;
  if (data)
    return (
      <div className="m-3 mr-6 flex flex-col rounded-2xl border border-secondary-foreground py-3 px-4 text-sm leading-tight">
        <h2 className="font-bold">{data.name}</h2>
        <p className="mt-1 pl-1">{data.message}</p>
        <p className="pr-2 text-end text-xs text-slate-600">{data.time}</p>
      </div>
    );
};

export default Message;
