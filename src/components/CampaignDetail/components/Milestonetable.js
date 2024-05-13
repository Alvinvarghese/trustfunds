import { HandCoins } from "@/components/Icons";
import { Date, Description, Fund, Number } from "./MilestoneComponents";

const calculatePercent = (percent, of) => {
  return (of * percent) / 100;
};

const Icon = () => (
  <span className="flex w-full flex-row items-center justify-center">
    <HandCoins />
  </span>
);

export default function MilestoneTable(props) {
  return (
    <>
      <h2 className="pt-10 font-bold">Milestones</h2>
      <div className="flex flex-row items-center justify-between gap-2 py-2 text-left font-bold">
        <Number>S.No</Number>
        <Description>Description</Description>
        <Date>Date</Date>
        <Fund>Fund %</Fund>
        {props.allowWithdraw && <Date>Withdraw</Date>}
      </div>
      {props.milestones.length > 0 &&
        props.milestones.map((milestone, index) => {
          return (
            <div
              className="flex flex-row items-center justify-between gap-1 py-1 text-left text-sm"
              key={index}
            >
              <Number>{index + 1}</Number>
              <Description>{milestone.description}</Description>
              <Date>{milestone.date}</Date>
              <Fund>
                {milestone.funds}% of {props.goal} ={" "}
                {calculatePercent(milestone.funds, props.goal)} Eth
              </Fund>
              {props.allowWithdraw && (
                <Date
                  className="bg-secondary"
                  onClick={() => {
                    alert(index);
                  }}
                >
                  <Icon />
                </Date>
              )}
            </div>
          );
        })}
    </>
  );
}
