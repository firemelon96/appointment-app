import Image from 'next/image';

interface AvatarProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
  name?: string;
  position?: string;
}

export const Avatar = ({
  src,
  width,
  height,
  alt,
  className,
  name,
  position,
}: AvatarProps) => {
  return (
    <div className='flex items-center'>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />

      <div className='flex flex-col ml-5'>
        <span className='text-[24px] text-gray-700'>{name}</span>
        <p className='text-lg text-gray-500'>{position}</p>
      </div>
    </div>
  );
};
