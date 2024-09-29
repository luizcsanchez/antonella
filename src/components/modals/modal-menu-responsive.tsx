import { X } from 'lucide-react'

interface ModalMenuResponsiveProps {
  isMenuResponsiveModalOpen: boolean
  closeMenuResponsiveModal: () => void
}

export function ModalMenuResponsive({
  isMenuResponsiveModalOpen,
  closeMenuResponsiveModal,
}: ModalMenuResponsiveProps) {
  if (!isMenuResponsiveModalOpen) return null

  return (
    <nav className="fixed text-base top-0 right-0 z-30 bg-wine flex h-full w-1/2 p-6 flex-col items-center text-start space-y-4 text-beige-300">
      <button onClick={closeMenuResponsiveModal}>
        <X className="text-beige-300 w-6 h-6"></X>
      </button>
      <button className="bg-beige-300 py-2 px-5 rounded-full text-base font-semibold text-wine hover:bg-white">
        Sign In
      </button>
      <a className="hover:text-white" href="/">
        Home
      </a>
      <a className="hover:text-white" href="/recipes">
        Receitas
      </a>
      <a className="hover:text-white" href="/events">
        Eventos
      </a>
      <a className="hover:text-white" href="/sobre">
        Sobre
      </a>
      <div className="flex space-x-3">
        <a className="" href="http://instagram.com">
          <img
            className=" fill-black hover:fill-white"
            src="./instagram.svg"
            alt="instagram"
          />
        </a>
        <a href="http://tiktok.com">
          <img src="./tiktok.svg" alt="tiktok" />
        </a>
      </div>
    </nav>
  )
}
