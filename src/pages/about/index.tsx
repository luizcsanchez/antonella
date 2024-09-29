import { Header } from '../../components/header'
import { useState } from 'react'
import { ModalMenuResponsive } from '../../components/modals/modal-menu-responsive'
import { ModalSignIn } from '../../components/modals/modal-sign-in'

export function AboutPage() {
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
    <div>
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
    </div>
  )
}
