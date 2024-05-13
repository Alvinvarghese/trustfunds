import MilestoneTable from "@/components/CampaignDetail/components/Milestonetable";
import { MessageQuote } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { daysLeft } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CampaignAdminDetails({ data }) {
  const router = useRouter();
  const onGoToForum = () => router.push(`/campaigns/${data._id}/forum`);
  const CampaignForumButton = () => (
    <Button className="outline-button py-6" onClick={onGoToForum}>
      <MessageQuote />
      <span className="ml-3">CAMPAIGN FORUM</span>
    </Button>
  );
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
        <div className="flex w-full flex-col items-start justify-between gap-1">
          <h1 className="text-darkgray text-4xl font-bold">{data.title}</h1>
          <div className="flex w-full flex-col gap-5 lg:w-1/2 mt-10">
            <Button className="size-100 text-darkgray flex flex-col bg-lightblue hover:text-white">
              <p className="text-3xl font-bold">{parseFloat(data.balance).toFixed(10)}</p>{" "}
              <p>raised of {data.goal}</p>
            </Button>
            <Button className="size-100 text-darkgray flex flex-col bg-lightblue hover:text-white">
              <p className="text-3xl font-bold">{daysLeft(data.endDate)}</p>{" "}
              <p>days left</p>
            </Button>
            <Button className="size-100 text-darkgray flex flex-col bg-lightblue hover:text-white">
              <p className="text-3xl font-bold">{data.backersCount}</p>{" "}
              <p>donations</p>
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col">
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
      </div>

      <div className="flex flex-col">
        <h2 className="pt-10 font-bold">
          The fund collection for the campaign is scheduled to end on:
        </h2>
        <span className="text-2xl">{data.endDate}</span>
      </div>

      <MilestoneTable
        milestones={data.milestones}
        goal={data.goal}
        allowWithdraw={true}
      />

      <div className="flex w-full items-center justify-center pt-10">
        <CampaignForumButton />
      </div>
    </>
  );
}
