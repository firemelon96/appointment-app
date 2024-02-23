'use client';
import { useSidebar } from '@/app/store/use-sidebar';
import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <div
      className={`transition-all duration-500 flex-1 ${
        !collapsed ? 'ml-60' : 'ml-[120px]'
      }`}
    >
      {children}
    </div>
  );
};
