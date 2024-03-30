import GoBack from "../GoBack";
import GoToButton from "../goToButton";

export default function PageLayout() {

  return <div className=" pb-5 flex flex-row gap-5">
    <GoBack />
    <GoToButton href="/user/campaigns" text="Go To Dashboard" />
  </div>
}
