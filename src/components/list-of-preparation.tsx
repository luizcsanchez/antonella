import { CircleChevronRight } from 'lucide-react'

interface ListOfPreparationProps {
  label: string
  id: string
}

export function ListOfPreparation({ label, id }: ListOfPreparationProps) {
  return (
    <li id={id} className="flex items-center space-x-4">
      <CircleChevronRight className="min-w-5" />
      <p>{label}</p>
    </li>
  )
}
