import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

export const fancyTextVariants = cva('flex flex-col gap-2', {
  variants: {
    variant: {
      pink: 'text-white',
      blue: 'text-white',
      green: 'text-white',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'pink',
    size: 'base',
  },
});

const getRandomRotation = () => {
  // Random rotation between -8 and 8 degrees
  return Math.random() * 16 - 8;
};

const getBackgroundColor = (variant: 'pink' | 'blue' | 'green') => {
  switch (variant) {
    case 'pink':
      return 'bg-[#ff86cb]';
    case 'blue':
      return 'bg-[#5f85f4]';
    case 'green':
      return 'bg-[#39af61]';
    default:
      return 'bg-[#ff86cb]';
  }
};

export interface FancyTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fancyTextVariants> {
  children: React.ReactNode;
}

const FancyText = forwardRef<HTMLDivElement, FancyTextProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const finalVariant = variant || 'pink';

    return (
      <div
        className={fancyTextVariants({
          variant: finalVariant,
          size,
          className,
        })}
        ref={ref}
        {...props}
      >
        <div
          className={`${getBackgroundColor(
            finalVariant
          )} px-6 py-3 transform inline-block text-center`}
          style={{ transform: `rotate(${getRandomRotation()}deg)` }}
        >
          {children}
        </div>
      </div>
    );
  }
);

FancyText.displayName = 'FancyText';

export default FancyText;
