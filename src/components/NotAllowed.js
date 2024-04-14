import GoToButton from "@/components/common/GoToButton";

export default function NotAllowed() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 py-10">
      <div className="text-center">
        <h1 className="text-2xl font-medium">401</h1>
        You were not authorised to visit the page you just tried to.
      </div>
      <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
        <GoToButton href="/" text="Home" />
        <GoToButton href="/auth/login" text="Login" />
      </div>
    </div>
  );
}
