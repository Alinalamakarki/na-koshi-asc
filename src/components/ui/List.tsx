import * as React from 'react';

import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  Icon: React.ReactNode;
}

function Badge({ className, Icon, children, ...props }: BadgeProps) {
  
  return (
    <li className="flex gap-1 items-center relative" {...props}>
      {Icon && <Icon className="h-5 w-5 absolute top-1/2 right-0" />}
      {children}
    </li>
  );
}
export { Badge };
