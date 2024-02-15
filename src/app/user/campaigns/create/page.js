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
          className="placeholder h-32 rounded-2xl text-start"
          type="text"
          placeholder="Write your story"
        />
      </div>
      <div className="flex w-full pb-4 lg:mb-6">
        <div className="mr-10 w-1/2 ">
          <label>Goal*</label>
          <Input className="rounded-2xl" type="text" placeholder="ETH 0.50" />
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
                      <DropdownMenuItem key={element} onClick={() => handleCause(element)}>
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
          />
          <p className="pl-2 text-sm text-gray-400">
            Choose an image for your campaign
          </p>
        </div>
        <div className="w-1/2">
          <label>End date*</label>
          <Input type="date" className="rounded-2xl" />
        </div>
      </div>
      <Button className="mt-2 flex flex-row gap-2 rounded-xl bg-darkgray px-10 py-6 text-lg">
        <PlusCircle size={20} /> <span>Create Campaign</span>
      </Button>
    </div>
  );
};

export default Page;
