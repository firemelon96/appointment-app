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
          <BellIcon stroke='gray' />
        </button>
        <button className='p-2 bg-[#F2F2F1] rounded-full'>
          <SettingIcon fill='gray' />
        </button>
        <button className='p-2 bg-[#F2F2F1] rounded-full'>
          <SignOut fill='gray' />
        </button>
      </div>
    </div>
  );
};
