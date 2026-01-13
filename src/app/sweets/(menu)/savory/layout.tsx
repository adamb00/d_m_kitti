import type { ReactNode } from 'react';

type SavoryLayoutProps = {
  children: ReactNode;
};

export default function SavoryLayout({ children }: SavoryLayoutProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8efe4_0%,#f4dbc6_100%)] text-primary-brown">
      <div className="relative">{children}</div>
    </div>
  );
}
