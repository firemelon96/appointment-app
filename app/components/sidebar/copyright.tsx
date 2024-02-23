import { Logo } from './Logo';

export const Copyright = () => {
  return (
    <div className='absolute bottom-0 w-full p-4'>
      <hr className='border-gray-600' />
      <footer className='flex flex-col items-center justify-center pt-8 space-y-2'>
        <Logo h={20} w={20} />
        <p className='text-gray-300 text-xs'>
          &copy;
          <span>Lorem 2023</span>
        </p>
      </footer>
    </div>
  );
};
