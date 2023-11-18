
function calculateMonthsAndDays(date) {
    // Parse the input date
    const inputDate = new Date(date);
  
    // Get today's date
    const today = new Date();
  
    // Calculate the difference in milliseconds
    const timeDifference = today - inputDate;
  
    // Calculate the number of milliseconds in a day
    const millisecondsInDay = 1000 * 60 * 60 * 24;
  
    // Calculate the number of days
    const daysDifference = Math.floor(timeDifference / millisecondsInDay);
  
    // Calculate the number of months
    const monthsDifference = Math.floor(daysDifference / 30); // Assuming an average of 30 days in a month
  
    // Calculate the remaining days
    const remainingDays = daysDifference % 30;
  
    // Return the result as an object
    return {
      months: monthsDifference,
      days: remainingDays
    };
  }
  
  // Example usage:
  const inputDate = '2023-06-30'; // Replace this with your desired date in YYYY-MM-DD format
  const result = calculateMonthsAndDays(inputDate);
  document.getElementById("result").innerHTML = ` ${result.months} Months & ${result.days} Days`;
  