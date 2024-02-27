import { HomeIcon } from '@/public/icons/home';
import { NavItem } from './nav-items';

export const Navigation = () => {
  const routes = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon stroke='white' />,
    },
    // {
    //   label: 'Appointment',
    //   href: '/appointment',
    //   icon: '/icons/appointment.svg',
    // },
    // {
    //   label: 'Messages',
    //   href: '/messages',
    //   icon: '/icons/message.svg',
    // },
    // {
    //   label: 'Contacts',
    //   href: '/contacts',
    //   icon: '/icons/contact.svg',
    // },
    // {
    //   label: 'Data Analytics',
    //   href: '/data-analytics',
    //   icon: '/icons/analytics.svg',
    // },
    // {
    //   label: 'Subscription',
    //   href: '/subscription',
    //   icon: '/icons/subscription.svg',
    // },
    // {
    //   label: 'Help Center',
    //   href: '/help-center',
    //   icon: '/icons/center.svg',
    // },
    // {
    //   label: 'Setting',
    //   href: '/settings',
    //   icon: '/icons/setting.svg',
    // },
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
