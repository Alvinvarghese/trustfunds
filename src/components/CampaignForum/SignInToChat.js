import { useRouter } from "next/navigation";

const SignInToChat = () => {
  const router = useRouter();
  const onLogin = () => router.push("/auth/login");
  return (
    <div className="h-1/2 w-full  p-10">
      <div
        className="h-full w-full cursor-pointer rounded-md border-[1px] border-[#ffffff50] bg-[#ffffff10] text-center duration-200 ease-in-out hover:bg-[#ffffff20] flex items-center justify-center leading-tight underline"
        onClick={onLogin}
      >
        <p>Sign In to participate in the campaign community forum.</p>
      </div>
    </div>
  );
};

export default SignInToChat;
