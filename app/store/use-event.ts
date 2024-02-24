import { AppointmentSchema } from '@/lib/types';
import { create } from 'zustand';

interface EventStore {
  events: AppointmentSchema[];
  addEvent: (event: AppointmentSchema) => void;
  isUpdated: boolean;
}

export const useEvent = create<EventStore>((set) => ({
  events: [],
  isUpdated: false,
  addEvent: (event) =>
    set((state) => ({ events: [...state.events, event], isUpdated: true })),
}));
