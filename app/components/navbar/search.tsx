import { useCalendar } from '@/app/store/use-calendar';
import { useEvent } from '@/app/store/use-event';
import Image from 'next/image';
import { useState } from 'react';
import { EventCard } from '../calendar/event-card';

export const Search = () => {
  const [searchQuery, setsearchQuery] = useState('');
  const [search, setSearch] = useState(false);
  const { setDate } = useCalendar((state) => state);

  const { searchEvents, events } = useEvent((state) => state);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchQuery(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('search');
    searchEvents(searchQuery);
    setSearch(true);
  };

  const handleClick = (startTime: string) => {
    console.log(startTime);
    setDate(startTime);
    setSearch(false);
  };

  return (
    <>
      <form className='flex relative bg-gray-300 rounded-xl w-1/2 flex-grow'>
        <input
          placeholder='Search...'
          type='text'
          onChange={handleSearchChange}
          className='bg-transparent py-2 px-4 focus-visible:ring-0  focus-visible:ring-transparent focus-visible:ring-offset-0 w-full rounded-xl text-gray-600'
        />
        <button
          type='submit'
          onClick={handleSearch}
          className='absolute right-2 inset-y-0'
        >
          <Image src='./icons/search.svg' width={20} height={20} alt='search' />
        </button>
      </form>
      {search && (
        <div className='absolute h-auto flex-grow bg-gray-200 top-20 w-3/4 p-5 shadow-lg rounded-md'>
          <ul>
            {events.map((event) => (
              <li
                onClick={() => {
                  setDate(event.startTime);
                  setSearch(false);
                }}
                className={`flex cursor-pointer flex-col p-2 m-3 ${
                  event.service === 'Vaccination' &&
                  'bg-[#F25D23]/10 border-2 border-[#F25D23]/50'
                } ${
                  event.service === 'Consultation' &&
                  'bg-[#9747FF]/10 border-2 border-[#9747FF]/50'
                } rounded-xl`}
              >
                <h1
                  className={`${
                    event.service === 'Vaccination' && 'text-[#F25D23]/80'
                  } ${event.service === 'Consultation' && 'text-[#9747FF]/80'}`}
                >
                  {event.service}
                </h1>
                <span
                  className={`${
                    event.service === 'Vaccination' && 'text-[#F25D23]/50'
                  } ${event.service === 'Consultation' && 'text-[#9747FF]/50'}`}
                >
                  {event.clientName}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
