"use client";

import React, { useEffect, useState } from "react";
import { createCampaignAPI, getCausesAPI } from "@/axios";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import PageLayout from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import giveErrorMsg from "@/lib/giveErrorMsg";
import { toastError, toastSuccess } from "@/lib/toast";
import uploadImage from "@/lib/uploadImage";
import { daysLeft } from "@/lib/utils";
import { PlusCircle } from "@/components/Icons";

const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCausesAPI();
        if (res.status === 200) setData(res.data.result.causesList);
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
  const [goal, setGoal] = useState("");
  const [selectedCause, setSelectedCause] = useState("");
  const handleCause = (cause) => {
    setSelectedCause(cause);
  };
  const [campaignImage, setCampaignImage] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async () => {
    try {
      // validation
      if (!campaignImage || campaignImage.length === 0)
        throw new Error("Campaign image cannot be empty.");
      if (campaignName.length === 0)
        throw new Error("Your or company's name cannot be empty.");
      if (campaignTitle.length === 0)
        throw new Error("Campaign title cannot be empty.");
      if (story.length === 0) throw new Error("Story cannot be empty.");
      if (goal.length === 0) throw new Error("Goal cannot be empty.");
      if (selectedCause.length === 0)
        throw new Error("Campaign cause cannot be empty.");
      if (endDate.length === 0) throw new Error("End date cannot be empty.");
      const storyArr = story
        .split("\n")
        .filter((eachStory) => eachStory !== "");

      if (daysLeft(endDate.toString()) <= 7)
        throw new Error("End date must be at least one week from today.");

      // upload image
      const url = new URL(await uploadImage(campaignImage, campaignImage.name));

      // prepARE data
      const data = {
        name: campaignName,
        title: campaignTitle,
        story: storyArr,
        goal: parseFloat(goal),
        causeType: selectedCause,
        image: url,
        endDate,
      };

      const res = await createCampaignAPI(data);

      if (res.status === 200) {
        toastSuccess("Campaign creation successful!");
      }
    } catch (error) {
      console.error("Campaign creation failed", error);
      let e = giveErrorMsg(error);
      toastError(e[0], e[1]);
    }
  };

  return (
    <PaddingLayout>
      <PageLayout>
        <h1 className="text-2xl font-bold text-primary lg:text-4xl">
          Start a Campaign
        </h1>
      </PageLayout>
      <div className="flex flex-col items-center pb-32">
        <div className="w-full flex-row gap-4 lg:flex lg:gap-6">
          <div className="pb-4 lg:w-1/2">
            <label>Campaign name*</label>
            <Input
              className="rounded-2xl"
              type="text"
              placeholder="Short name for the campaign"
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
        <div className="w-full pb-4">
          <label>Story*</label>
          <Textarea
            className="placeholder h-32 rounded-2xl text-start"
            type="text"
            placeholder="Write your story"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-6 lg:my-6 lg:flex-row lg:gap-4">
          <div className="w-full lg:w-1/2">
            <label>Goal*</label>
            <Input
              className="rounded-2xl"
              type="text"
              placeholder="ETH 0.50"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label>Campaign cause*</label>
            <div className="flex h-10 rounded-2xl border border-black bg-background">
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
        <div className="my-6 flex w-full flex-col gap-6 lg:my-0 lg:flex-row lg:gap-4">
          <div className="w-full lg:w-1/2">
            <label>Campaign image*</label>
            <Input
              className="rounded-2xl"
              type="file"
              accept="image/*"
              placeholder="Place image url of your campaign"
              onChange={(e) => setCampaignImage(e.target.files[0])}
            />
            <p className="text-darkgray pl-2 text-sm">
              Choose an image for your campaign
            </p>
          </div>
          <div className="w-full lg:w-1/2">
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
          className="outline-button mt-6 flex flex-row gap-3 rounded-xl px-10 py-6 text-lg"
          onClick={handleSubmit}
        >
          <PlusCircle size={20} /> <span>Create Campaign</span>
        </Button>
      </div>
    </PaddingLayout>
  );
};

export default Page;
