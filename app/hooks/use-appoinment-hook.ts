import { useContext } from 'react';
import { AppointmentContext } from '../context/appointment-context';

export const useAppointmentContext = () => {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(
      'Appointment context must be used only inside of the appointment context'
    );
  }

  return context;
};
