import PaddingLayout from "@/components/Layout/PaddingLayout";
import Navbar from "@/components/Navbar/Navbar";
import GoBack from "@/components/common/GoBack";
import GoToButton from "@/components/common/GoToButton";

export default function Page() {
  return (
    <>
      <Navbar />
      <PaddingLayout>
        <div className="flex h-full w-full flex-col items-center justify-center gap-5 py-10">
          <div className="text-center">
            <h1 className="text-2xl font-medium">401</h1>
            You were not authorised to visit the page you just tried to.
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
            <GoBack />
            <GoToButton href="/" text="Home" />
            <GoToButton href="/auth/login" text="Login" />
          </div>
        </div>
      </PaddingLayout>
    </>
  );
}
