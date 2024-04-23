import { cn } from "@/lib/utils";
import { ThreeDots } from "react-loader-spinner";

const SpinnerLoader = (props) => {
  return (
    <div className={cn("flex h-screen w-full items-center justify-center pb-40", props.className)}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#637DAE"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
      />
    </div>
  );
};

export default SpinnerLoader;
