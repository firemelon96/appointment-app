'use client';
import { View } from './view';
import { Info } from './info';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';

export const Calendar = () => {
  const {
    state: { isOpen },
  } = useAppointmentContext();

  return (
    <div className=''>
      <div className={`grid grid-cols-3 ${isOpen && 'grid-cols-4'}`}>
        <View />
        <Info />
      </div>
    </div>
  );
};
