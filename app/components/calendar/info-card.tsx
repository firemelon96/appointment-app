import Image from 'next/image';
import { Avatar } from '../avatar';
import { MailIcon } from '@/public/icons/mail-icon';
import { PinIcon } from '@/public/icons/pin-icon';
import { PhoneIcon } from '@/public/icons/phone-icon';
import { BreedIcon } from '@/public/icons/breed-icon';
import { SexIcon } from '@/public/icons/sex-icon';
import { AgeIcon } from '@/public/icons/age-icon';
import { CalendarIcon } from '@/public/icons/calendar-icon';

interface InfoCardProps {
  withAvatar?: boolean;
  name?: string;
  entity?: string;
  label: string;
  isPet?: boolean;
  imgUrl?: string;
}

export const InfoCard = ({
  withAvatar,
  name,
  entity,
  label,
  isPet,
  imgUrl,
}: InfoCardProps) => {
  return (
    <div className='flex flex-col gap-2 px-10 py-5 border-b-2 border-b-gray-300'>
      <span className='text-lg uppercase text-gray-500'>{label}</span>
      {withAvatar && imgUrl && (
        <Avatar
          name={name}
          position={entity}
          width={52}
          height={52}
          alt='avatar'
          src={imgUrl}
          className='h-14 w-14 rounded-full overflow-hidden object-cover'
        />
      )}
      <div className='grid grid-cols-3'>
        <div className='flex flex-col gap-2 text-gray-400'>
          {isPet ? (
            <>
              <span className='flex'>
                <BreedIcon stroke='gray' />
                <p className='ml-2'>Breed</p>
              </span>
              <span className='flex'>
                <SexIcon fill='gray' />
                <p className='ml-2'>Sex</p>
              </span>
              <span className='flex'>
                <AgeIcon stroke='gray' />
                <p className='ml-2'>Age</p>
              </span>
              <span className='flex'>
                <CalendarIcon fill='gray' />
                <p className='ml-2'>Birthday</p>
              </span>
            </>
          ) : (
            <>
              <span className='flex'>
                <MailIcon fill='gray' />
                <p className='ml-2'>Email</p>
              </span>
              <span className='flex'>
                <PhoneIcon stroke='gray' />
                <p className='ml-2'>Phone</p>
              </span>
              <span className='flex'>
                <PinIcon stroke='gray' />
                <p className='ml-2'>Address</p>
              </span>
            </>
          )}
        </div>
        <div className='col-span-2 flex flex-col gap-2 text-gray-600'>
          {isPet ? (
            <>
              <p>French Bulldog</p>
              <p>Male</p>
              <p>10 months</p>
              <p>January 12, 2023</p>
            </>
          ) : (
            <>
              <p>chrissielee@gmail.com</p>
              <p>+01 234 567 8910</p>
              <p>
                1st Avenue, Golden Street,Springville Village, San Diego,
                California
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
