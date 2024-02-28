'use client';

import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';
import { ReactNode } from 'react';

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
}

export const NavItem = ({ icon, label }: NavItemProps) => {
  const {
    state: { isCollapsed },
  } = useAppointmentContext();

  return (
    <li className='relative group px-10 py-5 text-white hover:cursor-pointer hover:text-[#FF630B]'>
      <div
        className={`flex space-x-2 ${
          isCollapsed && 'justify-center items-center'
        }`}
      >
        {icon}
        {!isCollapsed && <span className='truncate'>{label}</span>}
      </div>
      <div className='opacity-0 group-hover:opacity-100 w-1 absolute h-full top-0 right-0 bg-[#FF630B]' />
    </li>
  );
};
