'use client';
import { useAppointment } from '@/app/store/use-appointmen';
import { View } from './view';
import { Info } from './info';

export const Calendar = () => {
  const { isOpen } = useAppointment((state) => state);

  return (
    <div className=''>
      <div className={`grid grid-cols-3 ${isOpen && 'grid-cols-4'}`}>
        <View />
        <Info />
      </div>
    </div>
  );
};
