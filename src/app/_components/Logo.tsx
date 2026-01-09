import Image from 'next/image';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src={'/logo.png'}
      alt="Barátfüle logó"
      width={593}
      height={223}
      className={className ?? 'w-full md:w-1/2'}
      sizes="(min-width: 1280px) 256px, (min-width: 1024px) 224px, (min-width: 768px) 192px, (min-width: 640px) 160px, 128px"
      priority
    />
  );
}
