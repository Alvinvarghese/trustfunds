import { Button } from "@/components/ui/button";

const Error = (props) => {
  return (
    <div className="flex flex-row items-center gap-2 px-3">
      <h2>Error while fetching campaign details. Retry?</h2>
      <Button className="rounded-2xl bg-darkgray" onClick={props.fetchData}>
        Retry
      </Button>
    </div>
  );
};

export default Error;
