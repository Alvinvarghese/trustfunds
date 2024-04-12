import Card from "./Card";
import CardLayout from "./CardLayout";

const AllCampaigns = (props) => {
  const data = props.data;
  console.log(data);
  if (!data) return <></>;
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
