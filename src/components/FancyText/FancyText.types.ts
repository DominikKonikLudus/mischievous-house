import { type VariantProps } from 'class-variance-authority';
import { fancyTextVariants } from './FancyText';

export interface FancyTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fancyTextVariants> {
  children: React.ReactNode;
}
