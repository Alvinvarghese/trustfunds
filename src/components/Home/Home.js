import Dashboard from "./Dashboard";
import ExploreCampaigns from "./ExploreCampaigns";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <div className="max-w-screen custom_scroll h-screen overflow-y-auto bg-home-bg lg:pl-12 lg:pr-24">
      <LandingPage />
      <Dashboard />
      <ExploreCampaigns />
    </div>
  );
};

export default Home;
