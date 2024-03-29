import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const GoToButton = (props) => {
  const router = useRouter();
  const goTo = () => router.push(props.href || "/");
  return (
    <Button className="rounded-2xl bg-darkgray" onClick={goTo}>
      {props.text || "Go To Home"}
    </Button>
  );
};

export default GoToButton;
