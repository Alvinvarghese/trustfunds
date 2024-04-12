const CardLayout = (props) => {
  return (
    <section className="mt-8 flex w-full flex-row flex-wrap justify-start gap-8 pb-12">
      {props.children}
    </section>
  );
};

export default CardLayout;
