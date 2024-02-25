import { addHours, differenceInMinutes, startOfDay } from 'date-fns';
import { AppointmentSchema } from './types';

const calculatePositionAndHeight = (event: AppointmentSchema) => {
  const eventStartTime = addHours(startOfDay(new Date()), +event.startTime);
  const eventEndTime = addHours(startOfDay(new Date()), +event.endTime);
  const minutesFromStartOfDay = differenceInMinutes(
    eventStartTime,
    startOfDay(new Date())
  );
  const minutesFromEndOfDay = differenceInMinutes(
    eventEndTime,
    startOfDay(new Date())
  );
  const top = minutesFromStartOfDay / 60; // Convert minutes to hours
  const height = (minutesFromEndOfDay - minutesFromStartOfDay) / 60; // Convert minutes to hours
  return { top, height };
};
