import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
}
export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-yellow-500 p-3 rounded-2xl flex justify-center items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:brightness-100 hover:brightness-90 ${className}`}
      type="submit"
    >
      {children}
    </button>
  )
}
