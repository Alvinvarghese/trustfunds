"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const GoBack = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <div>
      <Button className="rounded-2xl bg-darkgray" onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
};

export default GoBack;
