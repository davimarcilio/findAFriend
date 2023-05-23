import { WarningCircle } from 'phosphor-react'

interface RequirementCardProps {
  description?: string
}

export function RequirementCard({ description }: RequirementCardProps) {
  return (
    <div
      style={{
        background:
          'linear-gradient(129.72deg, rgba(247, 95, 96, 0.1) 16.45%, rgba(241, 81, 86, 0) 67.3%)',
      }}
      className="border w-full gap-3 flex justify-start items-center text-red-500 border-red-500 rounded-lg py-4 px-10"
    >
      <WarningCircle size={24} />
      <p className="font-semibold text-lg">{description}</p>
    </div>
  )
}
