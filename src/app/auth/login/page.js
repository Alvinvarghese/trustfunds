"use client";

import { postLoginAPI } from "@/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const goToRegister = () => router.push("/auth/register");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postLoginAPI({
        username,
        password,
      });
      console.log("Login successful", res.data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen">
      <div className="hidden flex-1 cursor-pointer lg:block">
        <Image
          height={1024}
          width={720}
          src="/ai_image.png"
          alt="ai-image"
          className="h-full w-full object-contain object-left"
        />
      </div>
      <div className="flex flex-auto items-center justify-center">
        <form className=" flex max-w-md flex-col items-center justify-center">
          <Link href="/" className="h-2/3 w-3/5 pb-16">
            <img src="/TF.png" alt="logo" />
          </Link>
          <div className="mb-6 w-80">
            <label className="mb-2 block text-sm">Username*</label>
            <Input
              type="text"
              className="rounded-xl border border-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6 w-80 pb-6">
            <label className="mb-2 block text-sm">Password*</label>
            <Input
              type="password"
              className="rounded-xl border border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-4">
            <Button
              onClick={handleSubmit}
              type="submit"
              className="w-32 rounded-xl bg-welcome-button text-lg"
            >
              LOGIN
            </Button>
            <Button
              onClick={goToRegister}
              type="button"
              className="w-32 rounded-xl border-2 border-darkgray bg-transparent text-lg  text-darkgray hover:text-white"
            >
              REGISTER
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
