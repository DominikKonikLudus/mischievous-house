import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import type { BlobImageProps } from './BlobImage.types'

const blobVariants = cva(
  'relative rounded-[45%_55%_45%_55%/55%_45%_55%_45%] overflow-hidden p-2',
  {
    variants: {
      variant: {
        blue: 'bg-[#5f85f4]',
        pink: 'bg-[#ff86cb]',
        green: 'bg-[#39af61]',
      },
      size: {
        sm: 'w-32 h-32',
        md: 'w-48 h-48',
        lg: 'w-64 h-64'
      }
    },
    defaultVariants: {
      variant: 'blue',
      size: 'md'
    }
  }
)

interface Props extends BlobImageProps, VariantProps<typeof blobVariants> {}

const BlobImage = forwardRef<HTMLDivElement, Props>(
  ({ className, variant, size, src, alt, ...props }, ref) => {
    return (
      <div
        className={blobVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        <div className="w-full h-full rounded-[45%_55%_45%_55%/55%_45%_55%_45%] overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    )
  }
)

BlobImage.displayName = 'BlobImage'

export default BlobImage 