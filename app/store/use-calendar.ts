import { create } from 'zustand';

interface CalendarStore {
  date: Date;
  setDate: (newDate: string) => void;
}

export const useCalendar = create<CalendarStore>((set) => ({
  date: new Date(),
  setDate: (newDate) => set(() => ({ date: new Date(newDate) })),
}));
