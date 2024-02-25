import { AppointmentSchema } from '@/lib/types';
import { create } from 'zustand';

interface EventStore {
  events: AppointmentSchema[];
  addEvent: (event: AppointmentSchema) => void;
  isUpdated: boolean;
}

export const useEvent = create<EventStore>((set) => ({
  events: [
    {
      service: 'Consultation',
      startTime: '2024-02-25T00:42',
      endTime: '2024-02-25T03:42',
      clientName: 'estong',
      email: 'elhamwiameermoussa@gmail.com',
      address: 'sulaimaniyah',
      vetName: 'John Fins',
      petName: 'dfsdf',
      breed: 'fdsf',
      age: '27',
      gender: 'mle',
      imageUrl: 'dfa',
    },
    {
      service: 'Vaccination',
      startTime: '2024-02-24T13:42',
      endTime: '2024-02-24T14:42',
      clientName: 'estong',
      email: 'elhamwiameermoussa@gmail.com',
      address: 'sulaimaniyah',
      vetName: 'John Fins',
      petName: 'dfsdf',
      breed: 'fdsf',
      age: '27',
      gender: 'mle',
      imageUrl: 'dfa',
    },
  ],
  isUpdated: false,
  addEvent: (event) =>
    set((state) => ({ events: [...state.events, event], isUpdated: true })),
}));
