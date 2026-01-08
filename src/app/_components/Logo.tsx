import Image from 'next/image';

const BLOB_BASE =
  'https://zh2mkmryigduzodx.public.blob.vercel-storage.com';
const logoSrc = `${BLOB_BASE}/logo.png`;

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src={logoSrc}
      alt="Barátfüle logó"
      width={593}
      height={223}
      className={className ?? 'w-full md:w-1/2'}
      sizes="(min-width: 1280px) 256px, (min-width: 1024px) 224px, (min-width: 768px) 192px, (min-width: 640px) 160px, 128px"
      priority
    />
  );
}
