import { Button } from "@/components/ui/button";
import { daysLeft } from "@/lib/utils";
import Image from "next/image";

const Details = (props) => {
  const { data } = props;
  if (!data) return <></>;
  return (
    <>
      <div className="h-[200px] overflow-clip rounded-md">
        <Image
          src={data.image}
          alt={data.title}
          height={200}
          width={1400}
          priority
        />
      </div>
      <div className="flex flex-col justify-between gap-5 pt-8 lg:flex-row lg:gap-0">
        <div>
          <h1 className="text-4xl font-bold text-darkgray">{data.title}</h1>
          <div className="flex flex-row gap-1">
            <p>Contract Address </p>
            <p className="font-bold">{data.contractAddress}</p>
          </div>
          <div className="flex flex-row gap-1">
            <p>by </p>
            <p className="font-bold">{data.name}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <Button className="size-100 flex flex-col bg-lightblue text-darkgray hover:text-white">
            <p className="text-3xl font-bold">0.00</p>{" "}
            <p>raised of {data.goal}</p>
          </Button>
          <Button className="size-100 flex flex-col bg-lightblue text-darkgray hover:text-white">
            <p className="text-3xl font-bold">{daysLeft(data.endDate)}</p>{" "}
            <p>days left</p>
          </Button>
          <Button className="size-100 flex flex-col bg-lightblue text-darkgray hover:text-white">
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
          <Button className="h-14 rounded-2xl bg-darkgray">
            GO TO CAMPAIGN FORUM
          </Button>
          <div className="flex h-28 flex-col justify-between overflow-hidden rounded-2xl border border-darkgray lg:h-14 lg:flex-row">
            <input
              className="lg:h-13 flex h-full items-center gap-40 rounded-2xl rounded-r-none border-none pl-3 hover:outline-none"
              placeholder="Pledge ETH 0.1"
            />
            <Button className="lg:h-13 h-full rounded-2xl rounded-l-none border-none bg-darkgray">
              FUND CAMPAIGN
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="pt-10 font-bold">Story/Pitch</h2>
        {data.story.length > 0 &&
          data.story.map((para, index) => {
            return (
              <p key={index} className="text-justify">
                {para}
              </p>
            );
          })}
      </div>
    </>
  );
};

export default Details;
