"use client";
import { getCausesAPI } from "@/axios";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { toastError, toastSuccess } from "@/lib/toast";
import uploadImage from "@/lib/uploadImage";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [selectedCause, setSelectedCause] = useState("");
  const handleCause = (cause) => {
    setSelectedCause(cause);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCausesAPI();
        if (res.status === 200) setData(res.data.result);
        else toastError("Campaign causes could not be loaded!");
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const [campaignName, setCampaignName] = useState("");
  const [campaignTitle, setCampaignTitle] = useState("");
  const [story, setStory] = useState("");
  const [goal, setGoal] = useState(0);
  const [campaignCause, setCampaignCause] = useState("");
  const [campaignImage, setCampaignImage] = useState(null);
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async () => {
    try {
      const url = new URL(uploadImage(campaignImage, campaignImage.name));

      if (campaignName.length === 0)
        throw new Error("Campaign name cannot be empty.");
      if (campaignTitle.length === 0)
        throw new Error("Campaign title cannot be empty.");
      if (story.length === 0) throw new Error("Story cannot be empty.");
      if (goal.length === 0) throw new Error("Goal cannot be empty.");
      if (campaignCause.length === 0)
        throw new Error("Campaign cause cannot be empty.");
      if (campaignImage.length === 0)
        throw new Error("Campaign image cannot be empty.");
      if (endDate.length === 0) throw new Error("End date cannot be empty.");

      const storyArr = story
        .split("\n")
        .filter((eachStory) => eachStory !== "");

      const currDate = new Date();
      const oneWeek = new Date(currDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      if (endDate.getTime() <= oneWeek.getTime())
        throw new Error("End date must be at least one week from today.");

      const data = {
        campaignName,
        campaignTitle,
        storyArr,
        goal,
        campaignCause,
        url,
        endDate,
      };

      const res = await axios.post("/campaign/create", data);

      if (res.status === 200) {
        toastSuccess("Campaign creation successful!");
        // router.push(/)
      }
    } catch (error) {
      console.error("Campaign creation failed", error);
      let defaultError = "Campaign creation failed. Please try again later.";
      toastError(error.response?.data?.error || error.message || defaultError);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center px-10">
      <h1 className=" mt-8 text-2xl font-bold text-darkgray lg:text-4xl">
        Start a Campaign
      </h1>
      <div className="w-full flex-row pt-4 lg:mb-6 lg:flex">
        <div className="pb-4 lg:mr-10 lg:w-1/2">
          <label>Your name*</label>
          <Input
            className="rounded-2xl"
            type="text"
            placeholder="John Doe"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>
        <div className="pb-4 lg:w-1/2">
          <label>Campaign title*</label>
          <Input
            className="rounded-2xl"
            type="text"
            placeholder="Write a title"
            value={campaignTitle}
            onChange={(e) => setCampaignTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full pb-4 lg:mb-6">
        <label>Story*</label>
        <Input
          className="placeholder h-32 rounded-2xl text-start"
          type="text"
          placeholder="Write your story"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
      </div>
      <div className="flex w-full pb-4 lg:mb-6">
        <div className="mr-10 w-1/2 ">
          <label>Goal*</label>
          <Input
            className="rounded-2xl"
            type="text"
            placeholder="ETH 0.50"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>
        <div className=" w-1/2">
          <label>Campaign cause*</label>
          <div className="flex h-10 rounded-2xl border border-black">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="w-full rounded-2xl pl-3 text-start"
                style={{ fontWeight: selectedCause === "" ? 100 : 400 }}
              >
                {selectedCause || "Select a cause"}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {data &&
                  data.length > 0 &&
                  data.map((element) => {
                    return (
                      <DropdownMenuItem
                        key={element}
                        onClick={() => handleCause(element)}
                      >
                        {element}
                      </DropdownMenuItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
            value={campaignImage}
            onChange={(e) => setCampaignImage(e.target.value)}
          />
          <p className="pl-2 text-sm text-gray-400">
            Choose an image for your campaign
          </p>
        </div>
        <div className="w-1/2">
          <label>End date*</label>
          <Input
            type="date"
            className="rounded-2xl"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <Button
        className="mt-2 flex flex-row gap-2 rounded-xl bg-darkgray px-10 py-6 text-lg"
        onClick={handleSubmit}
      >
        <PlusCircle size={20} /> <span>Create Campaign</span>
      </Button>
    </div>
  );
};

export default Page;
