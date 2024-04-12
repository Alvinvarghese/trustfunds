import GoBack from "../common/GoBack";
import GoToButton from "../common/GoToButton";

export default function PageLayout(props) {
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex w-full flex-col gap-5 pb-5 lg:flex-row">
        <GoBack />
        <GoToButton href="/user/campaigns" text="Go To Dashboard" />
      </div>
      {props.children}
    </div>
  );
}
