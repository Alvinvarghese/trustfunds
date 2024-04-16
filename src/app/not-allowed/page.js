import PaddingLayout from "@/components/Layout/PaddingLayout";
import Navbar from "@/components/Navbar/Navbar";
import NotAllowed from "@/components/NotAllowed";

export default function Page() {
  return (
    <>
      <Navbar />
      <PaddingLayout>
        <NotAllowed />
      </PaddingLayout>
    </>
  );
}
