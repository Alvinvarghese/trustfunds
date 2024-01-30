import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen flex-col items-center px-10">
      <h1 className=" mt-6 text-4xl font-bold text-darkgray">
        Start a Campaign
      </h1>
      <div className="mb-6 flex w-full pt-8">
        <div className="mr-10 w-1/2">
          <label>Your name*</label>
          <Input className="rounded-2xl" type="text" placeholder="John Doe" />
        </div>
        <div className="w-1/2">
          <label>Campaign title*</label>
          <Input
            className="rounded-2xl"
            type="text"
            placeholder="Write a title"
          />
        </div>
      </div>
      <div className="mb-6 w-full">
        <label>Story*</label>
        <Input
          className="h-32 rounded-2xl align-top"
          type="text"
          placeholder="Write your story"
        />
      </div>
      <div className="mb-6 flex w-full">
        <div className="mr-10 w-1/2 ">
          <label>Goal*</label>
          <Input className="rounded-2xl" type="text" placeholder="ETH 0.50" />
        </div>
        <div className="w-1/2">
          <label>End date*</label>
          <Input className="rounded-2xl" type="date" />
        </div>
      </div>
      <div className="mb-6 w-full">
        <label>Campaign image*</label>
        <Input
          className="rounded-2xl"
          type="text"
          placeholder="Place image url of your campaign"
        />
      </div>
      <Button className="rounded-xl bg-darkgray text-lg">
        Create Campaign
      </Button>
    </div>
  );
};

export default Page;
