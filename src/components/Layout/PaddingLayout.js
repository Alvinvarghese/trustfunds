const PaddingLayout = (props) => {
  return (
    <div className="max-w-screen custom_scroll h-screen overflow-y-auto px-2 pt-10 lg:px-0 lg:pl-12 lg:pr-24">
      {props.children}
    </div>
  );
};

export default PaddingLayout;
