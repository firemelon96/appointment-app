'use client';
import React from 'react';
import { format, startOfDay, addHours } from 'date-fns';
import { useAppointment } from '@/app/store/use-appointmen';
import { ConsultationIcon } from '@/public/icons/consultation-icon';
import { UserIcon } from '@/public/icons/user-icon';
import { VerticalIcon } from '@/public/icons/vertical-icon';
import { EventCard } from './event-card';

const DayView = () => {
  const { onOpen, onEdit } = useAppointment((state) => state);
  // Create an array of hours from 0 to 23
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const handelDoubleClick = () => {
    onEdit();
  };

  return (
    <div className='bg-gray-200 '>
      {hours.map((hour) => (
        <div
          onDoubleClick={handelDoubleClick}
          key={hour}
          className='relative py-10 border-b-2 border-b-gray-300 text-gray-500 cursor-pointer'
        >
          <span className='px-10'>
            {format(addHours(startOfDay(new Date()), hour), 'hh:ss a')}
          </span>
          <div className='absolute top-0 left-40 border-r-2 -z-[5px] border-r-gray-300 h-full'></div>

          {/* You can put your events or other content for each hour here */}
        </div>
      ))}
      <EventCard />
    </div>
  );
};

export default DayView;
