import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Text = (props) => {
  const { data } = props;
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    e.preventDefault();
    try {
      if (message.length === 0) throw new Error("Message cannot be empty.");
      const newData = {
        name: data.name,
        message,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      const res = await postMessageAPI(newData);
      if (res.status === 200) {
        toastSuccess("Message sent successful!");
      }
    } catch (error) {
      console.error(error);
      let defaultError = "Message sending failed. Please try again later";
      let e = giveErrorMsg(error);
      toastError(e[0], e[1]);
    }
  };
  return (
    <div className="h-full w-5/6 gap-3 p-2">
      <div className="mb-3 flex flex-row justify-between">
        <div>
          <h2 className="font-medium">{data.name}</h2>
          <p className="text-sm">{data.designation}</p>
        </div>
        <div className="text-end text-sm">
          <p>{new Date().toLocaleDateString()}</p>
          <p>{new Date().toLocaleTimeString()}</p>
        </div>
      </div>
      <Textarea
        type="text"
        placeholder="Enter your message here."
        className="placeholder h-full rounded-xl border border-black bg-white text-start"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex flex-col items-end">
        <Button
          onClick={handleSubmit}
          className="mt-6 flex flex-row gap-3 rounded-xl px-10 py-6 text-lg"
          type="submit"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Text;
