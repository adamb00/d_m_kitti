import type { ReactNode } from 'react';

type FreeFromLayoutProps = {
  children: ReactNode;
};

export default function FreeFromLayout({ children }: FreeFromLayoutProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8efe4_0%,#f4dbc6_100%)] text-primary-brown">
      <div className="relative">{children}</div>
    </main>
  );
}
