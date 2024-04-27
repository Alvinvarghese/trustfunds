"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toastError, toastSuccess } from "@/lib/toast";
import { changePasswordAPI } from "@/axios";

export const passwordError =
  "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character among @$!%*?&.";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword)
      return toastError("Passwords do not match!");
    try {
      const res = await changePasswordAPI({ password, newPassword });
      if (res.data.success) toastSuccess(res.data.message);
      else
        throw new Error(
          res.data.error || "Someting went wrong. Please try again later."
        );
    } catch (err) {
      console.log(err);
      if (err.response.data.status === 400) toastError(passwordError);
      else toastError(err.response.data.error);
    } finally {
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
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
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl"
            type="password"
            name="oldPassword"
          />
        </div>
        <div className="w-full">
          <label>New Password*</label>
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="rounded-2xl"
            type="password"
            name="newPassword"
          />
        </div>
        <div className="w-full">
          <label>Confirm Password*</label>
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-2xl"
            type="password"
            name="newPasswordConfirm"
          />
        </div>
        <div className="flex w-fit justify-center">
          <Button className="outline-button" type="submit">
            Change
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
