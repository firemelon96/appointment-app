'use client';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';
import { useSidebar } from '@/app/store/use-sidebar';
import Image from 'next/image';

export const Toggle = () => {
  // const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  const { state, dispatch } = useAppointmentContext();
  const { isCollapsed } = state;

  // const iconURL = collapsed
  //   ? './icons/chevron-right.svg'
  //   : './icons/chevron-left.svg';

  const handleClick = () => {
    // if (collapsed) {
    //   onExpand();
    // } else {
    //   onCollapse();
    // }
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
