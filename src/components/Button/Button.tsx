import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Text } from '../Text';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors cursor-pointer',
  {
    variants: {
      variant: {
        pink: 'bg-[#ff86cb] text-white hover:bg-[#ff86cb]',
        green: 'bg-[#5f85f4] text-white hover:bg-[#5f85f4]',
        blue: 'bg-[#39af61] text-white hover:bg-[#39af61]',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'pink',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    const textSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'base';

    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        <Text size={textSize} weight="medium">
          {isLoading ? 'Loading...' : children}
        </Text>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
