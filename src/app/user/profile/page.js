import PaddingLayout from "@/components/Layout/PaddingLayout";
import Profile from "@/components/UserProfile/Profile";

const Page = () => {
  return (
    <PaddingLayout>
      <div className="lg:pt-16 pb-16">
        <Profile />
      </div>
    </PaddingLayout>
  );
};

export default Page;
