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

      <div className="flex-1 flex items-center justify-center">
      <form className=" max-w-md flex flex-col justify-center items-center">
        <div className="mb-6 w-80">
        <label className="block text-sm mb-2">Full Name*</label>
        <Input type="text" className="border border-black rounded-xl" />
        </div>

        <div className="mb-6 w-80">
            <label className="block mb-2 text-sm">Email*</label>
            <Input type="text" className="border border-black rounded-xl" />
          </div>
        
          <div className="mb-6 w-80">
            <label className="block mb-2 text-sm">Username*</label>
            <Input type="text" className="border border-black rounded-xl" />
          </div>
          <div className="mb-6 w-80">
            <label className="block mb-2 text-sm">Password*</label>
            <Input type="text" className="border border-black rounded-xl" />
          </div>
          <div className="mb-6 w-80">
            <label className="block mb-2 text-sm">Repeat Password*</label>
            <Input type="text" className="border border-black rounded-xl" />
          </div>
          <Button type="submit" className="rounded-xl">
            REGISTER
          </Button>
      </form>
      </div>
    </div>
  );
};

export default Page;