"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "./Icons";

const GoBack = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <Button onClick={goBack} className="outline-button">
      <ArrowLeft />
      <span className="ml-3">Go Back</span>
    </Button>
  );
};

export default GoBack;
