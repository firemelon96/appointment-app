'use client';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';
import Image from 'next/image';

export const Toggle = () => {
  const { state, dispatch } = useAppointmentContext();
  const { isCollapsed } = state;

  const handleClick = () => {
    dispatch({ type: 'SET_COLLAPSE' });
  };

  const iconURL = isCollapsed
    ? './icons/chevron-right.svg'
    : './icons/chevron-left.svg';

  return (
    <button
      className='text-white absolute -right-5 top-1/2 p-4 rounded-md z-50 bg-[hsl(280,3%,17%)]'
      onClick={handleClick}
    >
      <Image src={iconURL} alt='back' width={15} height={20} />
    </button>
  );
};
