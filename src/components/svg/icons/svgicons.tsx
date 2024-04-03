import { cn } from '@/lib/utils';
import { Tooltip } from '@nextui-org/react';
import { forwardRef } from 'react';
export const IconLocation = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      ref={ref}
      className={cn('h-6 w-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      ></path>
    </svg>
  ),
);
IconLocation.displayName = 'IconLocation';

export const IconClock = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      ref={ref}
      className={cn('h-6 w-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  ),
);
IconClock.displayName = 'IconClock';

export const IconCalender = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      ref={ref}
      className={cn('h-6 w-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  ),
);
IconCalender.displayName = 'IconCalender';
interface iconDotProps {
  className?: string;
  content?: string;
  danger?: boolean;
  success?: boolean;
  yellow?: boolean;
  tooltipDir?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'right-start'
    | 'right'
    | 'right-end';
}

export const IconDot = ({
  className,
  danger,
  success,
  yellow,
  tooltipDir = 'left',
  content,
}: iconDotProps) => {
  return (
    <Tooltip placement={tooltipDir} content={content}>
      <div
        className={cn(
          'h-2 w-2 rounded-full bg-gray-400 ring-gray-500 ring-1 ring-offset-2  ring-offset-content1',
          danger && 'bg-red-600 ring-red-600',
          success && 'bg-green-400  ring-green-500',
          yellow && 'bg-yellow-400 ring-yellow-500',
          className,
        )}
      />
    </Tooltip>
  );
};
