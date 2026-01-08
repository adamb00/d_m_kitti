import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Barátfüle logó"
      className={className ?? 'w-full md:w-1/2'}
      sizes="(min-width: 1280px) 256px, (min-width: 1024px) 224px, (min-width: 768px) 192px, (min-width: 640px) 160px, 128px"
      priority
    />
  );
}
