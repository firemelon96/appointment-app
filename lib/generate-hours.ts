import { addHours, format, startOfDay } from 'date-fns';

export const generateHours = (dateTime: Date) => {
  // const startOfGivenDay = startOfDay(dateTime);
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = addHours(dateTime, i);
    return hour.getHours(); // Return only the hour number (0-23)
  });
  return hours;
};
