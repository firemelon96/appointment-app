'use client';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';
import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  const {
    state: { isCollapsed },
  } = useAppointmentContext();
  return (
    <div
      className={`transition-all duration-500 flex-1 ${
        !isCollapsed ? 'ml-60' : 'ml-[120px]'
      }`}
    >
      {children}
    </div>
  );
};
