function err(message) {
  return { error: message };
}

function sanitizeInputs(
  campaignImage,
  userName,
  campaignTitle,
  story,
  goal,
  selectedCause
) {
  if (!campaignImage || campaignImage.length === 0)
    return err("Campaign image cannot be empty.");
  if (userName && userName.length === 0)
    return err("Please login and try again later.");
  if (campaignTitle.length === 0) return err("Campaign title cannot be empty.");
  if (story.length === 0) return err("Story cannot be empty.");
  if (goal.length === 0) return err("Goal cannot be empty.");
  if (selectedCause.length === 0) return err("Campaign cause cannot be empty.");

  return err(false);
}

export default sanitizeInputs;
