import Profile from "@/components/UserPages/Profile";

const Page = () => {
  return (
    <div className="flex h-screen flex-col px-10">
      <h1 className="mt-8 w-full text-center text-2xl font-bold text-darkgray lg:text-4xl">
        Edit Profile
      </h1>
      <Profile />
    </div>
  );
};

export default Page;
