import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <img
          src="/ai_image1.png"
          alt="ai-image"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 items-center justify-center ">
        <form className=" flex max-w-md flex-col items-center justify-center">
          <img src="/TF.png" alt="logo" className="h-2/3 w-3/5 pb-8" />
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Full Name*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-4 w-80">
            <label className="mb-2 block text-sm">Email*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Username*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-3 w-80">
            <label className="mb-2 block text-sm">Password*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-6 w-80">
            <label className="mb-2 block text-sm">Repeat Password*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <Button type="submit" className="w-32 rounded-xl bg-darkgray text-lg">
            REGISTER
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
