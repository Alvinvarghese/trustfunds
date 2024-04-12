"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChangePassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="text-darkgray mt-8 w-full pt-3 text-base font-bold lg:text-2xl">
        Change Password
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end justify-between gap-4 py-2 lg:flex-row"
      >
        <div className="w-full">
          <label>Old Password*</label>
          <Input className="rounded-2xl" type="password" name="oldPassword" />
        </div>
        <div className="w-full">
          <label>New Password*</label>
          <Input className="rounded-2xl" type="password" name="newPassword" />
        </div>
        <div className="w-full">
          <label>Confirm Password*</label>
          <Input
            className="rounded-2xl"
            type="password"
            name="newPasswordConfirm"
          />
        </div>
        <div className="flex w-fit justify-center">
          <Button className="outline-button">Change</Button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
