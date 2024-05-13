"use client";

import { postRegisterAPI } from "@/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import giveErrorMsg from "@/lib/giveErrorMsg";
import { toastError, toastSuccess } from "@/lib/toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const goToLogin = () => router.push("/auth/login");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // validations
      if (fullName.length === 0) throw new Error("Name cannot be empty.");
      if (email.length === 0) throw new Error("Email must not be empty");
      if (password.length === 0 || repeatPassword.length === 0)
        throw new Error("Password or confirm password must not be empty.");
      if (password != repeatPassword)
        throw new Error("Passwords do not match.");

      const data = {
        name: fullName,
        email,
        password,
      };
      const res = await postRegisterAPI(data);
      if (res.status === 200) {
        toastSuccess("Registration successful. Please login to continue!");
        router.push("/auth/login");
      }
    } catch (error) {
      console.error(error);
      let defaultError = "Registration failed. Please try again later";
      toastError(err.response?.data?.error || err.message || defaultError);
    }
  };

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
            <img src="/TF.webp" alt="logo" />
          </Link>
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Full Name*</label>
            <Input
              type="text"
              className="rounded-xl border border-black"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4 w-80">
            <label className="mb-2 block text-sm">Email*</label>
            <Input
              type="email"
              className="rounded-xl border border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Password*</label>
            <Input
              type="password"
              className="rounded-xl border border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 w-80">
            <label className="mb-2 block text-sm">Repeat Password*</label>
            <Input
              type="password"
              className="rounded-xl border border-black"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-2">
            <Button
              onClick={handleSubmit}
              type="submit"
              className="welcome-button w-32 rounded-xl border-white text-lg"
            >
              REGISTER
            </Button>
            <Button
              onClick={goToLogin}
              type="button"
              className="outline-button"
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
