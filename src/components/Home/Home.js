import PaddingLayout from "../Layout/PaddingLayout";
import ExploreCampaigns from "../Campaigns/ExploreCampaigns";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <PaddingLayout>
      <LandingPage />
      <ExploreCampaigns />
    </PaddingLayout>
  );
};

export default Home;
