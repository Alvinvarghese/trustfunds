"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChangePassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="mt-8 w-full pt-3 text-base font-bold text-darkgray lg:text-2xl">
        Change Password
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="pb-4 pt-4 lg:mr-10 lg:w-1/2">
          <label>Old Password*</label>
          <Input className="rounded-2xl" type="password" name="oldPassword" />
        </div>

        <div className="w-full flex-row pt-4 lg:mb-6 lg:flex">
          <div className="pb-4 lg:mr-10 lg:w-1/2">
            <label>New Password*</label>
            <Input className="rounded-2xl" type="password" name="newPassword" />
          </div>
          <div className="pb-4 lg:w-1/2">
            <label>Confirm Password*</label>
            <Input
              className="rounded-2xl"
              type="password"
              name="newPasswordConfirm"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Button className="mt-2 flex w-40 rounded-xl bg-darkgray px-10 py-6 text-lg">
            Change
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
