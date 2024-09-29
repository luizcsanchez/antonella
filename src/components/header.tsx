import { Menu } from 'lucide-react'

interface HeaderProps {
  openSignInModal: () => void
  openMenuResponsiveModal: () => void
}

export function Header({ openSignInModal, openMenuResponsiveModal }: HeaderProps) {
  return (
    <header className="fixed top-0 sm:w-auto sm:mt-1.5 sm:mx-2 left-0 right-0 mx-28 my-5 py-5 items-center px-8 bg-opacity-20 bg-wine rounded-full flex backdrop-blur-sm z-30 justify-between shadow-inner">
      <nav className="text-base sm:hidden flex justify-between space-x-3.5 text-beige-300">
        <a className="hover:text-white" href="/">
          Home
        </a>
        <a className="hover:text-white" href="/recipes">
          Receitas
        </a>
        <a className="hover:text-white" href="/events">
          Eventos
        </a>
        <a className="hover:text-white" href="/about">
          Sobre
        </a>
      </nav>
      <a href="/">
        <img
          className="mr-40 ml-20 sm:ml-0 sm:w-7 sm:h-7"
          src="./logo.svg"
          alt="antonella"
        />
      </a>
      <nav className="flex space-x-3.5 items-center sm:hidden">
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
        <button
          onClick={openSignInModal}
          className="bg-beige-300 py-2 px-5 rounded-full text-base font-semibold text-wine hover:bg-white"
        >
          Sign In
        </button>
      </nav>
      <button onClick={openMenuResponsiveModal} className="xl:hidden 2xl:hidden">
        <Menu className="text-beige-300 w-6 h-6"></Menu>
      </button>
    </header>
  )
}
