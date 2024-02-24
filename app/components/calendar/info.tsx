'use client';
import { useAppointment } from '@/app/store/use-appointmen';
import { Avatar } from '../avatar';
import Image from 'next/image';
import { InfoCard } from './info-card';
import { Button } from '../button';
import { VerticalIcon } from '@/public/icons/vertical-icon';
import { useState } from 'react';
import { Form } from './form';

export const Info = () => {
  const { isOpen, isEditing } = useAppointment((state) => state);

  return (
    <div
      className={`bg-gray-200 border-l-2 border-gray-300 col-span-1 ${
        !isOpen && 'hidden'
      }`}
    >
      <div
        className='fixed h-dvh overflow-y-scroll overflow-x-hidden'
        style={{ height: 'calc(100vh - 116px)' }}
      >
        {!isEditing ? (
          <div className='relative overflow-y-auto'>
            <div className='flex items-center px-10 py-7 border-b-2 border-b-gray-300'>
              <Avatar
                name='Chrees Lee'
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
            <InfoCard label='Contact Information' />
            <InfoCard
              withAvatar
              imgUrl='/bldg.jpeg'
              name='Silvervale Towers'
              entity='Los Angeles'
              label='Clinic Details'
            />
            <InfoCard
              label='Pet Details'
              isPet
              imgUrl='/dog.jpeg'
              withAvatar
              name='Brownie'
              entity='Dog'
            />
          </div>
        ) : (
          <Form />
        )}
      </div>
    </div>
  );
};
