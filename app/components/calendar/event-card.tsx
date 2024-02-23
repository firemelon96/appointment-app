import { useAppointment } from '@/app/store/use-appointmen';
import { ConsultationIcon } from '@/public/icons/consultation-icon';
import { InjectIcon } from '@/public/icons/inject-icon';
import { UserIcon } from '@/public/icons/user-icon';
import { VerticalIcon } from '@/public/icons/vertical-icon';

export const EventCard = () => {
  const { onOpen } = useAppointment((state) => state);

  const handleCardClick = () => {
    onOpen();
  };
  return (
    <div
      className='p-5 absolute top-80 left-48 w-3/4 bg-[#F25D23]/10 border-2 border-[#F25D23]/50 rounded-xl'
      onClick={handleCardClick}
    >
      <div className='flex gap-2 items-start'>
        <span className='p-2 rounded-full bg-[#F25D23]/20'>
          <InjectIcon fill='#F25D23' />
        </span>
        <div className='flex flex-col gap-1'>
          <h1 className='text-xl text-gray-700'>Vaccination</h1>
          <p className='text-gray-600'>1:30 am - 2:00 am</p>
          <span className='flex text-gray-600 gap-1'>
            <UserIcon stroke='#F25D23' /> Chrees Dee
          </span>
        </div>
        <span className='ml-auto'>
          <VerticalIcon stroke='black' />
        </span>
      </div>
    </div>
  );
};
