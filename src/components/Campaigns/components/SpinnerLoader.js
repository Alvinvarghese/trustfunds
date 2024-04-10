import { ThreeDots } from "react-loader-spinner"

const SpinnerLoader = () => {
  return (<div className='h-screen pb-40 w-full flex items-center justify-center'>
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#2e3440"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>)
}

export default SpinnerLoader
