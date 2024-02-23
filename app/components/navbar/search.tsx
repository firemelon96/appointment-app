import Image from 'next/image';

export const Search = () => {
  return (
    <form className='flex relative bg-gray-300 rounded-xl w-1/2 flex-grow'>
      <input
        placeholder='Search...'
        type='text'
        className='bg-transparent py-2 px-4 focus-visible:ring-0  focus-visible:ring-transparent focus-visible:ring-offset-0 w-full rounded-xl text-gray-600'
      />
      <button className='absolute right-2 inset-y-0'>
        <Image src='./icons/search.svg' width={20} height={20} alt='search' />
      </button>
    </form>
  );
};
