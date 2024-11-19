'use client';
import type { ReactNode } from 'react';
import { AvalancheLogo } from '@/components/navigation/avalanche-logo';



export function NavbarTitle(): React.ReactElement {
	return (
	  <>
		<AvalancheLogo />
		<span style={{ fontSize: "large" }}>Developer Hub</span>
	  </>
	);
  }

export function Body({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
  <div>
    {children}
    </div>
);
}
