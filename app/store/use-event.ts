import { AppointmentSchema } from '@/lib/types';
import { create } from 'zustand';

interface EventStore {
  events: AppointmentSchema[];
  addEvent: (event: AppointmentSchema) => void;
  deleteEvent: (id: string) => void;
  updateEvent: (id: string, newData: Partial<AppointmentSchema>) => void;
  event: AppointmentSchema | null;
  setEvent: (id: string) => void;
  clearEvent: () => void;
  searchEvents: (query: string) => void;
}

export const useEvent = create<EventStore>((set) => ({
  event: null,
  events: [
    {
      id: '1',
      service: 'Consultation',
      startTime: '2024-02-25T00:42',
      endTime: '2024-02-25T01:42',
      clientName: 'Marvin gaye',
      phone: '9323227432',
      email: 'mg@gmail.com',
      address: 'sulaimaniyah',
      vetName: 'John Fins',
      petName: 'geeorgy',
      breed: 'azkal',
      age: '27',
      gender: 'male',
      imageUrl: '/dog.jpeg',
      vetAddress: '4517 Washington Avenue, Manchester, Kentucky 39495',
      building: 'Green Bow Vett',
      contact: '+63 0123 123',
      bldgUrl: '/bldg.jpeg',
      birthday: '2013-02-24',
    },
    {
      id: '2',
      service: 'Vaccination',
      startTime: '2024-02-24T13:42',
      endTime: '2024-02-24T14:42',
      clientName: 'Marvin gaye',
      phone: '9944374322',
      email: 'mv@gmail.com',
      address: 'sulaimaniyah',
      vetName: 'John Fins',
      petName: 'pea',
      breed: 'shitzu',
      age: '8',
      gender: 'female',
      imageUrl: './dog.jpeg',
      vetAddress: '4517 Washington Avenue, Manchester, Kentucky 39495',
      building: 'Green Bow Vett',
      contact: '+63 0123 123',
      bldgUrl: '/bldg.jpeg',
      birthday: '2013-02-24',
    },
    {
      id: '3',
      service: 'Vaccination',
      startTime: '2024-02-26T13:42',
      endTime: '2024-02-26T14:42',
      clientName: 'Jerald po',
      phone: '99837322',
      email: 'ejp@gmail.com',
      address: 'Riyadh',
      vetName: 'John Fins',
      petName: 'link',
      breed: 'Bull',
      age: '23',
      gender: 'male',
      imageUrl: './dog.jpeg',
      vetAddress: '4517 Washington Avenue, Manchester, Kentucky 39495',
      building: 'Green Bow Vett',
      contact: '+63 0123 123',
      bldgUrl: '/bldg.jpeg',
      birthday: '2013-02-24',
    },
  ],
  setEvent: (id) =>
    set((state) => ({ event: state.events.find((event) => event.id === id) })),
  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, event],
    })),
  deleteEvent: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    })),
  updateEvent: (id, newData) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === id ? { ...event, ...newData } : event
      ),
    })),
  searchEvents: (query) =>
    set((state) => ({
      ...state,
      events: state.events.filter((event) =>
        event.clientName.toLowerCase().includes(query.toLowerCase())
      ),
    })),
  clearEvent: () => set(() => ({ event: null })),
}));

export const getSingleEventById = (id: string) => {
  return useEvent((state) => state.events.find((event) => event.id === id));
};
