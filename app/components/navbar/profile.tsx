import Image from 'next/image';

export const Profile = () => {
  return (
    <>
      <Image
        src='/profile.png'
        height={36}
        width={36}
        alt='profile'
        className='rounded-full w-9 h-9 overflow-hidden object-cover'
      />{' '}
      <span className='text-[11px] text-gray-600'>Jane Dee</span>{' '}
      <button>
        <Image
          src='./icons/chevron-down.svg'
          width={20}
          height={20}
          alt='more'
        />
      </button>
    </>
  );
};
