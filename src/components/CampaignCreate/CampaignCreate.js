import { useEffect, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { toastError } from "@/lib/toast";
import giveErrorMsg from "@/lib/giveErrorMsg";
import sanitizeMilestones from "./utils/sanitizeMilestone";
import sanitizeInputs from "./utils/sanitizeInputs";
import uploadImage from "@/lib/uploadImage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusCircle } from "../Icons";
import MilestonesCreator from "./MilestonesCreator";
import { Textarea } from "../ui/textarea";

export default function CampaignCreate() {
  const { signedIn, showLogin } = useUserContext();

  // causes list fetching
  const [causes, setCauses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCausesAPI();
        if (res.status === 200) setCauses(res.data.result.causesList);
        else toastError("Campaign causes could not be loaded!");
      } catch (err) {
        console.log(err);
      }
    };

    if (!signedIn.status && !signedIn.fetched) showLogin();
    else fetchData();
  }, []);

  // states that manage data
  const [userName, setUserName] = useState(signedIn.data?.name || null);
  const [campaignTitle, setCampaignTitle] = useState("");
  const [story, setStory] = useState("");
  const [goal, setGoal] = useState("");
  const [campaignImage, setCampaignImage] = useState("");
  const [endDate, setEndDate] = useState("");
  const [milestones, setMilestones] = useState([
    { description: "", date: "", funds: 0 },
    { description: "", date: "", funds: 0 },
  ]);
  const [selectedCause, setSelectedCause] = useState("");
  const handleCause = (cause) => setSelectedCause(cause);

  const handleSubmit = async () => {
    try {
      // validations
      let milestonesValidated = sanitizeMilestones(milestones, endDate);
      if (milestonesValidated.error) throw new Error(milestonesValidated.error);
      let inputsValidated = sanitizeInputs();
      if (inputsValidated.error) throw new Error(inputsValidated.error);

      // upload image to firebase storage
      const url = new URL(await uploadImage(campaignImage, campaignImage.name));

      // parse story
      const storyArr = story
        .split("\n")
        .filter((eachStory) => eachStory !== "");

      // prepare data for api request
      const data = {
        name: userName,
        title: campaignTitle,
        story: storyArr,
        goal: parseFloat(goal),
        causeType: selectedCause,
        image: url,
        endDate,
        milestones,
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
    <>
      <div className="w-full flex-row gap-4 lg:flex lg:gap-6">
        <div className="w-full pb-4">
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
        <label>Story/Pitch*</label>
        <Textarea
          className="placeholder h-32 rounded-2xl text-start"
          type="text"
          placeholder="Write your story/pitch for the campaign that can help users in deciding to donate for the cause."
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
                {causes &&
                  causes.length > 0 &&
                  causes.map((element) => {
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
      <div className="my-12 flex w-full flex-col gap-8 lg:gap-4">
        <label>Milestones (A minimum of 2)*</label>
        <p className="text-md px-1 text-center leading-tight lg:px-36">
          <span className="font-bold">How to Make Milestones:</span> Milestones
          are specific checkpoints during the course of the campaign. Only on
          those days can the manager withdraw funds from the blockchain, if
          approved by the majority of voters. The milestones are created by
          giving a suitable name, specifying the date at which funds are open to
          be withdrawn, and determining the portion of the funds in % that can
          be released.
        </p>
        <MilestonesCreator
          milestones={milestones}
          setMilestones={setMilestones}
        />
      </div>
      <Button
        className="outline-button mt-6 flex flex-row gap-3 rounded-xl px-10 py-6 text-lg"
        onClick={handleSubmit}
      >
        <PlusCircle size={20} /> <span>Create Campaign</span>
      </Button>
    </>
  );
}
