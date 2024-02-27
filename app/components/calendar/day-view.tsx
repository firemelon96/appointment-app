'use client';
import React, { useEffect } from 'react';
import { format, startOfDay, addHours } from 'date-fns';
import { EventCard } from './event-card';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';

interface DayViewProps {
  currentDate: Date;
}

const DayView = ({ currentDate }: DayViewProps) => {
  const {
    state: { appointments },
    dispatch,
  } = useAppointmentContext();

  const hours = Array.from({ length: 24 }, (_, i) => i);

  const dayEvents = appointments.filter((appoinment) => {
    return (
      format(new Date(appoinment.startTime), 'yyyy MMM, d') ===
      format(currentDate, 'yyyy MMM, d')
    );
  });

  const handelDoubleClick = () => {
    dispatch({ type: 'OPEN_FORM' });
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
