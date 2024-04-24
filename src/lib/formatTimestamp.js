function formatTimestamp(deadline) {
    const deadlineDate = new Date(parseInt(deadline));

    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const readableDeadline = deadlineDate.toLocaleString(undefined, options);

    return readableDeadline;
}

export default formatTimestamp