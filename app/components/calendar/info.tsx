'use client';
import { Avatar } from '../avatar';
import { InfoCard } from './info-card';
import { VerticalIcon } from '@/public/icons/vertical-icon';
import { Form } from './form';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';

export const Info = () => {
  const {
    state: { isOpen, isEditing, appointment },
    dispatch,
  } = useAppointmentContext();

  const handleEdit = () => {
    dispatch({ type: 'EDIT_INFO' });
  };

  const handleDeleteClick = (id: string) => {
    dispatch({
      type: 'DELETE_APPOINTMENT',
      payload: id,
    });
  };

  return (
    <div
      className={`bg-gray-200 border-l-2 border-gray-300 col-span-1 ${
        !isOpen && 'hidden'
      }`}
    >
      <div
        className='fixed h-dvh overflow-y-scroll'
        style={{ height: 'calc(100vh - 116px)' }}
      >
        {!isEditing ? (
          <div className='relative w-auto overflow-y-auto'>
            <div className='flex items-center px-10 py-7 border-b-2 border-b-gray-300'>
              <Avatar
                name={appointment?.clientName}
                position='Client '
                src='/pic.png'
                width={80}
                height={80}
                alt='profile'
                className='w-20 h-20 rounded-full overflow-hidden object-cover'
              />
              <button className='ml-auto text-gray-800'>
                <VerticalIcon stroke='gray' />
              </button>
            </div>
            <InfoCard
              label='Contact Information'
              email={appointment?.email}
              address={appointment?.address}
              phone={appointment?.phone}
            />
            <InfoCard
              withAvatar
              imgUrl={appointment?.bldgUrl}
              name={appointment?.vetName}
              entity={appointment?.building}
              email='client@gmail.com'
              address={appointment?.vetAddress}
              phone={appointment?.contact}
              label='Clinic Details'
            />
            <InfoCard
              label='Pet Details'
              isPet
              imgUrl='/dog.jpeg'
              withAvatar
              name={appointment?.petName}
              entity='Dog'
              breed={appointment?.breed}
              sex={appointment?.gender}
              age={appointment?.age}
              birthday={appointment?.endTime}
            />

            <div className='flex w-full flex-col gap-4 p-10'>
              <button
                className='flex items-center justify-center bg-orange-400 px-4 py-2 w-full rounded-md'
                onClick={handleEdit}
              >
                Reschedule Appointment
              </button>
              <button
                className='flex border border-gray-500 text-gray-500 items-center justify-center bg-transparent px-4 py-2 w-full rounded-md'
                onClick={() => handleDeleteClick(appointment?.id!)}
              >
                Cancel Appoinment
              </button>
            </div>
          </div>
        ) : (
          <Form />
        )}
      </div>
    </div>
  );
};
