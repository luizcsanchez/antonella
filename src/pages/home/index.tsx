import { useState } from 'react'
import { Header } from '../../components/header'
import { ModalSignIn } from '../../components/modals/modal-sign-in'
import { ModalMenuResponsive } from '../../components/modals/modal-menu-responsive'
import { RecipeButtonHome } from '../../components/recipe-button-home'
import { ModalRecipe } from '../../components/modals/modal-recipe'
import { EventButtonHome } from '../../components/event-button-home'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'

export function HomePage() {
  const [isMenuResponsiveModalOpen, setIsMenuResponsiveModalOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [activeRecipeModal, setActiveRecipeModal] = useState<string | null>(null)

  function openRecipeModal(recipeId: string) {
    setActiveRecipeModal(recipeId)
  }

  function closeRecipeModal() {
    setActiveRecipeModal(null)
  }

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
    <div className="items-center justify-center w-full h-full">
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

      {activeRecipeModal === 'guacamole' && (
        <ModalRecipe
          imageRecipe="./guacamole1.jpg"
          labelCheckboxes={[
            '1 abacate maduro',
            '1 cebola média',
            '1 pacote de Doritos',
            'Sal a gosto',
            '1 tomate grande',
            '1 pimenta dedo-de-moça',
            '2 Dentes de alho',
            'Suco de 1 limão médio',
          ]}
          locationRecipeBadge={'México'}
          timeRecipeBadge={'10min'}
          difficultyRecipeBadge={'Fácil'}
          closeRecipeModal={closeRecipeModal}
          labelListOfPreparations={[
            'Amasse bem o abacate com um garfo até virar uma papa.',
            'Pique em pedaços bem pequenos a cebola, a pimenta e o tomate (sem as sementes).',
            'Misture o abacate com o tomate, a cebola, a pimenta, o sal e o suco e um limão.',
            'Sirva com o Doritos.',
          ]}
        />
      )}
      {activeRecipeModal === 'spaghetti' && (
        <ModalRecipe
          imageRecipe="./spaghetti.jpg"
          labelCheckboxes={[
            '1 pacote de espaguete grano duro (ou qualquer massa longa de sua preferência)',
            '3 dentes de alho amassado',
            '40 g de filés de anchova em conserva',
            '1/2 pimenta vemelha picada sem sementes',
            '1 colher (sobremesa) de alcaparras (opcional)',
            '4 tomates picados',
            '1/2 xícara (chá) de azeitonas picadas',
            '1/2 xícara (chá) de salsinha picada',
          ]}
          locationRecipeBadge="Itália"
          timeRecipeBadge="20min"
          difficultyRecipeBadge="Média"
          closeRecipeModal={closeRecipeModal}
          labelListOfPreparations={[]}
        />
      )}
      {activeRecipeModal === 'cocktailTropical' && (
        <ModalRecipe
          imageRecipe="./cocktail.jpg"
          labelCheckboxes={[
            '240 ml de rum de coco gelado',
            '240 ml de suco de abacaxi gelado',
            '240 ml de suco de laranja gelado',
            '4 meias rodelas de limão-taiti',
            '4 fatias pequenas de abacaxi',
            '4 meias rodelas de laranja',
            'ramos de menta fresca a gosto',
          ]}
          locationRecipeBadge="Brasil"
          timeRecipeBadge="10min"
          difficultyRecipeBadge="Fácil"
          closeRecipeModal={closeRecipeModal}
          labelListOfPreparations={[
            'Prepare as frutas do garnish que vai decorar os drinks. Corte uma rodela de abacaxi e faça pequenos triângulos. Corte a laranja e o limão em rodelas e depois as rodelas ao meio, formando meias-luas.',
          ]}
        />
      )}

      <section className="mx-36 mt-36 mb-7 overflow-hidden rounded-md bg-wine flex justify-between text-center items-center sm:hidden sm:mx-4">
        <div className="w-1/2">
          <img className="" src="./cook.jpg" alt="" />
        </div>
        <div className="flex-col w-1/2 items-center text-center space-y-8">
          <div className="flex-col space-y-8">
            <img className="mx-auto my-auto" src="./logo-antonella.svg" alt="" />
            <p className="text-xl font-semibold text-beige-300">
              Transformamos cada evento em uma<br></br> experiência gastronômica
              inesquecível.
            </p>
            <button className="bg-beige-300 py-2 px-5 rounded-full text-base sm:text-sm font-semibold text-wine hover:bg-white">
              Explorar
            </button>
          </div>
        </div>
      </section>
      <div className="hidden bg-wine w-full h-20 "></div>
      <section className="hidden sm:block div-fundo relative w-full h-52 bg-introd bg-contain bg-no-repeat mt-20">
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
          <img className="w-20 h-auto" src="./logo-antonella.svg" alt="" />
          <p className="text-sm font-semibold text-beige-300 text-center">
            Transformamos cada evento em uma
            <br /> experiência gastronômica inesquecível.
          </p>
          <button className="bg-beige-300 py-1 px-4 rounded-full text-sm font-semibold text-wine hover:bg-white">
            Explorar
          </button>
        </div>
      </section>
      <section className="mx-28 sm:mx-auto sm:my-5 my-16 flex justify-between">
        <img className="sm:hidden" src="./folha.svg" alt="" />
        <p className="text-black opacity-40 text-xl italic sm:hidden text-center items-center">
          "Acreditamos que cada evento é uma oportunidade para criar memórias
          <br></br>
          inesquecíveis através da magia da gastronomia. Nossos eventos são mais
          <br></br>
          do que simples celebrações; são experiências sensoriais que encantam e<br></br>
          emocionam."
        </p>
        <p className="hidden sm:block text-black opacity-40 text-sm italic text-center">
          "Experiências gastronômicas que encantam e emocionam."
        </p>
        <img className="sm:hidden" src="./folha-invert.svg" alt="" />
      </section>
      <section className="mx-36 sm:mx-0 mb-7 sm:mb-0 flex flex-col space-y-7 justify-between text-center items-center sm:w-full">
        <div className="">
          <h1 className="text-sm italic opacity-60">Receitas mais queridas</h1>
          <h1 className="font-serif text-wine font-bold text-4xl sm:text-3xl">
            Top Receitas
          </h1>
        </div>
        <nav className="hidden sm:flex drop-shadow-2xl justify-center items-center  w-full mx-4 overflow-hidden">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            loop={true}
            className="h-96 w-72 rounded-3xl"
          >
            <SwiperSlide className="h-96 w-72 rounded-3xl">
              <RecipeButtonHome
                recipe="Guacamole"
                time="10min"
                location="México"
                openRecipeModal={() => openRecipeModal('guacamole')}
                img="./button-home-guacamole.jpeg"
              />
            </SwiperSlide>
            <SwiperSlide className="h-96 w-72 rounded-3xl">
              <RecipeButtonHome
                recipe="Spaghetti"
                time="20min"
                location="Itália"
                openRecipeModal={() => openRecipeModal('spaghetti')}
                img="./spaghetti.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="h-96 w-72 rounded-3xl">
              <RecipeButtonHome
                recipe="Cocktail Tropical"
                time="10min"
                location="Brasil"
                openRecipeModal={() => openRecipeModal('cocktailTropical')}
                img="./cocktail.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </nav>
        <nav className="flex space-x-20 drop-shadow-2xl justify-center items-center sm:hidden">
          <RecipeButtonHome
            recipe="Guacamole"
            time="10min"
            location="México"
            openRecipeModal={() => openRecipeModal('guacamole')}
            img="./guacamole.svg"
          />
          <RecipeButtonHome
            recipe="Spaghetti"
            time="20min"
            location="Itália"
            openRecipeModal={() => openRecipeModal('spaghetti')}
            img="./spaghetti.jpg"
          />
          <RecipeButtonHome
            recipe="Cocktail Tropical"
            time="10min"
            location="Brasil"
            openRecipeModal={() => openRecipeModal('cocktailTropical')}
            img="./cocktail.jpg"
          />
        </nav>
      </section>
      <section className="mx-36 my-16 sm:mt-10 flex flex-col space-y-7 justify-between text-center items-center sm:mx-0 sm:w-full">
        <div>
          <h1 className="text-sm italic opacity-60">Do Passado ao Futuro</h1>
          <h1 className="font-serif text-wine font-bold text-4xl">Eventos</h1>
        </div>
        <nav className="flex space-x-20 drop-shadow-2xl justify-center items-center sm:hidden">
          <EventButtonHome
            img={'./festa-junina.jpg'}
            title={'Festa Junina'}
            subtitle={'Sabores e Tradições'}
            day={21}
            month={'Junho'}
          />
          <EventButtonHome
            img={'./festa-junina.jpg'}
            title={'Feira Gastronômica Mundial'}
            subtitle={'Sabores dos Continentes'}
            day={28}
            month={'Julho'}
          />
          <EventButtonHome
            img={'./sensorial.png'}
            title={'Feira Sensorial'}
            subtitle={'Uma Jornada de Sabores'}
            day={16}
            month={'Agosto'}
          />
        </nav>
        <nav className="hidden sm:flex drop-shadow-2xl justify-center items-center w-full mx-4">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            loop={true}
            className="h-96 w-72 rounded-3xl"
          >
            <SwiperSlide className="h-96 w-72 rounded-3xl">
              <EventButtonHome
                img={'./sensorial.png'}
                title={'Feira Sensorial'}
                subtitle={'Uma Jornada de Sabores'}
                day={16}
                month={'Agosto'}
              />
            </SwiperSlide>
            <SwiperSlide className="h-96 w-72 rounded-3xl">
              <EventButtonHome
                img={'./festa-junina.jpg'}
                title={'Festa Junina'}
                subtitle={'Sabores e Tradições'}
                day={21}
                month={'Junho'}
              />
            </SwiperSlide>
            <SwiperSlide className="h-96 w-72 rounded-3xl">
              <EventButtonHome
                img={'./feira-mundial.jpg'}
                title={'Feira Gastronômica Mundial'}
                subtitle={'Viajando pela Cultura'}
                day={28}
                month={'Julho'}
              />
            </SwiperSlide>
          </Swiper>
        </nav>
      </section>
    </div>
  )
}
