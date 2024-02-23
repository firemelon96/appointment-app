'use client';
import { useSidebar } from '@/app/store/use-sidebar';
import { Search } from './search';
import { Controls } from './controls';

export const Navbar = () => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <header
      className={`fixed flex w-full transition-all z-50 duration-500 p-10 bg-gray-200 h-[116px] border-b-2 border-black/5 ${
        !collapsed ? 'ml-60' : 'ml-[120px]'
      }`}
      style={{ width: `calc(100vw - ${collapsed ? '120px' : '240px'})` }}
    >
      <Search />
      <Controls />
    </header>
  );
};
