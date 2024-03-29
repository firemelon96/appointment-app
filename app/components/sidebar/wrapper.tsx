'use client';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';
import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  const {
    state: { isCollapsed },
  } = useAppointmentContext();

  return (
    <aside
      className={`fixed left-0 w-60 bg-[#1C1C1E] z-50 h-full transition-all ease-in-out duration-500 ${
        isCollapsed && 'w-[120px]'
      }`}
    >
      {children}
    </aside>
  );
};
