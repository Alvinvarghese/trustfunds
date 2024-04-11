"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const GoBack = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <div>
      <Button onClick={goBack} className="outline-button">
        Go Back
      </Button>
    </div>
  );
};

export default GoBack;
