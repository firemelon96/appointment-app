import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';
import { useAppointment } from '@/app/store/use-appointmen';
import { useEvent } from '@/app/store/use-event';
import { ConsultationIcon } from '@/public/icons/consultation-icon';
import { InjectIcon } from '@/public/icons/inject-icon';
import { UserIcon } from '@/public/icons/user-icon';
import { VerticalIcon } from '@/public/icons/vertical-icon';
import { addHours, differenceInMinutes, format, startOfDay } from 'date-fns';
import { useState } from 'react';

interface EventCardProps {
  service: string;
  clientName: string;
  startTime: string;
  endTime: string;
  index: number;
  hour: number;
  currentDate: Date;
  id: string;
}

export const EventCard = ({
  service,
  clientName,
  startTime,
  endTime,
  index,
  hour,
  currentDate,
  id,
}: // dayEvents,
EventCardProps) => {
  const { onOpen, onEdit } = useAppointment((state) => state);
  const { dispatch } = useAppointmentContext();
  const { deleteEvent } = useEvent((state) => state);
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const { setEvent } = useEvent((state) => state);

  const handleCardClick = (id: string) => {
    // onOpen();
    // setEvent(id);
    dispatch({ type: 'SET_OPEN_CARD', payload: id });
  };

  const handleOptionClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsOpenOptions((prevState) => !prevState);
  };

  const start = +startTime.split('T')[1].split(':')[0];
  const end = +endTime.split('T')[1].split(':')[0];
  const matchingEvent = start === index;

  const consultation = service === 'Consultation';
  const vaccination = service === 'Vaccination';

  if (start <= hour && end > hour) {
    const eventDuration = differenceInMinutes(
      addHours(startOfDay(currentDate), end),
      addHours(startOfDay(currentDate), start)
    );
    return (
      <div
        className={`p-2 h-full top-12 absolute left-48 w-[81%] ${
          vaccination && 'bg-[#F25D23]/10 border-2 border-[#F25D23]/50'
        } ${
          consultation && 'bg-[#9747FF]/10 border-2 border-[#9747FF]/50'
        } rounded-xl`}
        onClick={() => handleCardClick(id)}
      >
        {matchingEvent && (
          <div className='flex gap-2 items-start'>
            <span
              className={`p-2 rounded-full ${
                vaccination && 'bg-[#F25D23]/20'
              } ${consultation && 'bg-[#9747FF]/20'}`}
            >
              {consultation && <ConsultationIcon stroke='#9747FF' />}
              {vaccination && <InjectIcon fill='#F25D23' />}
            </span>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xl text-gray-700'>
                {vaccination && 'Vaccination'} {consultation && 'Consultation'}
              </h1>
              <p className='text-gray-600'>
                {format(startTime, 'hh:ss a')} - {format(endTime, 'hh:ss a')}
              </p>
              <span className='flex text-gray-600 gap-1'>
                {consultation && <UserIcon stroke='#9747FF' />}{' '}
                {vaccination && <UserIcon stroke='#F25D23' />} {clientName}
              </span>
            </div>
            <span
              className='ml-auto relative'
              onClick={(e) => handleOptionClick(e)}
            >
              <VerticalIcon stroke='black' />
            </span>
            {isOpenOptions && (
              <div className='flex flex-col absolute border z-50 shadow-sm border-gray-400 right-6 rounded-xl bg-gray-200 mr-auto'>
                <button
                  type='button'
                  className='px-3 py-2 text-rose-400'
                  onClick={() => deleteEvent(id)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return null;
};
