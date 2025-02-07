import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

export const textVariants = cva('inline-block', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    textColor: {
      white: 'text-white',
      black: 'text-black',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    textColor: 'white',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
}

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ className, size, weight, textColor, children, ...props }, ref) => {
    return (
      <span
        className={textVariants({ size, weight, textColor, className })}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Text.displayName = 'Text';

export default Text;
