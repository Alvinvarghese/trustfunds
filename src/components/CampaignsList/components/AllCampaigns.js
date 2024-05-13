import IconButton from "@/components/common/IconButton";
import Card from "./Card";
import CardLayout from "./CardLayout";
import { useRouter } from "next/navigation";
import { PlusCircle } from "@/components/Icons";

const AllCampaigns = (props) => {
  const data = props.data;
  const router = useRouter();
  const sendToCreate = () => router.push("/user/campaigns/create");
  if (!data) return <></>;
  if (data.length === 0)
    return (
      <IconButton
        className="lg:px-8 py-10"
        text="Click to create your first campaign."
        onClick={sendToCreate}
        Icon={PlusCircle}
      />
    );
  return (
    <CardLayout>
      {data.length > 0 &&
        data.map((campaign, index) => {
          return <Card data={campaign} key={index} users={props.users} />;
        })}
    </CardLayout>
  );
};

export default AllCampaigns;
