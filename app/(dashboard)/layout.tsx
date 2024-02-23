import { ReactNode } from 'react';
import { Sidebar } from '../components/sidebar';
import { Navbar } from '../components/navbar';
import { Container } from '../components/navbar/container';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-full'>
      <Sidebar />
      <Navbar />
      <div className='w-full mt-[116px] '>
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default DashboardLayout;
