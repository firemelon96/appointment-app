import { HomeIcon } from '@/public/icons/home';
import { NavItem } from './nav-items';
import { AppointmentIcon } from '@/public/icons/appointmentIcon';
import { MessageIcon } from '@/public/icons/message';
import { ContactIcon } from '@/public/icons/contact-icon';
import { AnalyticsIcon } from '@/public/icons/analytics-icon';
import { SubIcon } from '@/public/icons/subs-icon';
import { SettingIcon } from '@/public/icons/settingIcon';
import { HelpIcon } from '@/public/icons/help-icon';

export const Navigation = () => {
  const routes = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon stroke='white' />,
    },
    {
      label: 'Appointment',
      href: '/appointment',
      icon: <AppointmentIcon fill='white' />,
    },
    {
      label: 'Messages',
      href: '/messages',
      icon: <MessageIcon fill='white' />,
    },
    {
      label: 'Contacts',
      href: '/contacts',
      icon: <ContactIcon fill='white' />,
    },
    {
      label: 'Data Analytics',
      href: '/data-analytics',
      icon: <AnalyticsIcon fill='white' />,
    },
    {
      label: 'Subscription',
      href: '/subscription',
      icon: <SubIcon stroke='white' />,
    },
    {
      label: 'Help Center',
      href: '/help-center',
      icon: <HelpIcon fill='white' />,
    },
    {
      label: 'Setting',
      href: '/settings',
      icon: <SettingIcon fill='white' />,
    },
  ];

  return (
    <ul className='flex flex-col my-10'>
      {routes.map((route) => (
        <NavItem
          key={route.label}
          icon={route.icon}
          href={route.href}
          label={route.label}
        />
      ))}
    </ul>
  );
};
