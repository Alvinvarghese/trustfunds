import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { SquareArrowUpRight } from "./Icons";

const GoToButton = (props) => {
  const router = useRouter();
  const goTo = () => router.push(props.href || "/");
  return (
    <Button className="outline-button" onClick={goTo}>
      <SquareArrowUpRight />
      <span className="ml-3">{props.text || "Go To Home"}</span>
    </Button>
  );
};

export default GoToButton;
