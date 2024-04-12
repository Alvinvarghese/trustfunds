import { Coins, MessageQuote } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { daysLeft } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Date, Description, Fund, Number } from "./MilestoneComponents";
import { useUserContext } from "@/context/UserContext";

const calculatePercent = (percent, of) => {
  return (of * percent) / 100;
};

const Details = (props) => {
  const { data } = props;
  const { signedIn } = useUserContext();

  const router = useRouter();
  const onGoToFund = () => router.push(`/campaigns/${data._id}/fund`);
  const onGoToForum = () => router.push(`/campaigns/${data._id}/forum`);

  const FundCampaignButton = () => (
    <Button className="outline-button py-6" onClick={onGoToFund}>
      <Coins />
      <span className="ml-3">FUND CAMPAIGN</span>
    </Button>
  );
  const CampaignForumButton = () => (
    <Button className="outline-button py-6" onClick={onGoToForum}>
      <MessageQuote />
      <span className="ml-3">CAMPAIGN FORUM</span>
    </Button>
  );

  // check the creator in data and if is creator, block funding the campaign
  let isCreator = false;
  if (signedIn.status && signedIn.fetched) {
    if (signedIn.data?._id === data.creator) {
      isCreator = true;
    }
  }

  if (!data || !data._id) return <></>;
  return (
    <>
      <div className="flex items-end overflow-clip rounded-md lg:h-[400px]">
        <Image
          src={data.image}
          alt={data.title}
          height={400}
          width={1400}
          objectFit="fill"
          priority
        />
      </div>

      <div className="flex flex-col justify-between gap-5 pt-8 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-start justify-between gap-1">
          <h1 className="text-darkgray text-4xl font-bold">{data.title}</h1>
          <div className="flex flex-row gap-1">
            <p>Transaction Address: </p>
            <p className="font-bold">{data.contractAddress}</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <Button className="size-100 text-darkgray flex flex-col bg-lightblue hover:text-white">
            <p className="text-3xl font-bold">0.00</p>{" "}
            <p>raised of {data.goal}</p>
          </Button>
          <Button className="size-100 text-darkgray flex flex-col bg-lightblue hover:text-white">
            <p className="text-3xl font-bold">{daysLeft(data.endDate)}</p>{" "}
            <p>days left</p>
          </Button>
          <Button className="size-100 text-darkgray flex flex-col bg-lightblue hover:text-white">
            <p className="text-3xl font-bold">0</p> <p>backers</p>
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between lg:flex-row lg:pt-10">
        <div className="flex flex-col py-4">
          <h3 className="font-bold">Creator</h3>
          <div>
            <img />
            <div>
              <p>{data.name}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-end gap-8 lg:ml-20 lg:flex-row lg:gap-24">
          <CampaignForumButton />
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="pt-10 font-bold">
          The fund collection for the campaign is scheduled to end on:
        </h2>
        <span className="text-2xl">{data.endDate}</span>
      </div>

      <div className="flex flex-col">
        <h2 className="pt-10 font-bold">Milestones</h2>
        <div className="flex flex-row items-center justify-between gap-2 py-2 text-left font-bold">
          <Number>S.No</Number>
          <Description>Description</Description>
          <Date>Date</Date>
          <Fund>Fund %</Fund>
        </div>
        {data.milestones.length > 0 &&
          data.milestones.map((milestone, index) => {
            return (
              <div className="flex flex-row items-center justify-between gap-2 py-1 text-left">
                <Number>{index + 1}</Number>
                <Description>{milestone.description}</Description>
                <Date>{milestone.date}</Date>
                <Fund>
                  {milestone.funds}% of {data.goal} ={" "}
                  {calculatePercent(milestone.funds, data.goal)} Eth
                </Fund>
              </div>
            );
          })}
      </div>

      <div className="flex flex-col">
        <h2 className="pt-10 font-bold">Story/Pitch</h2>
        {data.story.length > 0 &&
          data.story.map((para, index) => {
            return (
              <p key={index} className="my-2 text-justify leading-snug">
                {para}
              </p>
            );
          })}
      </div>

      {!isCreator && (
        <div className="flex w-full items-center justify-center pt-10">
          <FundCampaignButton />
        </div>
      )}
    </>
  );
};

export default Details;
