import { AdminCheck } from "@/components/Icons";
import Link from "next/link";

export default function PublicBanner(props) {
  return (
    <div className="text-md mb-8 flex w-full flex-row items-start justify-center gap-2 rounded-sm bg-lightblue px-3 py-2 font-medium text-primary">
      <AdminCheck />
      <span>
        This is the <span className="font-bold">ADMIN VIEW</span> of the
        campaign! Click{" "}
      </span>
      <Link href={props.link || "/user/campaigns"} className="underline">
        here to go to public view
      </Link>{" "}
      of your campaign!
    </div>
  );
}

export const PrivateBanner = (props) => {
  return (
    <div className="text-md mb-8 flex w-full flex-row items-start justify-center gap-2 rounded-sm bg-secondary px-3 py-2 font-medium text-secondary-foreground">
      <AdminCheck />
      <span>
        This is the <span className="font-bold">PUBLIC VIEW</span> of the
        campaign! Click{" "}
      </span>
      <Link href={props.link || "/user/campaigns"} className="underline">
        here to manage your campaign.
      </Link>{" "}
    </div>
  );
};
