import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
}
export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-yellow-500 p-3 rounded-2xl flex justify-center items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
      type="submit"
    >
      {children}
    </button>
  )
}
