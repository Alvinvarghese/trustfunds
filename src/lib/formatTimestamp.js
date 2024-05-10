function formatTimestamp(deadline) {
  const deadlineDate = new Date(parseInt(deadline));

  if (!deadline) return "";

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const readableDeadline = deadlineDate.toLocaleString(undefined, options);

  return `${readableDeadline} IST`;
}

export default formatTimestamp;
