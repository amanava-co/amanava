import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amanava-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-amanava-green text-white hover:bg-amanava-green/90": variant === "default",
            "border border-input bg-white hover:bg-gray-100 hover:text-amanava-black": variant === "outline",
            "hover:bg-gray-100 hover:text-amanava-black": variant === "ghost",
            "bg-red-500 text-white hover:bg-red-500/90": variant === "destructive",
            "bg-amanava-coral text-amanava-black hover:bg-amanava-coral/80": variant === "secondary",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
