import GoBack from "../GoBack";
import GoToButton from "../goToButton";

export default function PageLayout() {
  return (
    <div className=" flex flex-row gap-5 pb-5">
      <GoBack />
      <GoToButton href="/user/campaigns" text="Go To Dashboard" />
    </div>
  );
}
