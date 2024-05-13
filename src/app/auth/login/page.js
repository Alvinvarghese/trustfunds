"use client";

import { postLoginAPI } from "@/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/context/UserContext";
import giveErrorMsg from "@/lib/giveErrorMsg";
import { toastError, toastSuccess } from "@/lib/toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const { checkSignedIn } = useUserContext();
  const goToRegister = () => router.push("/auth/register");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // validations
      if (email.length === 0) throw new Error("Enter a valid email id.");
      if (password.length === 0) throw new Error("Password must not be empty.");

      const data = {
        email,
        password,
      };
      const res = await postLoginAPI(data);
      console.log(res);
      if (res.status === 200) {
        toastSuccess("Login successful!");
        router.push("/user/campaigns");
        checkSignedIn(); // await ommited intentionally
      }
    } catch (error) {
      console.log("Login failed", error);
      toastError(err.response?.data?.error || err.message);
    }
  };

  const [email, setEmail] = useState("");
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
            <img src="/TF.webp" alt="logo" />
          </Link>
          <div className="mb-6 w-80">
            <label className="mb-2 block text-sm">Email*</label>
            <Input
              type="text"
              className="rounded-xl border border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="welcome-button w-32 rounded-xl border-white text-lg"
            >
              LOGIN
            </Button>
            <Button
              onClick={goToRegister}
              type="button"
              className="outline-button"
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
