import Profile from "@/components/UserPages/Profile";

const Page = () => {
  return (
    <div className="flex h-screen flex-col px-10">
      <h1 className="text-darkgray mt-8 w-full text-center text-2xl font-bold lg:text-4xl">
        Edit Profile
      </h1>
      <Profile />
    </div>
  );
};

export default Page;
