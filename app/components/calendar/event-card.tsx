import { useAppointment } from '@/app/store/use-appointmen';
import { AppointmentSchema } from '@/lib/types';
import { ConsultationIcon } from '@/public/icons/consultation-icon';
import { InjectIcon } from '@/public/icons/inject-icon';
import { UserIcon } from '@/public/icons/user-icon';
import { VerticalIcon } from '@/public/icons/vertical-icon';
import { addHours, differenceInMinutes, format, startOfDay } from 'date-fns';

interface EventCardProps {
  service: string;
  clientName: string;
  startTime: string;
  endTime: string;
  index: number;
  hour: number;
  currentDate: Date;
  dayEvents: AppointmentSchema[];
}

export const EventCard = ({
  service,
  clientName,
  startTime,
  endTime,
  index,
  hour,
  currentDate,
  dayEvents,
}: EventCardProps) => {
  const { onOpen } = useAppointment((state) => state);

  const handleCardClick = () => {
    onOpen();
  };

  const start = +startTime.split('T')[1].split(':')[0];
  const end = +endTime.split('T')[1].split(':')[0];
  const matchingEvent = start === index;
  // const matchingEvent = dayEvents.find(
  //   (event) => +event.startTime <= index && +event.endTime > hour
  // );

  console.log(matchingEvent);

  const consultation = service === 'Consultation';
  const vaccination = service === 'Vaccination';

  console.log(start, hour, end, hour);

  if (start <= hour && end > hour) {
    const eventDuration = differenceInMinutes(
      addHours(startOfDay(currentDate), end),
      addHours(startOfDay(currentDate), start)
    );

    // const eventStartTime = addHours(startOfDay(currentDate), start);
    // const minutesFromStartOfDay = differenceInMinutes(
    //   eventStartTime,
    //   startOfDay(new Date())
    // );
    // const top = minutesFromStartOfDay / 60; // Convert minutes to hours

    return (
      <div
        className={`p-2 h-full absolute left-48 w-[81%] ${
          vaccination && 'bg-[#F25D23]/10 border-2 border-[#F25D23]/50'
        } ${
          consultation && 'bg-[#9747FF]/10 border-2 border-[#9747FF]/50'
        } rounded-xl`}
        onClick={handleCardClick}
        // style={{ height: `${eventDuration}px` }}
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
            <span className='ml-auto'>
              <VerticalIcon stroke='black' />
            </span>
          </div>
        )}
      </div>
    );
  }

  return null;
};
