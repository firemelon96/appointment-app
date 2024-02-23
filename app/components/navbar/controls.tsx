import Image from 'next/image';
import { Profile } from './profile';
import { SettingIcon } from '@/public/icons/settingIcon';
import BellIcon from '@/public/icons/bellIcon';
import { SignOut } from '@/public/icons/sign-out';

export const Controls = () => {
  return (
    <div className='flex ml-10 items-center justify-end space-x-2'>
      <Profile />
      <div className='flex space-x-2'>
        <button className='p-2 bg-[#F2F2F1] rounded-full'>
          {/* <Image
            src='./icons/setting.svg'
            width={20}
            height={20}
            alt='setting'
            className='fill-black'
          /> */}
          <BellIcon stroke='gray' />
        </button>
        <button className='p-2 bg-[#F2F2F1] rounded-full'>
          {/* <Image
            src='./icons/setting.svg'
            width={20}
            height={20}
            alt='setting'
            className='fill-black'
          /> */}
          <SettingIcon fill='gray' />
        </button>
        <button className='p-2 bg-[#F2F2F1] rounded-full'>
          {/* <Image
            src='./icons/setting.svg'
            width={20}
            height={20}
            alt='setting'
            className='fill-black'
          /> */}
          <SignOut fill='gray' />
        </button>
      </div>
    </div>
  );
};
