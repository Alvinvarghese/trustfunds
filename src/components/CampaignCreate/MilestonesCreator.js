import { PlusCircle, Trash } from "../Icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function MilestonesCreator({ milestones, setMilestones }) {
  const handleInputChange = (index, event) => {
    let { name, value } = event.target;
    if (name === "funds")
      if (value > 90)
        // prevent fund % entered more than 90 and converting to integer
        return;
      else value = parseInt(value);
    const updatedMilestones = [...milestones];
    updatedMilestones[index] = { ...updatedMilestones[index], [name]: value };
    setMilestones(updatedMilestones);
  };

  const handleAddMilestone = () =>
    setMilestones([...milestones, { description: "", date: "", funds: 0 }]);

  const handleDeleteMilestone = (index) => {
    if (milestones.length === 2) return; // ensure min of 2 milestones
    setMilestones((milestones) =>
      milestones.filter((milestone, number) => index !== number && milestone)
    );
  };
  return (
    <>
      {milestones.map((milestone, index) => (
        <div
          key={index}
          className="flex flex-row flex-wrap items-center gap-1 lg:flex-nowrap lg:gap-3"
        >
          <Input
            type="text"
            readOnly
            value={index + 1}
            className="w-[50px] text-center"
          />
          <Input
            className="lg:w-1/2"
            type="text"
            placeholder="Enter in a few words about the milestone"
            name="description"
            value={milestone.description}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            className="lg:w-[30%]"
            type="date"
            name="date"
            value={milestone.date}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            className="lg:w-[20%]"
            type="number"
            inputMode="numeric"
            placeholder="Enter the % of funds to withdraw"
            name="funds"
            value={milestone.funds}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Button
            variant="destructive"
            className="w-fit lg:mx-auto"
            onClick={() => handleDeleteMilestone(index)}
          >
            <Trash />
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        className="mx-auto w-fit"
        onClick={handleAddMilestone}
      >
        <PlusCircle />
      </Button>
    </>
  );
}
