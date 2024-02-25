'use client';
import { useAppointment } from '@/app/store/use-appointmen';
import { Avatar } from '../avatar';
import Image from 'next/image';
import { InfoCard } from './info-card';
import { Button } from '../button';
import { VerticalIcon } from '@/public/icons/vertical-icon';
import { useState } from 'react';
import { Form } from './form';
import { useEvent } from '@/app/store/use-event';

export const Info = () => {
  const { isOpen, isEditing, isShow, onEdit, onClose, showForm } =
    useAppointment((state) => state);
  const { event } = useEvent((state) => state);

  const handleEdit = () => {
    // showForm();
    onEdit();
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
        {!isEditing && event ? (
          <div className='relative w-auto overflow-y-auto'>
            <div className='flex items-center px-10 py-7 border-b-2 border-b-gray-300'>
              <Avatar
                name={event?.clientName}
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
              email={event.email}
              address={event.address}
              phone={event.phone}
            />
            <InfoCard
              withAvatar
              imgUrl='/bldg.jpeg'
              name={event.vetName}
              entity={event.building}
              email='client@gmail.com'
              address={event.vetAddress}
              phone={event.contact}
              label='Clinic Details'
            />
            <InfoCard
              label='Pet Details'
              isPet
              imgUrl='/dog.jpeg'
              withAvatar
              name={event.petName}
              entity='Dog'
              breed={event.breed}
              sex={event.gender}
              age={event.age}
              birthday={event.endTime}
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
                onClick={() => onClose()}
              >
                Cancel Appoinment
              </button>
            </div>
          </div>
        ) : (
          <Form event={event!} isEditing={isEditing} />
        )}
      </div>
    </div>
  );
};
