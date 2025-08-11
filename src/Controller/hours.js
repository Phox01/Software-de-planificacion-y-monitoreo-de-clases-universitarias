export function generateTimeSlots(
  start, //"07:00"
  end, //"19:00",
  interval //15
) {
  const slots = [];
  let [hour, minute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  while (hour < endHour || (hour === endHour && minute <= endMinute)) {
    const hh = String(hour).padStart(2, "0");
    const mm = String(minute).padStart(2, "0");
    slots.push(`${hh}:${mm}`);

    minute += interval;
    if (minute >= 60) {
      hour += 1;
      minute = 0;
    }
  }

  return slots;
}
