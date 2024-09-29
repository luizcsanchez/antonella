interface EventButtonProps {
  img: string
  day: number
  month: string
  title: string
  subtitle: string
}

export function EventButton({ img, day, month, title, subtitle }: EventButtonProps) {
  return (
    <div className="flex flex-col h-80 w-80 rounded-3xl hover:opacity-80 overflow-hidden relative">
      <img className="" src={img} alt="" />
      <div className="flex flex-col absolute w-full h-24 justify-center bottom-0 left-0 p-3 bg-wine z-30 space-y-2">
        <div className="flex justify-between items-center space-x-4 px-5">
          <div className="flex flex-col">
            <h1 className="text-lg text-beige-300 font-semibold">{day}</h1>
            <h1 className="text-sm text-beige-300">{month}</h1>
          </div>
          <div className="flex flex-col text-beige-300">
            <h1 className="text-base">{title}</h1>
            <h2 className="text-sm text-beige-500">{subtitle}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
