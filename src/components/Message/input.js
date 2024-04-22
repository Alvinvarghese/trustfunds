import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { postMessageAPI } from "@/axios";

const Text = (props) => {
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().getTime();
    try {
      if (message.length === 0) throw new Error("Message cannot be empty.");
      const newData = {
        name: props.name,
        date: timestamp,
        message,
      };
      const res = await postMessageAPI(props.slug, newData);
      if (res.status === 200) {
        toastSuccess("Message sent successful!");
      }
    } catch (error) {
      console.error(error);
      let defaultError = "Message sending failed. Please try again later";
    }
  };
  return (
    <div className="h-full w-full p-2 lg:gap-1">
      <div className="mb-3 flex flex-row justify-between">
        {props.name && (
          <div className="ml-auto text-md">
            <h2 className="font-medium">{props.name}</h2>
          </div>
        )}
      </div>
      <Textarea
        type="text"
        placeholder="Enter your message here."
        className="placeholder ml-auto h-full max-h-[50vh] w-5/6 rounded-xl bg-secondary text-start text-white"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex flex-col items-end">
        <Button
          onClick={handleSubmit}
          className="mt-3 flex flex-row gap-3 rounded-xl px-10 py-6 text-lg lg:mt-6"
          type="submit"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Text;
