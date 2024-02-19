const CardLayout = (props) => {
  return (
    <section className="mt-8 flex w-full flex-row flex-wrap justify-between gap-8">
      {props.children}
    </section>
  );
};

export default CardLayout;