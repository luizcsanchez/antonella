import { Clock, Flame, Navigation } from 'lucide-react'

interface RecipeBadgeProps {
  location: string
  time: string
  difficulty: string
}

export function RecipeBadge({ location, time, difficulty }: RecipeBadgeProps) {
  return (
    <div className="absolute bottom-2 p-4 left-1/2 transform -translate-x-1/2 space-x-3 bg-beige-300 rounded-full text-wine flex justify-center items-center">
      <div className="flex space-x-1">
        <Navigation></Navigation>
        <p>{location}</p>
      </div>
      <div className=" flex space-x-1">
        <Clock></Clock>
        <p>{time}</p>
      </div>
      <div className="flex space-x-1">
        <Flame></Flame>
        <p>{difficulty}</p>
      </div>
    </div>
  )
}
