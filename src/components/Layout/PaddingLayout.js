import { cn } from "@/lib/utils";

const PaddingLayout = (props) => {
  return (
    <div className={cn("max-w-screen custom_scroll h-screen overflow-y-auto px-3 py-7 lg:px-0 lg:pl-12 lg:pr-24", props.className)}>
      {props.children}
    </div>
  );
};

export default PaddingLayout;
