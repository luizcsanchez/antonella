interface CheckboxProps {
  label: string
}

export function Checkbox({ label }: CheckboxProps) {
  return (
    <div className="relative flex items-center justify-center gap-2.5 py-1 hover:border-wine">
      <input
        type="checkbox"
        className="peer
                      relative
                      h-5
                      w-5
                      shrink-0
                      appearance-none
                      rounded-md
                      border-2
                      border-wine
                      after:absolute
                      after:left-0
                      after:top-0
                      after:h-full
                      after:w-full
                      after:bg-[url('./checkbox.svg')]
                      after:bg-center
                      after:bg-no-repeat
                      after:content-['']
                      checked:bg-wine
                      hover:ring
                      hover:ring-beige-300
                      focus:outline-none"
      />
      <label className="w-full cursor-pointer text-wine peer-checked:text-wine peer-checked:opacity-70 peer-checked:line-through">
        {label}
      </label>
    </div>
  )
}
