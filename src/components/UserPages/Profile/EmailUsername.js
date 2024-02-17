"use client";

import { useEffect, useState } from "react";
import { getUserAPI } from "@/axios";
import { Input } from "@/components/ui/input";
import { toastError } from "@/lib/toast";

const EmailUsername = (props) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserAPI();
        if (res.status === 200) {
          setUsername(res.data.result.name);
          setEmail(res.data.result.email);
        }
      } catch (err) {
        console.log(err);
        toastError("Error fetching user details. Please try again later!");
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="pb-4 pt-4 lg:mr-10 lg:w-1/2">
        <label>Full name*</label>
        <Input
          className="rounded-2xl"
          defaultValue={username || ""}
          type="text"
          readOnly
          placeholder="John Doe"
        />
      </div>

      <div className="pb-4 pt-4 lg:mr-10 lg:w-1/2">
        <label>Email*</label>
        <Input
          className="rounded-2xl"
          type="text"
          defaultValue={email || ""}
          readOnly
          placeholder="example@gmail.com"
        />
      </div>
    </>
  );
};

export default EmailUsername;
