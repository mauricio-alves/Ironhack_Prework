function calculateHours(hoursPerDay, days) {
  return hoursPerDay * days;
}

calculateHours(8, 5);

function milesToKilometers(miles) {
  if (!miles) {
    return 1.60934;
  } else {
    return miles * 1.60934;
  }
}

milesToKilometers(2);
