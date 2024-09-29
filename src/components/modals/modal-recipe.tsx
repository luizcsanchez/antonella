import { X } from 'lucide-react'
import { RecipeBadge } from '../recipe-badge'
import { Checkbox } from '../checkbox'
import { ListOfPreparation } from '../list-of-preparation'

interface ModalRecipeProps {
  labelCheckboxes: string[]
  labelListOfPreparations: string[]
  locationRecipeBadge: string
  timeRecipeBadge: string
  difficultyRecipeBadge: string
  closeRecipeModal: () => void
  imageRecipe: string
}

export function ModalRecipe({
  labelCheckboxes,
  locationRecipeBadge,
  timeRecipeBadge,
  difficultyRecipeBadge,
  closeRecipeModal,
  imageRecipe,
  labelListOfPreparations,
}: ModalRecipeProps) {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm z-40 bg-black bg-opacity-20"></div>
      <div className="inset-0 flex items-center justify-center z-50 p-4 ">
        <div className="relative overflow-hidden w-auto max-w-3xl mx-28 bg-beige-300 rounded-lg grid grid-cols-6 gap-4 z-50">
          <div className=" relative col-span-6">
            <img className="w-full h-auto" src={imageRecipe} alt="" />
            <RecipeBadge
              location={locationRecipeBadge}
              time={timeRecipeBadge}
              difficulty={difficultyRecipeBadge}
            />
          </div>
          <div className="col-start-1 col-end-7">
            <h1 className="text-wine font-serif pl-7 font-semibold text-2xl">
              Ingredientes
            </h1>
            <div className="mt-2 px-10 grid grid-cols-2">
              {labelCheckboxes.map((label, index) => (
                <Checkbox key={index} label={label} />
              ))}
            </div>
          </div>
          <div className="col-start-1 col-end-7 mt-3">
            <h1 className="text-wine font-serif pl-7 font-semibold text-2xl">
              Modo de Preparo
            </h1>
          </div>
          <div className="col-start-1 col-end-7 px-7 text-wine mb-4">
            <ol className="flex flex-col space-y-4">
              {labelListOfPreparations.map((label, index) => (
                <ListOfPreparation key={index} label={label} id={''} />
              ))}
            </ol>
          </div>
          <button
            type="submit"
            className="absolute top-4 right-4"
            onClick={closeRecipeModal}
          >
            <X className="text-beige-300"></X>
          </button>
        </div>
      </div>
    </>
  )
}
