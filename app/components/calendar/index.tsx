'use client';
import { useAppointment } from '@/app/store/use-appointmen';
import { useSidebar } from '@/app/store/use-sidebar';
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameMonth,
  startOfMonth,
  subMonths,
} from 'date-fns';
import { useState } from 'react';
import { Button } from '../button';
import { View } from './view';
import { Info } from './info';
import { Avatar } from '../avatar';

export const Calendar = () => {
  const { isOpen, onOpen, onClose } = useAppointment((state) => state);

  return (
    <div className=''>
      <div className={`grid grid-cols-3 ${isOpen && 'grid-cols-4'}`}>
        <View />
        <Info />
      </div>
    </div>
  );
};
