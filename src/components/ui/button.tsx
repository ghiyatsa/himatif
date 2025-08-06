import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-9 px-4 py-2',
        icon: 'size-8 rounded-md',
        lg: 'h-10 rounded-md px-8',
        sm: 'h-8 rounded-md px-3',
      },
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary items-start justify-start underline-offset-4 hover:underline',
        outline: 'border border-border bg-background hover:bg-card hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        surface: 'bg-surface text-surface-foreground hover:bg-surface/90',
        star: 'bg-accent text-accent-foreground',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  classNames?: {
    content?: string
  }
  ref?: React.Ref<HTMLButtonElement>
  starColor?: string
  starSpeed?: React.CSSProperties['animationDuration']
  starThickness?: number
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  classNames,
  size,
  variant,
  ref,
  children,
  starColor = 'white',
  starSpeed = '6s',
  starThickness = 0.8,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  if (variant === 'star') {
    return (
      <Comp
        className={cn('relative inline-block overflow-hidden rounded-lg cursor-pointer', className)}
        ref={ref}
        {...props}
        style={{
          padding: `${starThickness}px 0`,
          ...props.style,
        }}
      >
        <span>
          <div
            className="absolute w-[300%] h-[50%] opacity-70 bottom-[-14px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
            style={{
              background: `radial-gradient(circle, ${starColor}, transparent 10%)`,
              animationDuration: starSpeed,
            }}
          />
          <div
            className="absolute w-[300%] h-[50%] opacity-70 top-[-12px] left-[-250%] rounded-full animate-star-movement-top z-0"
            style={{
              background: `radial-gradient(circle, ${starColor}, transparent 10%)`,
              animationDuration: starSpeed,
            }}
          />
          <div
            className={cn(
              buttonVariants({ variant, size }),
              'relative z-1 bg-surface py-1 px-3 rounded-lg',
              classNames?.content,
            )}
          >
            {children}
          </div>
        </span>
      </Comp>
    )
  }

  return (
    <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props}>
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
