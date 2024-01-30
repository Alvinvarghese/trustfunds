import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <img
          src="/ai_image.png"
          alt="ai-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <form className=" flex max-w-md flex-col items-center justify-center">
          <img src="/TF.png" alt="logo" className="h-2/3 w-3/5 pb-16" />
          <div className="mb-6 w-80">
            <label className="mb-2 block text-sm">Username*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <div className="mb-6 w-80 pb-6">
            <label className="mb-2 block text-sm">Password*</label>
            <Input type="text" className="rounded-xl border border-black" />
          </div>
          <Button type="submit" className="rounded-xl w-32 text-lg bg-darkgray">
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
