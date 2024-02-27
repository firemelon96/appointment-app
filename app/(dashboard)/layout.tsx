import { ReactNode } from 'react';
import { Sidebar } from '../components/sidebar';
import { Navbar } from '../components/navbar';
import { Container } from '../components/navbar/container';
import { AppointmentContextProvider } from '../components/context/appointment-context';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppointmentContextProvider>
      <div className='flex h-full'>
        <Sidebar />
        <Navbar />
        <div className='w-full mt-[116px] '>
          <Container>{children}</Container>
        </div>
      </div>
    </AppointmentContextProvider>
  );
};

export default DashboardLayout;
