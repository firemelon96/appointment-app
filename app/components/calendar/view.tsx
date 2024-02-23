import { addMonths, format, isToday, subMonths } from 'date-fns';
import { useState } from 'react';
import { Button } from '../button';
import { useAppointment } from '@/app/store/use-appointmen';
import DayView from './day-view';
import { BackIcon } from '@/public/icons/back-icon';
import { NextIcon } from '@/public/icons/nextIcon';

export const View = () => {
  const { onEdit } = useAppointment((state) => state);
  const [currentDate, setCurrentDate] = useState(new Date());

  const prev = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const next = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleAppointmenClick = () => {
    onEdit();
  };

  const today = isToday(currentDate);

  return (
    <div className='w-full col-span-3 bg-[#D8D3CC] relative z-0'>
      <div className='flex bg-gray-200 px-10 py-5 justify-between items-center border-b-2 border-black/5'>
        <div className='flex-col items-center mb-4 text-gray-500'>
          <p>Appointment</p>
          <div className='flex items-center gap-2 text-xl text-gray-700'>
            <h2>{format(currentDate, 'MMMM')}</h2>
            <button className='p-2 bg-gray-300 rounded-full' onClick={prev}>
              <BackIcon fill='gray' />
            </button>
            <button className='p-2 bg-gray-300 rounded-full' onClick={next}>
              <NextIcon fill='gray' />
            </button>
          </div>
          {today ? (
            <p>Today is {format(currentDate, 'EEEE, MMMM d, y')}</p>
          ) : (
            <p>{format(currentDate, 'EEEE, MMMM d, y')}</p>
          )}
        </div>
        {/* <div className='flex'>
          <button className='p-2 bg-gray-400 rounded-l-md'>Day</button>
          <button className='p-2 bg-gray-400 rounded-r-md'>Month</button>
        </div> */}
        <div className='text-white'>
          <Button primary onClick={handleAppointmenClick}>
            New Appointment
          </Button>
        </div>
      </div>
      <DayView />
    </div>
  );
};
