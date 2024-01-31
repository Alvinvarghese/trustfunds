import Dashboard from "./Dashboard";
import ExploreCampaigns from "./ExploreCampaigns";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <div className="max-w-screen bg-home-bg custom_scroll h-screen overflow-y-auto lg:pl-12 lg:pr-24">
      <LandingPage />
      <Dashboard />
      <ExploreCampaigns />
    </div>
  );
};

export default Home;
