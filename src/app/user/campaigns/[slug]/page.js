import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen flex-col pl-10">
      <div className="flex flex-row justify-start p-4">
        <div>
          <Button className="bg-darkgray">Go Back</Button>
        </div>
        <div className="pl-10">
          <Button className="bg-darkgray">Go To Dashboard</Button>
        </div>
      </div>
      <div>
        <img
          src="/campaign_image.png"
          alt="campaign image"
          height={200}
          width={1200}
          layout="responsive"
        />
      </div>
      <div className="flex flex-row justify-between pr-96 pt-4 ">
        <div>
          <h1 className="text-4xl font-bold text-darkgray">
            Clean Ganga Initiative
          </h1>
          <div className="flex flex-row gap-1">
            <p>by </p>
            <p className="font-bold">Organization</p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <Button className="size-100 flex flex-col bg-lightblue text-darkgray">
            <p className="text-3xl font-bold">0.01</p> <p>raised of 0.1</p>
          </Button>
          <Button className="size-100 flex flex-col bg-lightblue text-darkgray">
            <p className="text-3xl font-bold">10</p> <p>days left</p>
          </Button>
          <Button className="size-100 flex flex-col bg-lightblue text-darkgray">
            <p className="text-3xl font-bold">5</p> <p>backers</p>
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-48 pr-96 pt-10">
        <div className="flex flex-col">
          <h3 className="font-bold">Creator</h3>
          <div>
            <img />
            <div>
              <p>Organization name</p>
              <p className="text-sm font-light">10 campaigns</p>
            </div>
          </div>
        </div>
        <Button className="bg-darkgray">Go To Forum</Button>
        <p className="border-spacing-12 border-black">Pledge ETH 0.1</p>
        <Button className="bg-darkgray">FUND CAMPAIGN</Button>
      </div>
      <div>
        <h2 className="pt-8 font-bold">Story/Pitch</h2>
        <p>
          Alappuzha Beach is one of the most popular tourist destinations in
          Kerala, India. However, the beach is becoming increasingly polluted
          with plastic waste. This is having a negative impact on the
          environment and the local economy. The main problem facing Alappuzha
          Beach is plastic pollution. Plastic waste is washing up on the shore
          from the sea and from the nearby towns and villages. This plastic
          waste is harming marine life and making the beach unattractive to
          tourists. We are proposing a crowdfunding campaign to raise money to
          clean Alappuzha Beach. The money will be used to purchase equipment
          and supplies, and to hire local people to clean the beach.
        </p>
      </div>
    </div>
  );
};

export default Page;
