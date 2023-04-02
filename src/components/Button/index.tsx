import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}
export function Button({ children }: ButtonProps) {
  return (
    <button
      className="bg-yellow-500 p-3 rounded-2xl flex justify-center items-center gap-2"
      type="submit"
    >
      {children}
    </button>
  )
}
