'use client';
import { useSidebar } from '@/app/store/use-sidebar';
import { Logo } from './Logo';

export const Header = () => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <>
      <div className='flex items-center justify-center p-10'>
        <Logo />{' '}
        {!collapsed && (
          <span className='ml-2 font-bold text-xl text-[#FF630B]'>LOREM</span>
        )}
      </div>
      <hr className='border-gray-600' />
    </>
  );
};
