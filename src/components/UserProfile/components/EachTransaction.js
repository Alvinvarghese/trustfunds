import formatTimestamp from "@/lib/formatTimestamp";
import Link from "next/link";

const EachTransaction = (props) => {
  return (
    <div className="my-1 flex w-full flex-col items-center justify-start rounded-md border border-primary p-2 lg:flex-row">
      <div className="w-[40px] px-3 font-medium">{props.index}</div>
      <div className="w-2/3 font-medium text-blue-700 underline">
        <Link
          href={`https://sepolia.etherscan.io/tx/${props.data.transactionHash}`}
          target="_blank"
        >
          {props.data.transactionHash}
        </Link>
      </div>
      <div className="w-1/6 text-sm">
        <span className="w-fit rounded-md bg-slate-600 px-2 py-1 text-[0.7rem] text-white">
          {props.data.action}
        </span>
      </div>
      <div className="w-1/6 text-sm">{formatTimestamp(props.data.timestamp)}</div>
    </div>
  );
};

export default EachTransaction;
