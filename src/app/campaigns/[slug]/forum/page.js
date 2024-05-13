"use client";

import { getMessagesAPI } from "@/axios";
import SignInToChat from "@/components/CampaignForum/SignInToChat";
import { ArrowLeft, RefreshIcon } from "@/components/Icons";
import PaddingLayout from "@/components/Layout/PaddingLayout";
import Text from "@/components/Message/input";
import Message from "@/components/Message/message";
import IconButton from "@/components/common/IconButton";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/UserContext";
import { toastError } from "@/lib/toast";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Page = (props) => {
  const { signedIn } = useUserContext();
  const router = useRouter();
  const goBack = () => router.back();

  const [status, setStatus] = useState("loading");
  const [messages, setMessages] = useState([]);
  const addMessage = (newMessage) => setMessages([newMessage, ...messages]);

  const fetchData = useCallback(async () => {
    try {
      if (!props.params.slug)
        throw new Error("No campaign recognized. Try again later.");
      setStatus("loading");
      const res = await getMessagesAPI(props.params.slug);
      if (res.data.success) {
        setStatus("success");
        setMessages(res.data.result);
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
      toastError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PaddingLayout className="overflow-y-hidden">
      <div className="flex h-screen w-full lg:flex-col flex-row-reverse gap-6">
        <div className="flex h-full w-full flex-col pb-28 lg:flex-row">
          <div className="h-full min-h-[320px] lg:w-2/3 overflow-y-scroll lg:border-b-0 border-b-2 border-[#ffffff33]">
            <div className="lg:mb-6 ml-3 flex flex-row items-center justify-start gap-4">
              <IconButton onClick={goBack} text="Back" Icon={ArrowLeft} />
              <IconButton
                onClick={fetchData}
                text="Refresh"
                Icon={RefreshIcon}
              />
            </div>
            {status === "loading" && (
              <SpinnerLoader className="h-[300px] pb-0" />
            )}
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
          <div className="flex h-full lg:w-1/3 flex-col items-center mt-8 lg:mt-0">
            {signedIn.data ? (
              <Text
                slug={props.params.slug}
                addMessage={addMessage}
                name={signedIn.data.name}
              />
            ) : (
              <SignInToChat />
            )}
          </div>
        </div>
      </div>
    </PaddingLayout>
  );
};

export default Page;
