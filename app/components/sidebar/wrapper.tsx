'use client';
import { useSidebar } from '@/app/store/use-sidebar';
import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <aside
      className={`fixed left-0 w-60 bg-[#1C1C1E] z-50 h-full transition-all ease-in-out duration-500 ${
        collapsed && 'w-[120px]'
      }`}
    >
      {children}
    </aside>
  );
};
