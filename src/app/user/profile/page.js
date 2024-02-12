import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";

const Page = () => {
  return (
    <div className="flex h-screen flex-col px-10">
      <h1 className="mt-8 w-full text-center text-2xl font-bold text-darkgray lg:text-4xl">
        Edit Profile
      </h1>

      <div className="pb-4 pt-4 lg:mr-10 lg:w-1/2">
        <label>Full name*</label>
        <Input className="rounded-2xl" type="text" placeholder="John Doe" />
      </div>

      <div className="pb-4 pt-4 lg:mr-10 lg:w-1/2">
        <label>Email*</label>
        <Input
          className="rounded-2xl"
          type="text"
          placeholder="abrahamshajan5@gmail.com"
        />
      </div>

      <h1 className="mt-8 w-full pt-3 text-base font-bold text-darkgray lg:text-2xl">
        Change Password
      </h1>

      <div className="pb-4 pt-4 lg:mr-10 lg:w-1/2">
        <label>Old Password*</label>
        <Input className="rounded-2xl" type="text" />
      </div>

      <div className="w-full flex-row pt-4 lg:mb-6 lg:flex">
        <div className="pb-4 lg:mr-10 lg:w-1/2">
          <label>New Password*</label>
          <Input className="rounded-2xl" type="text" />
        </div>
        <div className="pb-4 lg:w-1/2">
          <label>Confirm Password*</label>
          <Input className="rounded-2xl" type="text" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button className="mt-2 flex w-40 rounded-xl bg-darkgray px-10 py-6 text-lg">
          Change
        </Button>
      </div>
    </div>
  );
};

export default Page;
