import { addDays, format, isToday, subDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { Button } from '../button';
import DayView from './day-view';
import { BackIcon } from '@/public/icons/back-icon';
import { NextIcon } from '@/public/icons/nextIcon';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';

export const View = () => {
  const {
    state: { isOpen, date },
    dispatch,
  } = useAppointmentContext();

  const [currentDate, setCurrentDate] = useState(date);

  useEffect(() => {
    setCurrentDate(date);
  }, [date]);

  const prev = () => {
    setCurrentDate(subDays(currentDate, 1));
  };

  const next = () => {
    setCurrentDate(addDays(currentDate, 1));
  };

  const handleAppointmenClick = () => {
    dispatch({ type: 'OPEN_FORM' });
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
            {isOpen ? 'Close' : 'Add Appoinment'}
          </Button>
        </div>
      </div>
      <DayView currentDate={currentDate} />
    </div>
  );
};
