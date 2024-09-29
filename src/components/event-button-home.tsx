interface EventButtonHomeProps {
  img: string
  title: string
  subtitle: string
  day: number
  month: string
}

export function EventButtonHome({
  img,
  title,
  subtitle,
  day,
  month,
}: EventButtonHomeProps) {
  return (
    <button>
      <div className="flex flex-col h-96 w-72 rounded-3xl bg-white hover:opacity-80 overflow-hidden relative">
        <img className="" src={img} alt="" />
        <div className="flex flex-col rounded-b-3xl absolute w-full bottom-0 left-0 p-5 bg-wine z-50 space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-lg text-beige-300 font-semibold">{day}</h1>
              <h1 className="text-sm text-beige-300">{month}</h1>
            </div>
            <div className="flex flex-col items-center text-beige-300">
              <h1 className="text-base">{title}</h1>
              <h2 className="text-sm text-beige-500">{subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
