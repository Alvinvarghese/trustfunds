import CampaignDetail from "@/components/Campaigns/CampaignDetail";
import { Button } from "@/components/ui/button";

const Page = (props) => {
  const id = props.params.slug;
  return (
    <div className="flex h-screen flex-col px-10">
      <div className="flex flex-row justify-start p-4">
        <div>
          <Button className="rounded-2xl bg-darkgray">Go Back</Button>
        </div>
        <div className="pl-10">
          <Button className="rounded-2xl bg-darkgray">Go To Dashboard</Button>
        </div>
      </div>
      {id && <CampaignDetail id={id} />}
    </div>
  );
};

export default Page;
