import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex h-screen flex-col pt-[60px]">
      <div className="h-[100px]"></div>
      <div className="ml-auto flex-1">
        <Image src="/TF.png" width={271} height={178} />
      </div>
      <div className="flex-1">
        <div className="flex flex-col text-4xl font-[700] leading-none">
          <span>Trustfunds is a</span>
          <span>blockchain powered</span>
          <span>crowdfunding platform</span>
        </div>
        <div className="text-md my-1 mb-4 w-1/2 leading-tight">
          We aim to revolutionize fundraising by providing a transparent,
          secure, and efficient ecosystem for campaign creators and backers.
        </div>

        <Link href="/auth/login">
          <Button className="bg-welcome-button rounded-3xl px-16 py-4 text-xl duration-150 ease-in-out">
            Start Today!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
