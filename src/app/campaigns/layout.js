import Navbar from "@/components/navbar/navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{props.children}</div>
    </div>
  );
};

export default Layout;
