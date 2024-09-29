import { Clock, Navigation } from 'lucide-react'

interface RecipeButtonProps {
  time: string
  location: string
  recipe: string
  openRecipeModal: () => void
  img: string
}

export function RecipeButton({
  time,
  location,
  recipe,
  openRecipeModal,
  img,
}: RecipeButtonProps) {
  return (
    <button onClick={openRecipeModal}>
      <div className="flex flex-col h-60 w-60 rounded-3xl bg-white hover:opacity-80 overflow-hidden relative">
        <img className="" src={img} alt="" />
        <div className="flex flex-col absolute w-full bottom-0 left-0 p-3 bg-wine z-30 space-y-2">
          <div className="flex justify-between">
            <p className="text-sm text-beige-300">{recipe}</p>
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
