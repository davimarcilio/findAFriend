import { ReactNode } from 'react'

interface PropsSectionProps {
  children: ReactNode
  id: string
}
export function PropsSection({ children, id }: PropsSectionProps) {
  return (
    <div
      id={id}
      className="flex flex-col justify-center items-start gap-1 border border-blue-900 border-opacity-20 w-fit rounded-3xl py-4 px-6"
    >
      {children}
    </div>
  )
}
