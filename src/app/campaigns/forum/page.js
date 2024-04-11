"use client";
import Text from "@/components/Message/input";
import Message from "@/components/Message/message";
import React from "react";

const Page = () => {
  return (
    <div className="m-6 flex h-screen flex-col gap-6">
      <h1 className="text-center text-3xl font-semibold">
        Welcome To TrustFunds Community Forum!
      </h1>
      <div className="flex flex-row">
        <div className="w-1/2">
          <Message />
          <Message />
          <Message />
        </div>
        <div className="flex h-full w-1/2 flex-col items-center ">
          <Text />
        </div>
      </div>
    </div>
  );
};

export default Page;
