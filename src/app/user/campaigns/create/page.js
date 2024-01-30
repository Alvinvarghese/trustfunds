import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen flex-col items-center px-10">
      <h1 className=" mt-4 text-4xl font-bold text-darkgray">
        Start a Campaign
      </h1>
      <div className="mb-6 mt-4 flex w-full">
        <div className="mr-6 w-1/2">
          <label>Your name*</label>
          <Input />
        </div>
        <div className="w-1/2">
          <label>Campaign title*</label>
          <Input />
        </div>
      </div>
      <div className="mb-6 w-full">
        <label>Story*</label>
        <Input className="h-40" />
      </div>
      <div className="mb-6 flex w-full">
        <div className="mr-6 w-1/2 ">
          <label>Goal*</label>
          <Input />
        </div>
        <div className="w-1/2">
          <label>End date*</label>
          <Input />
        </div>
      </div>
      <div className="mb-6 w-full">
        <label>Campaign image*</label>
        <Input />
      </div>
      <Button className="text-lg">Create Campaign</Button>
    </div>
  );
};

export default Page;
