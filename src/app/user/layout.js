import TokenCheckLayout from "@/components/Layout/TokenCheckLayout";
import Navbar from "@/components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <TokenCheckLayout>
      <div>
        <Navbar />
        <div className="pt-16">{props.children}</div>
      </div>
    </TokenCheckLayout>
  );
};

export default Layout;
