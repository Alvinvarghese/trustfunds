import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
const Text = () => {
  return (
    <div className="h-full w-5/6 gap-3 p-2">
      <div className="mb-3 flex flex-row justify-between">
        <div>
          <h2 className="font-medium">Abraham</h2>
          <p className="text-sm">Campaign creator</p>
        </div>
        <div className="text-end text-sm">
          <p>Oct 22,2023</p>
          <p>9:00 am</p>
        </div>
      </div>
      <Textarea
        type="text"
        placeholder="Enter your message here."
        className="placeholder h-full rounded-xl border border-black bg-white text-start"
      />
      <div className="flex flex-col items-end">
        <Button className="outline-button mt-6 flex flex-row gap-3 rounded-xl px-10 py-6 text-lg">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Text;
