import React from "react";

const Message = (props) => {
  const { data } = props;
  if (data)
    return (
      <div className="m-3 flex flex-col rounded-2xl border border-black  p-2 text-sm leading-tight">
        <h2 className="font-medium">{data.name}</h2>
        <p>{data.message}</p>
        <p className="pr-2 text-end text-xs text-slate-600">{data.time}</p>
      </div>
    );
};

export default Message;
