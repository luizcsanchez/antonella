import { Header } from '../../components/header'
import { useState } from 'react'
import { ModalSignIn } from '../../components/modals/modal-sign-in'
import { ModalMenuResponsive } from '../../components/modals/modal-menu-responsive'
import { EventButton } from '../../components/event-button'
import { EventButtonHome } from '../../components/event-button-home'

export function EventsPage() {
  const [isMenuResponsiveModalOpen, setIsMenuResponsiveModalOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  function openMenuResponsiveModal() {
    setIsMenuResponsiveModalOpen(true)
  }

  function closeMenuResponsiveModal() {
    setIsMenuResponsiveModalOpen(false)
  }

  function openSignInModal() {
    setIsSignInModalOpen(true)
  }

  function closeSignInModal() {
    setIsSignInModalOpen(false)
  }
  return (
    <div className="sm:mx-auto">
      <Header
        openSignInModal={openSignInModal}
        openMenuResponsiveModal={openMenuResponsiveModal}
      />

      {isSignInModalOpen && (
        <ModalSignIn
          openSignInModal={openSignInModal}
          closeSignInModal={closeSignInModal}
        />
      )}

      {isMenuResponsiveModalOpen && (
        <ModalMenuResponsive
          isMenuResponsiveModalOpen={isMenuResponsiveModalOpen}
          closeMenuResponsiveModal={closeMenuResponsiveModal}
        />
      )}

      <h1 className="text-2xl mx-36 mt-36 font-serif font-semibold text-wine sm:mx-auto sm:text-center sm:mt-20">
        Participe, Descubra e Celebre...
      </h1>
      <section className="mx-36 mt-6 justify-between text-center items-center grid grid-cols-4 gap-40 sm:hidden">
        <EventButton
          img={'./sensorial.jpg'}
          day={16}
          month={'Agosto'}
          title={'Feira Sensorial'}
          subtitle={'Uma Jornada de Sabores'}
        />
        <EventButton
          img={'#'}
          day={16}
          month={'Junho'}
          title={'Festa Junina'}
          subtitle={'Sabores e Tradições'}
        />
      </section>
      <nav className="hidden sm:flex mt-4 space-y-6 flex-col drop-shadow-2xl justify-center items-center">
        <EventButtonHome
          img={'./sensorial.jpg'}
          day={16}
          month={'Agosto'}
          title={'Feira Sensorial'}
          subtitle={'Uma Jornada de Sabores'}
        />
        <EventButtonHome
          img={'#'}
          day={16}
          month={'Junho'}
          title={'Festa Junina'}
          subtitle={'Sabores e Tradições'}
        />
      </nav>
    </div>
  )
}
