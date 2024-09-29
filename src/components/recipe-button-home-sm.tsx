import { Clock, Navigation } from 'lucide-react'

interface RecipeButtonHomeSmProps {
  time: string
  location: string
  recipe: string
  img: string
  openRecipeModal: () => void
}

export function RecipeButtonHomeSm({
  time,
  location,
  recipe,
  img,
  openRecipeModal,
}: RecipeButtonHomeSmProps) {
  return (
    <button onClick={openRecipeModal}>
      <div className="flex flex-col h-80 w-64 rounded-3xl bg-white hover:opacity-80 overflow-hidden relative">
        <img className="" src={img} alt="" />
        <div className="flex flex-col absolute w-full rounded-b-3xl bottom-0 left-0 p-5 bg-wine z-50 space-y-2">
          <div className="flex justify-between">
            <p className="text-base text-beige-300">{recipe}</p>
            <div className="flex items-center text-beige-300">
              <Clock className="scale-75 mr-1"></Clock>
              <p className="text-sm">{time}</p>
            </div>
          </div>
          <div className="flex left-0 text-xs justify-end items-center text-beige-300">
            <Navigation className="scale-50 "></Navigation>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </button>
  )
}
