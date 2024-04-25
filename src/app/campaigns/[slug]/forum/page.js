"use client";

import { getMessagesAPI } from "@/axios";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import Text from "@/components/Message/input";
import Message from "@/components/Message/message";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/UserContext";
import { toastError } from "@/lib/toast";
import { useCallback, useEffect, useState } from "react";

const Page = (props) => {
  const { signedIn } = useUserContext();
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("loading");
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const fetchData = useCallback(async () => {
    try {
      if (!props.params.slug)
        return toastError("No campaign recognized. Try again later.");
      setStatus("loading");
      const res = await getMessagesAPI(props.params.slug);
      if (res.data.success) {
        setStatus("success");
        setMessages(res.data.result);
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PaddingLayout className="overflow-y-hidden">
      <div className="flex h-screen w-full flex-col gap-6">
        <div className="flex flex-col lg:flex-row h-full pb-28 w-full">
          <div className="min-h-[200px] overflow-y-scroll h-full w-2/3">
            <Button className="lg:mx-4" onClick={fetchData} variant="outline">
              Refresh
            </Button>
            {status === "loading" && <SpinnerLoader className="pb-0 h-[300px]"/>}
            {status === "success" && messages.length === 0 && (
              <div className="m-6">No chat found for this campaign.</div>
            )}
            {status === "success" &&
              messages.length > 0 &&
              messages.map((msg, index) => <Message key={index} data={msg} />)}
            {status === "error" && (
              <div className="m-6">Error fetching messages</div>
            )}
          </div>
          <div className="flex h-full w-1/3 flex-col items-center">
            {signedIn.data && (
              <Text
                slug={props.params.slug}
                addMessage={addMessage}
                name={signedIn.data.name}
              />
            )}
          </div>
        </div>
      </div>
    </PaddingLayout>
  );
};

export default Page;
