import GoBack from "../GoBack";
import GoToButton from "../goToButton";

export default function PageLayout(props) {
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex w-full flex-row gap-5 pb-5">
        <GoBack />
        <GoToButton href="/user/campaigns" text="Go To Dashboard" />
      </div>
      {props.children}
    </div>
  );
}
