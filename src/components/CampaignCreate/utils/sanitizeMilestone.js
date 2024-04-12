import { daysLeft } from "@/lib/utils";
import getLaterDate from "./getLaterDate";

function err(message) {
  return { error: message };
}

function sanitizeMilestones(milestones, endDate) {
  let previousDate = null;
  let totalPercentage = 0;

  if (endDate.length < 2)
    return err(
      "Enter a valid date to wait untill for campaign fund collection."
    );

  if (daysLeft(endDate.toString()) < 7)
    return err("End date must be at least one week from today.");

  if (milestones[0]?.date?.length <= 0 || endDate > milestones[0].date)
    return err(
      "The first milestone must be on or after the fund collection period date."
    );

  for (let i = 0; i < milestones.length; i++) {
    const { description, date, funds } = milestones[i];
    if (description.length < 5)
      return err("Milestone description must be at least 5 characters long.");
    if (date.length < 2) return err("Invalid date inputted in milestones.");
    if (previousDate && date <= getLaterDate(previousDate, 10)) {
      return err(
        "Milestone dates must be increasing with at least 10 days gap."
      );
    }
    previousDate = date;
    totalPercentage += Number(funds);
    if (totalPercentage > 100)
      return err("Total milestone funds percentage cannot exceed 100%.");
  }

  if (totalPercentage !== 100)
    return err("Total milestone funds percentage must be 100%.");

  return err(false);
}

export default sanitizeMilestones;
