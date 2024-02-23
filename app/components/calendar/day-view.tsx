'use client';
import React from 'react';
import { format, startOfDay, addHours } from 'date-fns';
import { useAppointment } from '@/app/store/use-appointmen';
import { ConsultationIcon } from '@/public/icons/consultation-icon';
import { UserIcon } from '@/public/icons/user-icon';
import { VerticalIcon } from '@/public/icons/vertical-icon';

const DayView = () => {
  const { onOpen } = useAppointment((state) => state);
  // Create an array of hours from 0 to 23
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const handelDoubleClick = () => {
    onOpen();
    console.log('doublee click');
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
      <div className='p-5 absolute top-40 left-56 w-4/5 bg-[#9747FF]/10 border-2 border-[#9747FF]/50 rounded-xl'>
        <div className='flex gap-2 items-start'>
          <span className='p-2 rounded-full bg-[#9747FF]/20'>
            <ConsultationIcon stroke='#9747FF' />
          </span>
          <div className='flex flex-col gap-1'>
            <h1 className='text-xl text-gray-700'>Meeting</h1>
            <p className='text-gray-600'>10:30 am - 11:00 am</p>
            <span className='flex text-gray-600 gap-1'>
              <UserIcon stroke='#9747FF' /> Jhon Doe
            </span>
          </div>
          <span className='ml-auto'>
            <VerticalIcon stroke='black' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DayView;
