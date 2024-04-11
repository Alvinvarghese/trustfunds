import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const GoToButton = (props) => {
  const router = useRouter();
  const goTo = () => router.push(props.href || "/");
  return (
    <Button className="outline-button" onClick={goTo}>
      {props.text || "Go To Home"}
    </Button>
  );
};

export default GoToButton;
