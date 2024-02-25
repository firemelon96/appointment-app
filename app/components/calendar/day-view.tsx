'use client';
import React, { useEffect } from 'react';
import { format, startOfDay, addHours } from 'date-fns';
import { useAppointment } from '@/app/store/use-appointmen';
import { EventCard } from './event-card';
import { useEvent } from '@/app/store/use-event';

interface DayViewProps {
  currentDate: Date;
}

const DayView = ({ currentDate }: DayViewProps) => {
  const { showForm } = useAppointment((state) => state);
  const { events, clearEvent } = useEvent((state) => state);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  useEffect(() => {
    events.map((event) => {
      const utcDate = new Date(event.startTime).getUTCDate();
      const utcMonth = new Date(event.startTime).getUTCMonth();
      const utcYear = new Date(event.startTime).getUTCFullYear();
      console.log(`${utcMonth} ${utcDate}, ${utcYear}`);
    });
  }, [events]);

  const dayEvents = events.filter((event) => {
    const date = new Date(event.startTime);
    const eventDate = `${date.getMonth()} ${date.getDay()}`;
    const dateView = `${currentDate.getMonth()} ${currentDate.getDay()}`;
    return eventDate === dateView;
  });

  const handelDoubleClick = () => {
    showForm();
    clearEvent();
  };

  return (
    <div className=' bg-gray-200'>
      {hours.map((hour, index) => (
        <div
          onDoubleClick={handelDoubleClick}
          key={hour}
          className='relative py-10 border-b-2 border-b-gray-300 text-gray-500 cursor-pointer'
        >
          <span className='px-10'>
            {format(addHours(startOfDay(currentDate), hour), 'hh:ss a')}
          </span>
          <div className='absolute top-0 left-40 border-r-2 -z-[5px] border-r-gray-300 h-full'></div>

          {dayEvents?.map((event) => (
            <EventCard
              key={event.id}
              service={event.service}
              clientName={event.clientName}
              startTime={event.startTime}
              endTime={event.endTime}
              index={index}
              hour={hour}
              currentDate={currentDate}
              id={event.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DayView;
