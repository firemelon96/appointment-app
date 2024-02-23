'use client';

import { useSidebar } from '@/app/store/use-sidebar';
import Image from 'next/image';

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
}

export const NavItem = ({ icon, label, href }: NavItemProps) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <li className='relative group px-10 py-5 text-white hover:cursor-pointer hover:text-[#FF630B]'>
      <div
        className={`flex space-x-2 ${
          collapsed && 'justify-center items-center'
        }`}
      >
        <Image
          priority
          src={icon}
          width={20}
          height={20}
          alt='icon'
          className='hover:text-[#FF630B]'
        />
        {!collapsed && <span className='truncate'>{label}</span>}
      </div>
      <div className='opacity-0 group-hover:opacity-100 w-1 absolute h-full top-0 right-0 bg-[#FF630B]' />
    </li>
  );
};
