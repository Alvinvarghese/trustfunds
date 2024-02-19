import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const GoToButton = (props) => {
  const router = useRouter();
  const goTo = () => router.push(props.href || "/");
  return (
    <div className="pl-10">
      <Button className="rounded-2xl bg-darkgray" onClick={goTo}>
        {props.text || "Go To Home"}
      </Button>
    </div>
  );
};

export default GoToButton;
