import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen flex-col items-center px-10">
      <h1 className=" mt-8 text-2xl font-bold text-darkgray lg:text-4xl">
        Start a Campaign
      </h1>
      <div className="w-full flex-row pt-4 lg:mb-6 lg:flex">
        <div className="pb-4 lg:mr-10 lg:w-1/2">
          <label>Your name*</label>
          <Input className="rounded-2xl" type="text" placeholder="John Doe" />
        </div>
        <div className="pb-4 lg:w-1/2">
          <label>Campaign title*</label>
          <Input
            className="rounded-2xl"
            type="text"
            placeholder="Write a title"
          />
        </div>
      </div>
      <div className="w-full pb-4 lg:mb-6">
        <label>Story*</label>
        <Input
          className="text-top h-32 rounded-2xl"
          type="text"
          placeholder="Write your story"
        />
      </div>
      <div className="flex w-full pb-4 lg:mb-6">
        <div className="mr-10 w-1/2 ">
          <label>Goal*</label>
          <Input className="rounded-2xl" type="text" placeholder="ETH 0.50" />
        </div>
        <div className="w-1/2">
          <label>End date*</label>
          <Input className="rounded-2xl" type="date" />
        </div>
      </div>
      <div className="flex w-full flex-row lg:mb-6">
        <div className="mr-10 w-1/2">
          <label>Campaign image*</label>
          <Input
            className="rounded-2xl"
            type="file"
            accept="image/*"
            placeholder="Place image url of your campaign"
          />
          <p className="pl-2 text-sm text-gray-400">
            Choose an image for your campaign
          </p>
        </div>
        <div className=" w-1/2">
          <label>Campaign cause*</label>
          <div>
            <Input
              className="rounded-2xl"
              type="text"
              placeholder="Select a cause"
            />
          </div>
        </div>
      </div>
      <Button className="mt-2 flex flex-row gap-2 rounded-xl bg-darkgray px-10 py-6 text-lg">
        <PlusCircle size={20} /> <span>Create Campaign</span>
      </Button>
    </div>
  );
};

export default Page;
