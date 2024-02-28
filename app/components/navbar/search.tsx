import Image from 'next/image';
import { useState } from 'react';
import { format } from 'date-fns';
import { useAppointmentContext } from '@/app/hooks/use-appoinment-hook';

export const Search = () => {
  const {
    state: { appointments },
    dispatch,
  } = useAppointmentContext();
  const [searchQuery, setsearchQuery] = useState('');
  // const [search, setSearch] = useState(false);
  // const { setDate } = useCalendar((state) => state);
  const [showResult, setshowResult] = useState(false);

  // const { searchEvents, events } = useEvent((state) => state);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchQuery(e.target.value);
    setshowResult(true);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  const handleClickResult = (startTime: string) => {
    dispatch({ type: 'GOTO_RESULT', payload: startTime });
    setshowResult(false);
    console.log(appointments);
    // console.log(date)
  };

  const filterSearch = appointments.filter(
    (appointment) =>
      appointment.clientName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      appointment.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      {searchQuery.length > 0 && showResult && (
        <div className='absolute z-40 h-auto flex-grow bg-gray-200 top-20 w-3/4 p-5 shadow-lg rounded-md'>
          <ul>
            {filterSearch.map((event) => (
              <li
                onClick={() => handleClickResult(event.startTime)}
                key={event.id}
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
                  {format(event.startTime, 'EEEE, MMMM d, y')}
                </span>
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
      {filterSearch.length === 0 && (
        <div className='absolute z-40 h-auto flex-grow bg-gray-200 top-20 w-3/4 p-5 shadow-lg rounded-md'>
          <p className='text-gray-400'>No results</p>
        </div>
      )}
    </>
  );
};
