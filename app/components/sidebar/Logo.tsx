import Image from 'next/image';

interface LogoProps {
  h?: number;
  w?: number;
}

export const Logo = ({ h = 36, w = 36 }: LogoProps) => {
  return <Image src='./icons/logo.svg' width={w} height={h} alt='logo' />;
};
