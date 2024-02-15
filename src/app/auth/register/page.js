"use client";

import { postRegisterAPI } from "@/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const goToLogin = () => router.push("/auth/login");
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await postRegisterAPI({fullName,email,username,password,repeatPassword});
    console.log("Registration successful", res.data)}
      catch(error){
        console.log("Registration failed", error);
      }
  }

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

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
            <Input type="text" className="rounded-xl border border-black" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
          </div>
          <div className="mb-4 w-80">
            <label className="mb-2 block text-sm">Email*</label>
            <Input type="email" className="rounded-xl border border-black" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Username*</label>
            <Input type="text" className="rounded-xl border border-black" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Password*</label>
            <Input type="password" className="rounded-xl border border-black" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="mb-6 w-80">
            <label className="mb-2 block text-sm">Repeat Password*</label>
            <Input type="password" className="rounded-xl border border-black" value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)}/>
          </div>
          <div className="flex flex-row gap-2">
            <Button
            onClick={handleSubmit}
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
