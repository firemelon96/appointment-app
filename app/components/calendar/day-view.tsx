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
  // const hours = Array.from({ length: 24 }, (_, i) => i);
  const hours = generateHours(currentDate);

  console.log(hours);

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
          {events?.map((event) => {
            const start = +event.startTime.split(':')[0];
            const end = +event.endTime.split(':')[0];
            const matchingEvent = events.find(
              (event) => +event.startTime.split(':')[0] === index
            );

            if (start <= hour && end > hour) {
              const eventDuration = differenceInMinutes(
                addHours(startOfDay(new Date()), end),
                addHours(startOfDay(new Date()), start)
              );
              console.log(eventDuration);
              return (
                <div
                  key={event.service}
                  className='left-48 absolute w-[80%] top-10  bg-orange-300 p-2'
                  style={{
                    height: `${eventDuration + 60}px`,
                  }}
                >
                  {matchingEvent && (
                    <span className=''>
                      {event.startTime} - {event.endTime}
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
