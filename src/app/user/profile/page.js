import PaddingLayout from "@/components/Layout/PaddingLayout";
import Profile from "@/components/UserPages/Profile";

const Page = () => {
  return (
    <PaddingLayout>
      <div>
        <h1 className="w-full text-center text-2xl font-bold lg:text-4xl">
          My Profile
        </h1>
        <Profile />
      </div>
    </PaddingLayout>
  );
};

export default Page;
