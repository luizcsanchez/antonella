import { X } from 'lucide-react'

interface ModalSignInProps {
  openSignInModal: () => void
  closeSignInModal: () => void
}

export function ModalSignIn({ openSignInModal, closeSignInModal }: ModalSignInProps) {
  if (!openSignInModal) return null

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm z-40 bg-black bg-opacity-20"></div>
      <div className="overflow-hidden absolute w-auto h-auto mx-28 items-center bg-wine rounded-lg flex space-x-36 z-50 shadow-inner">
        <img className="size-2/4 object-contain" src="./sign.jpg" alt="Sign Up" />
        <form action="#" className="text-beige-300 mx-10 flex flex-col">
          <div className="flex mb-0 flex-col items-center space-y-10">
            <h1 className="text-2xl font-semibold">Criar Conta</h1>
            <div className="flex flex-col">
              <span>Nome Completo</span>
              <input
                className="rounded-xl px-4 text-gray-600 bg-beige-300 outline-none w-96 p-2 mt-1"
                type="text"
                placeholder="Coloque seu Nome Completo"
              />
            </div>
            <div className="flex flex-col">
              <span>Email</span>
              <input
                type="text"
                className="rounded-xl px-4 text-gray-600 outline-none bg-beige-300 w-96 mt-1 p-2"
                placeholder="Coloque seu Email"
              />
            </div>
            <div className="flex flex-col">
              <span>Senha</span>
              <input
                type="password"
                className="rounded-xl px-4 text-gray-600 w-96 bg-beige-300 outline-none mt-1 p-2"
                placeholder="Coloque sua senha"
              />
            </div>
            <button className="bg-beige-300 py-2 px-5 rounded-full text-base font-semibold text-wine hover:bg-white">
              Criar Conta
            </button>
          </div>
          <div>
            <p className="mt-3 ">
              Já tem conta?{' '}
              <a href="#" className="underline">
                Log in
              </a>{' '}
            </p>
          </div>
        </form>
        <button
          type="button"
          className="absolute top-4 right-4"
          onClick={closeSignInModal}
        >
          <X className="text-beige-300" />
        </button>
      </div>
    </>
  )
}
