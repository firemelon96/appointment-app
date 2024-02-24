import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = ({
  children,
  primary,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 rounded-xl w-full z-50 ${
        primary && 'bg-[#FF630B]'
      } ${!primary && 'bg-transparent border border-gray-400 text-gray-400'}`}
    >
      {children}
    </button>
  );
};
