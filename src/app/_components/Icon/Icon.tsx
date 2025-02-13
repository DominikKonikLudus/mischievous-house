import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { IconProps } from './Icon.types';

const iconVariants = cva(
  'inline-flex items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        pink: 'bg-[#ff86cb]',
        green: 'bg-[#39af61]',
        blue: 'bg-[#5f85f4]',
      },
      size: {
        sm: 'h-8 w-8 p-1.5',
        md: 'h-10 w-10 p-2',
        lg: 'h-12 w-12 p-2.5'
      }
    },
    defaultVariants: {
      variant: 'pink',
      size: 'md'
    }
  }
);

interface Props extends IconProps, VariantProps<typeof iconVariants> {}

const Icon = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <div
        className={iconVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon; 