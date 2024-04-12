function getLaterDate(dateString, daysAfter) {
  // Parse the input date string
  const parts = dateString.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1; // Month is zero-based
  const day = parseInt(parts[2]);

  // Create a Date object with the input date
  const originalDate = new Date(year, month, day);

  // Calculate the date after the specified number of days
  const laterDate = new Date(originalDate);
  laterDate.setDate(laterDate.getDate() + daysAfter);

  // Extract the year, month, and day components of the later date
  const laterYear = laterDate.getFullYear();
  const laterMonth = ("0" + (laterDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
  const laterDay = ("0" + laterDate.getDate()).slice(-2); // Add leading zero if needed

  // Return the later date string in 'YYYY-MM-DD' format
  return `${laterYear}-${laterMonth}-${laterDay}`;
}

export default getLaterDate;
