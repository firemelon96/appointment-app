'use client';

import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';
import { ReactComponentElement, ReactNode } from 'react';
import { useSidebar } from '@/app/store/use-sidebar';
import Image from 'next/image';

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
}

export const NavItem = ({ icon, label, href }: NavItemProps) => {
  // const { collapsed } = useSidebar((state) => state);
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
        {/* <Image
          priority
          src={icon}
          width={20}
          height={20}
          alt='icon'
          className='hover:text-[#FF630B]'
        /> */}
        {icon}
        {!isCollapsed && <span className='truncate'>{label}</span>}
      </div>
      <div className='opacity-0 group-hover:opacity-100 w-1 absolute h-full top-0 right-0 bg-[#FF630B]' />
    </li>
  );
};
