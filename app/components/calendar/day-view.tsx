'use client';
import React, { useEffect, useState } from 'react';
import { format, startOfDay, addHours, differenceInMinutes } from 'date-fns';
import { useAppointment } from '@/app/store/use-appointmen';
import { EventCard } from './event-card';
import { useEvent } from '@/app/store/use-event';
import { AppointmentSchema } from '@/lib/types';
import { generateHours } from '@/lib/generate-hours';

interface DayViewProps {
  currentDate: Date;
}

const DayView = ({ currentDate }: DayViewProps) => {
  const { onOpen, onEdit } = useAppointment((state) => state);
  const { events } = useEvent((state) => state);

  // Create an array of hours from 0 to 23
  const hours = Array.from({ length: 24 }, (_, i) => i);
  // const hours = generateHours(currentDate);

  // console.log(hours);

  // const filterEventsForDate = (events, date) => {
  //   return events.filter((event) => {
  //     const eventDate = startOfDay(event.date);
  //     return eventDate.getTime() === startOfDay(date).getTime();
  //   });
  // };

  console.log(currentDate);
  console.log(events);

  const filteredEvents = events.filter((event) => {
    const date = new Date(event.startTime);
    const eventDate = `${date.getMonth()} ${date.getDay()}`;
    const dateView = `${currentDate.getMonth()} ${currentDate.getDay()}`;
    return eventDate === dateView;
  });

  const handelDoubleClick = () => {
    // onEdit();
  };

  return (
    <div className=' bg-gray-200'>
      {hours.map((hour, index) => (
        <div
          // onDoubleClick={handelDoubleClick}
          key={hour}
          className='relative py-10 border-b-2 border-b-gray-300 text-gray-500 cursor-pointer'
        >
          <span className='px-10'>
            {format(addHours(startOfDay(currentDate), hour), 'hh:ss a')}
          </span>
          <div className='absolute top-0 left-40 border-r-2 -z-[5px] border-r-gray-300 h-full'></div>

          {/* You can put your events or other content for each hour here */}
          {filteredEvents?.map((event) => {
            const start = +event.startTime.split('T')[1].split(':')[0];
            const end = +event.endTime.split('T')[1].split(':')[0];
            // const matchingEvent = filteredEvents.find(
            //   (event) => +event.startTime.split('T')[1].split(':')[0] === index
            // );

            const matchingEvent = start === index;

            if (start <= hour && end > hour) {
              const eventDuration = differenceInMinutes(
                addHours(startOfDay(currentDate), end),
                addHours(startOfDay(currentDate), start)
              );

              console.log(eventDuration);
              return (
                <div
                  key={event.service}
                  className='left-48 absolute w-[80%] top-10  bg-orange-300 p-2'
                  style={{
                    height: `${
                      eventDuration > 60 ? eventDuration : eventDuration * 2
                    }px`,
                  }}
                >
                  {matchingEvent && (
                    <span className=''>
                      {format(event.startTime, 'hh:ss a')} -{' '}
                      {format(event.endTime, 'hh:ss a')}
                    </span>
                  )}
                </div>
              );
            }
            return null;
          })}
          {/* <EventCard services='Vaccination' /> */}
        </div>
      ))}
    </div>
  );
};

export default DayView;
