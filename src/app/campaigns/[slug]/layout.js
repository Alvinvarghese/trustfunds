import { CampaignDetailProvider } from "@/context/CampaignContext";

const Layout = (props) => {
  return (
    <CampaignDetailProvider>
      <>{props.children}</>
    </CampaignDetailProvider>
  );
};

export default Layout;
