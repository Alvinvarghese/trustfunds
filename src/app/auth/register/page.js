"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const goToLogin = () => router.push("/auth/login");
  return (
    <div className="flex h-screen">
      <div className="hidden flex-1 cursor-pointer md:block">
        <Image
          height={1024}
          width={720}
          src="/ai_image1.png"
          alt="ai-image"
          className="h-full w-full object-contain object-left"
        />
      </div>

      <div className="flex flex-auto items-center justify-center ">
        <form className=" flex max-w-md flex-col items-center justify-center">
          <Link href="/" className="h-2/3 w-3/5 pb-8">
            <img src="/TF.png" alt="logo" />
          </Link>
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Full Name*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-4 w-80">
            <label className="mb-2 block text-sm">Email*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Username*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Password*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-6 w-80">
            <label className="mb-2 block text-sm">Repeat Password*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="flex flex-row gap-2">
            <Button
              type="submit"
              className="w-32 rounded-xl bg-welcome-button text-lg"
            >
              REGISTER
            </Button>
            <Button
              onClick={goToLogin}
              type="button"
              className="w-32 rounded-xl border-2 border-darkgray bg-transparent text-lg  text-darkgray hover:text-white"
            >
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
