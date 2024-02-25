import { addDays, format, isToday, subDays } from 'date-fns';
import { useState } from 'react';
import { Button } from '../button';
import { useAppointment } from '@/app/store/use-appointmen';
import DayView from './day-view';
import { BackIcon } from '@/public/icons/back-icon';
import { NextIcon } from '@/public/icons/nextIcon';
import { useEvent } from '@/app/store/use-event';
import { useCalendar } from '@/app/store/use-calendar';

export const View = () => {
  const { showForm } = useAppointment((state) => state);
  const { date } = useCalendar((state) => state);
  const [currentDate, setCurrentDate] = useState(date);

  const { clearEvent } = useEvent((state) => state);

  const prev = () => {
    setCurrentDate(subDays(currentDate, 1));
  };

  const next = () => {
    setCurrentDate(addDays(currentDate, 1));
  };

  const handleAppointmenClick = () => {
    showForm();
    clearEvent();
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
        <div className='text-white'>
          <Button primary onClick={handleAppointmenClick}>
            New Appointment
          </Button>
        </div>
      </div>
      <DayView currentDate={currentDate} />
    </div>
  );
};
