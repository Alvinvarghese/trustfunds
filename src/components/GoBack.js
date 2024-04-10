"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const GoBack = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <div>
      <Button className="bg-darkgray rounded-2xl" onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
};

export default GoBack;
