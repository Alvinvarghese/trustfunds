import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { postMessageAPI } from "@/axios";
import SpinnerLoader from "../common/SpinnerLoader";
import { toastError, toastSuccess } from "@/lib/toast";
import IconButton from "../common/IconButton";
import { SendHorizontalIcon } from "../Icons";

const Text = (props) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().getTime();
    try {
      setLoading(true);
      if (message.length === 0) throw new Error("Chat cannot be empty.");
      const newData = {
        name: props.name,
        date: timestamp,
        message,
      };
      const res = await postMessageAPI(props.slug, newData);
      if (res.status === 200) {
        toastSuccess("Chat sent successfully to forum!");
        setMessage("");
        props?.addMessage(newData);
      }
    } catch (error) {
      console.error(error);
      let defaultError = "Failed adding to chat forum. Please try again later";
      toastError(error.message || defaultError);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-full w-full pl-8 lg:gap-1">
      <div className="mb-3 flex flex-row justify-between">
        {props.name && (
          <div className="text-md ml-auto">
            <h2 className="font-medium">{props.name}</h2>
          </div>
        )}
      </div>
      <Textarea
        type="text"
        placeholder="Enter your opinion / views / concerns about the campaign here. Keep it to the context."
        className="ml-auto h-full max-h-[25vh] w-full rounded-xl border-secondary-foreground bg-primary text-start text-white placeholder-white"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex flex-col items-end">
        <IconButton
          className="mt-4 flex-row-reverse gap-4"
          onClick={handleSubmit}
          text={!loading ? "Send Message" : ""}
          Icon={!loading ? SendHorizontalIcon : null}
          type="submit"
        >
          {loading ? <SpinnerLoader className="h-fit pb-0" /> : <></>}
        </IconButton>
      </div>
    </div>
  );
};

export default Text;
