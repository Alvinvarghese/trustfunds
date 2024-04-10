import Card from "@/components/CampaignCard/Card";
import CardLayout from "@/components/CampaignCard/CardLayout";

const AllCampaigns = (props) => {
  const data = props.data;
  console.log(data);
  if (!data) return <></>;
  return (
    <CardLayout>
      {data.length > 0 &&
        data.map((campaign, index) => {
          return <Card data={campaign} key={index} />;
        })}
    </CardLayout>
  );
};

export default AllCampaigns;
