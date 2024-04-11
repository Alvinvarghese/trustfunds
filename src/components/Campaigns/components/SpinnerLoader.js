import { ThreeDots } from "react-loader-spinner";

const SpinnerLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center pb-40">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#8ea6d4"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default SpinnerLoader;
