function err(message) {
  return { error: message };
}

function sanitizeMilestones(milestones, endDate) {
  let previousDate = null;
  let totalPercentage = 0;

  for (let i = 0; i < milestones.length; i++) {
    const { description, date, funds } = milestones[i];

    if (description.length < 5)
      return err("Milestone description must be at least 5 characters long.");

    if (date.length < 2) return err("Invalid date inputted in milestones.");

    if (previousDate && date <= previousDate + 10)
      return err(
        "Milestone dates must be increasing with at least 10 days gap."
      );
    previousDate = date;

    totalPercentage += Number(funds);
    if (totalPercentage > 100)
      return err("Total milestone funds percentage cannot exceed 100%.");
  }

  if (totalPercentage !== 100)
    return err("Total milestone funds percentage must be 100%.");

  if (endDate.length === 0) return err("End date cannot be empty.");

  if (daysLeft(endDate.toString()) <= 7)
    return err("End date must be at least one week from today.");

  return err(false);
}

export default sanitizeMilestones;
