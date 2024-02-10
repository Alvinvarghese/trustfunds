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
          className="h-[240px] w-[1250px]"
        />
      </div>
      <div className="pt-4">
        <div>
          <h1 className="text-4xl font-bold text-darkgray">
            Clean Ganga Initiative
          </h1>
          <p>by Organization</p>
        </div>
        <div>
          <Button>0.01 raised of 0.1</Button>
          <Button>10 days left</Button>
          <Button>5 backers</Button>
        </div>
      </div>
      <div>
        <div>
          <p>Creator</p>
          <div>
            <img />
            <div>
              <p>Organization</p>
              <p>10 campaigns</p>
            </div>
          </div>
        </div>
        <Button>Go To Forum</Button>
        <p>Pledge ETH 0.1</p>
        <Button>FUND CAMPAIGN</Button>
      </div>
      <div>
        <h3>Story/Pitch</h3>
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
