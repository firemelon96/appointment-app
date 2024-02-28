'use client';
import { ReactNode, createContext, useReducer } from 'react';

interface Appointment {
  id: string;
  service: string;
  startTime: string;
  endTime: string;
  clientName: string;
  phone: string;
  email: string;
  address: string;
  vetName: string;
  petName: string;
  breed: string;
  age: string;
  gender: string;
  imageUrl: string;
  vetAddress: string;
  building: string;
  contact: string;
  bldgUrl: string;
  birthday: string;
}

interface IState {
  isOpen: boolean;
  isEditing: boolean;
  isCollapsed: boolean;
  appointment: Appointment | undefined;
  appointments: Appointment[];
  date: Date;
}

type TAction =
  | { type: 'OPEN_FORM' }
  | { type: 'CREATE_APPOINTMENT'; payload: Appointment }
  | {
      type: 'UPDATE_APPOINTMENT';
      payload: { id: string; data: Partial<Appointment> };
    }
  | { type: 'DELETE_APPOINTMENT'; payload: string }
  | { type: 'SET_OPEN_CARD'; payload: string }
  | { type: 'SET_COLLAPSE' }
  | { type: 'EDIT_INFO' }
  | { type: 'SEARCH_APPOINTMENT'; payload: string }
  | { type: 'GOTO_RESULT'; payload: string };

const initValue: IState = {
  isOpen: false,
  isEditing: false,
  isCollapsed: false,
  appointment: undefined,
  appointments: [
    {
      id: '1',
      service: 'Consultation',
      startTime: '2024-02-25T00:42',
      endTime: '2024-02-25T01:42',
      clientName: 'Franky ski',
      phone: '9323227432',
      email: 'mgg@gmail.com',
      address: 'Japan',
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
      startTime: '2024-02-28T00:42',
      endTime: '2024-02-28T01:42',
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
      id: '3',
      service: 'Consultation',
      startTime: '2024-02-29T00:42',
      endTime: '2024-02-29T01:42',
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
      id: '5',
      service: 'Vaccination',
      startTime: '2024-02-29T03:42',
      endTime: '2024-02-29T04:42',
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
      id: '4',
      service: 'Vaccination',
      startTime: '2024-03-01T00:42',
      endTime: '2024-03-01T01:42',
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
  ],
  date: new Date(),
};

export const AppointmentContext = createContext<
  { state: IState; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

const reducerFn = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'SET_COLLAPSE':
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      };
    case 'SET_OPEN_CARD':
      return {
        ...state,
        isOpen: true,
        isEditing: false,
        appointment: state.appointments.find(
          (appointment) => appointment.id === action.payload
        ),
      };
    case 'OPEN_FORM':
      return {
        ...state,
        isOpen: !state.isOpen,
        isEditing: true,
        appointment: undefined,
      };
    case 'CREATE_APPOINTMENT':
      return {
        ...state,
        appointments: [action.payload, ...state.appointments],
        isOpen: false,
      };
    case 'UPDATE_APPOINTMENT':
      return {
        ...state,
        appointments: state.appointments.map((appointment) =>
          appointment.id === action.payload.id
            ? { ...appointment, ...action.payload.data }
            : appointment
        ),
      };
    case 'DELETE_APPOINTMENT':
      return {
        ...state,
        appointments: state.appointments.filter(
          (appointment) => appointment.id !== action.payload
        ),
        appointment: undefined,
        isOpen: false,
      };
    case 'EDIT_INFO':
      return {
        ...state,
        isEditing: true,
      };
    case 'SEARCH_APPOINTMENT':
      return {
        ...state,
        appointments: state.appointments.filter(
          (appointment) =>
            appointment.clientName
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            appointment.service
              .toLowerCase()
              .includes(action.payload.toLowerCase())
        ),
      };
    case 'GOTO_RESULT':
      return {
        ...state,
        date: new Date(action.payload),
      };
    default:
      return state;
  }
};

export const AppointmentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducerFn, initValue);

  return (
    <AppointmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AppointmentContext.Provider>
  );
};
