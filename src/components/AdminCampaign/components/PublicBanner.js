import Link from "next/link";

export default function PublicBanner(props) {
  return (
    <div className="mb-8 w-full rounded-md bg-lightblue p-4 text-lg font-medium text-primary">
      This is the <span className="font-bold">ADMIN VIEW</span> of the campaign!
      Click{" "}
      <Link
        href={props.link || "/user/campaigns"}
        className="rounded-sm border-[1px] border-primary p-1"
      >
        here to go to public view
      </Link>{" "}
      of the campaign!
    </div>
  );
}
