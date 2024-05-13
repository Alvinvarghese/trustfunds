import Link from "next/link";

const EachTransaction = (props) => {
  const date = new Date(props.data.timestamp).toString().split(" ");
  const timestamp = date.map((e, index) => {
    if (index > 4) return "";
    if ([0, 3].includes(index)) return `${e}, `;
    else return `${e} `;
  });
  return (
    <div className="my-1 flex w-full flex-col lg:items-center justify-start rounded-md border border-primary p-2 lg:flex-row gap-4 lg:gap-0">
      <div className="lg:w-[40px] hidden lg:flex px-3 font-medium">{props.index}</div>
      <div className="lg:w-2/3 font-medium text-blue-700 underline hyphens-auto break-words text-wrap text-sm">
        <Link
          href={`https://sepolia.etherscan.io/tx/${props.data.transactionHash}`}
          target="_blank"
        >
          {props.data.transactionHash}
        </Link>
      </div>
      <div className="lg:w-1/6 text-sm">
        <span className="w-fit rounded-md bg-slate-600 px-2 py-1 text-[0.7rem] text-white">
          {props.data.action}
        </span>
      </div>
      <div className="lg:w-1/6 text-sm">{timestamp}</div>
    </div>
  );
};

export default EachTransaction;
