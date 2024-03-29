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
          layout="responsive"
        />
      </div>
      <div className="flex flex-row justify-between pt-8">
        <div>
          <h1 className="text-4xl font-bold text-darkgray">{data.title}</h1>
          <div className="flex flex-row gap-1">
            <p>by </p>
            <p className="font-bold">{data.name}</p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
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
      <div className="flex w-full flex-row justify-between pt-10">
        <div className="flex flex-col">
          <h3 className="font-bold">Creator</h3>
          <div>
            <img />
            <div>
              <p>{data.name}</p>
            </div>
          </div>
        </div>
        <div className="ml-20 flex flex-grow flex-row justify-end gap-24">
          <Button className="h-14 rounded-2xl bg-darkgray ">GO TO FORUM</Button>
          <div className="flex h-14 flex-row rounded-2xl border border-darkgray">
            <input
              className=" h-13 flex items-center gap-40 rounded-2xl rounded-r-none border-none pl-3 hover:outline-none"
              placeholder="Pledge ETH 0.1"
            />
            <Button className="h-13 border-none rounded-2xl bg-darkgray rounded-l-none">
              FUND CAMPAIGN
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="pt-10 font-bold">Story/Pitch</h2>
        {data.story.length > 0 &&
          data.story.map((para, index) => {
            return <p key={index} className="text-justify">{para}</p>;
          })}
      </div>
    </>
  );
};

export default Details;
