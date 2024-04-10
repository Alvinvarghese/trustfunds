const SectionHeading = (props) => {
  return (
    <div className="border-darkgray mb-4 border-b-2">
      <span className="text-4xl font-[700]">{props.text}</span>
      {props.p && <span className="px-2">({props.p})</span>}
    </div>
  );
};

export default SectionHeading;
