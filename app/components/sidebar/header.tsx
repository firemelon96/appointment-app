'use client';
import { useSidebar } from '@/app/store/use-sidebar';
import { Logo } from './Logo';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';

export const Header = () => {
  // const { collapsed } = useSidebar((state) => state);
  const {
    state: { isCollapsed },
  } = useAppointmentContext();
  return (
    <>
      <div className='flex items-center justify-center p-10'>
        <Logo />{' '}
        {!isCollapsed && (
          <span className='ml-2 font-bold text-xl text-[#FF630B]'>LOREM</span>
        )}
      </div>
      <hr className='border-gray-600' />
    </>
  );
};
