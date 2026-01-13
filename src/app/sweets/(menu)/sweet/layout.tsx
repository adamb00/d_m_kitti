import type { ReactNode } from 'react';

type SweetsMenuLayoutProps = {
  children: ReactNode;
};

export default function SweetsMenuLayout({ children }: SweetsMenuLayoutProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8efe4_0%,#f4dbc6_100%)] text-primary-brown">
      <div className="relative">{children}</div>
    </div>
  );
}
