import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="Logo"
      className={`w-4/5 md:w-1/3`}
      sizes="(min-width: 1280px) 256px, (min-width: 1024px) 224px, (min-width: 768px) 192px, (min-width: 640px) 160px, 128px"
      priority={true}
    />
  );
}
