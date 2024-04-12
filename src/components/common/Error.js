import { Button } from "@/components/ui/button";

const Error = (props) => {
  return (
    <div className="flex flex-row items-center gap-2 px-3">
      <h2>Error while fetching campaign details.</h2>
      <div
        className="text-darkgray cursor-pointer rounded-2xl bg-transparent underline"
        onClick={props.retry}
      >
        Retry
      </div>
    </div>
  );
};

export default Error;
