import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Text } from '../Text';

export const textPanelVariants = cva('rounded-4xl', {
  variants: {
    variant: {
      pink: 'bg-[#ff86cb] text-white',
      blue: 'bg-[#5f85f4] text-white',
      green: 'bg-[#39af61] text-white',
    },
    size: {
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-5',
    },
  },
  defaultVariants: {
    variant: 'pink',
    size: 'md',
  },
});

export interface TextPanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textPanelVariants> {
  children: React.ReactNode;
}

const TextPanel = forwardRef<HTMLDivElement, TextPanelProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const textSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'base';

    return (
      <div
        className={textPanelVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        <Text size={textSize} className="text-inherit">
          {children}
        </Text>
      </div>
    );
  }
);

TextPanel.displayName = 'TextPanel';

export default TextPanel;
