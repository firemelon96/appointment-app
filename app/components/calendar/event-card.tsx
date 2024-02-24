import { useAppointment } from '@/app/store/use-appointmen';
import { ConsultationIcon } from '@/public/icons/consultation-icon';
import { InjectIcon } from '@/public/icons/inject-icon';
import { UserIcon } from '@/public/icons/user-icon';
import { VerticalIcon } from '@/public/icons/vertical-icon';

interface EventCardProps {
  services: 'Consultation' | 'Vaccination';
}

export const EventCard = ({ services }: EventCardProps) => {
  const { onOpen } = useAppointment((state) => state);

  const handleCardClick = () => {
    onOpen();
  };

  const consultation = services === 'Consultation';
  const vaccination = services === 'Vaccination';

  return (
    <div
      className={`p-2 absolute left-48 w-[81%] ${
        services === 'Vaccination' &&
        'bg-[#F25D23]/10 border-2 border-[#F25D23]/50'
      } ${
        services === 'Consultation' &&
        'bg-[#9747FF]/10 border-2 border-[#9747FF]/50'
      } rounded-xl`}
      onClick={handleCardClick}
    >
      <div className='flex gap-2 items-start'>
        <span
          className={`p-2 rounded-full ${vaccination && 'bg-[#F25D23]/20'} ${
            consultation && 'bg-[#9747FF]/20'
          }`}
        >
          {consultation && <ConsultationIcon stroke='#9747FF' />}
          {vaccination && <InjectIcon fill='#F25D23' />}
        </span>
        <div className='flex flex-col gap-1'>
          <h1 className='text-xl text-gray-700'>
            {vaccination && 'Vaccination'} {consultation && 'Consultation'}
          </h1>
          <p className='text-gray-600'>1:30 am - 2:00 am</p>
          <span className='flex text-gray-600 gap-1'>
            {consultation && <UserIcon stroke='#9747FF' />}{' '}
            {vaccination && <UserIcon stroke='#F25D23' />} Chrees Dee
          </span>
        </div>
        <span className='ml-auto'>
          <VerticalIcon stroke='black' />
        </span>
      </div>
    </div>
  );
};
