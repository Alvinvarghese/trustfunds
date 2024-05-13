import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const IconButton = (props) => {
  return (
    <Button
      className={cn(
        "flex flex-row items-center justify-center gap-2",
        props.className
      )}
      onClick={props.onClick}
      variant="outline"
      type={props.type || "button"}
    >
      {props.Icon && <props.Icon />}
      <span>
        {props.text}
        {props.children}
      </span>
    </Button>
  );
};

export default IconButton;
