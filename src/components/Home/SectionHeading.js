const SectionHeading = (props) => {
  return (
    <div className="border-b-2 border-darkgray">
      <span className="text-4xl font-[700]">{props.text}</span>
      {props.p && <span className="px-2">({props.p})</span>}
    </div>
  );
};

export default SectionHeading;
