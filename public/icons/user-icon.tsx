interface UserIconProps {
  stroke: string;
}

export const UserIcon = ({ stroke }: UserIconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.76358 16.532C5.27052 15.3377 6.4541 14.5 7.83333 14.5H12.8333C14.2126 14.5 15.3961 15.3377 15.9031 16.532M13.6667 8.25C13.6667 10.0909 12.1743 11.5833 10.3333 11.5833C8.49238 11.5833 7 10.0909 7 8.25C7 6.40905 8.49238 4.91667 10.3333 4.91667C12.1743 4.91667 13.6667 6.40905 13.6667 8.25ZM18.6667 10.3333C18.6667 14.9357 14.9357 18.6667 10.3333 18.6667C5.73096 18.6667 2 14.9357 2 10.3333C2 5.73096 5.73096 2 10.3333 2C14.9357 2 18.6667 5.73096 18.6667 10.3333Z'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
