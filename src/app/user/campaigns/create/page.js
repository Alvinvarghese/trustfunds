import { Input } from "@/components/ui/input";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div>
        <label>Your name</label>
        <Input />
        <label>Campaign title</label>
        <Input />
      </div>
      <label>Story</label>
      <Input />
      <div>
        <label>Goal</label>
        <Input />
        <label>End date</label>
        <Input />
      </div>
      <label>Campaign image</label>
    </div>
  );
};

export default Page;
