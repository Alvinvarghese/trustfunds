import PaddingLayout from "@/components/Layout/PaddingLayout";
import Profile from "@/components/UserProfile/Profile";

const Page = () => {
  return (
    <PaddingLayout>
      <div className="py-16">
        <Profile />
      </div>
    </PaddingLayout>
  );
};

export default Page;
