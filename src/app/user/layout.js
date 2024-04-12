import Navbar from "@/components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{props.children}</div>
    </div>
  );
};

export default Layout;
