import { Header } from '../../components/header'
import { useState } from 'react'
import { ModalSignIn } from '../../components/modals/modal-sign-in'
import { ModalMenuResponsive } from '../../components/modals/modal-menu-responsive'
import { RecipeButton } from '../../components/recipe-button'
import { ModalRecipe } from '../../components/modals/modal-recipe'
import { RecipeButtonHome } from '../../components/recipe-button-home'

export function RecipesPage() {
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
    <div className="items-center justify-center">
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
      {activeRecipeModal === 'salad' && (
        <ModalRecipe
          imageRecipe="./salad.svg"
          labelCheckboxes={[
            '1 Folha de alface americano',
            '1 Beterraba ralada',
            '1 Cebola cortada em rodelas ou picada',
            '2 Cenouras raladas',
            '1 Tomate sem pele e sem semente',
            '1 Colher (chá) de sal',
            '1 Pitada de açúcar',
            '1 Colher (sopa) de azeite extra virgem de oliva',
            '2 a 3 Colheres de vinagre',
          ]}
          locationRecipeBadge={'Egito'}
          timeRecipeBadge={'15min'}
          difficultyRecipeBadge={'Fácil'}
          closeRecipeModal={closeRecipeModal}
          labelListOfPreparations={[]}
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
      {activeRecipeModal === 'strogonoff' && (
        <ModalRecipe
          imageRecipe="#"
          labelCheckboxes={[
            '3 peitos de frango cortados em cubos',
            '1 dente de alho picado',
            'sal a gosto',
            'pimenta-do-reino a gosto',
            '1 cebola picada',
            '2 colheres (sopa) de maionese',
            '1 colher de manteiga',
            '1/2 copo de ketchup',
            '1/3 copo de mostarda',
            '1 copo de cogumelos',
            '1 copo de creme de leite',
            'batata palha a gosto',
          ]}
          locationRecipeBadge="Brasil"
          timeRecipeBadge="60min"
          difficultyRecipeBadge="Média"
          closeRecipeModal={closeRecipeModal}
          labelListOfPreparations={[
            'Em uma panela, misture o frango, o alho, a maionese, o sal e a pimenta.',
            'Em uma frigideira grande, derreta a manteiga e doure a cebola.',
            'Junte o frango temperado até que esteja dourado.',
            'Adicione os cogumelos, o ketchup e a mostarda.',
            'Incorpore o creme de leite e retire do fogo antes de ferver.',
            'Sirva com arroz branco e batata palha.',
          ]}
        />
      )}
      {activeRecipeModal === 'strudelDeMaca' && (
        <ModalRecipe
          imageRecipe="#"
          labelCheckboxes={[
            '250 gramas de farinha de trigo',
            '1 colher de café de sal',
            '250 gramas de manteiga ou margarina',
            '1/2 xícara de chá de água morna',
            '5 maçãs',
            '300 gramas de açúcar',
            '1 colher de sopa de canela em pó',
            '100 gramas de farinha de rosca',
            '150 gramas de passas',
            '100 gramas de nozes picadas',
            '1 colher de sopa de açúcar de confeiteiro',
          ]}
          locationRecipeBadge="Alemanha"
          timeRecipeBadge="60min"
          difficultyRecipeBadge="Dificil"
          closeRecipeModal={closeRecipeModal}
          labelListOfPreparations={[
            'Em uma tigela, misture a farinha de trigo com sal, 1 colher de sopa de manteiga derretida e água.',
            'Amasse bem. Passe a massa para uma superfície e sove por 10 minutos.',
            'Cubra a massa com um pano e, depois, com a tigela, abafando-a. Deixe descansar.',
            'Fatie as maçãs e misture-as com canela e açúcar em um recipiente. Reserve.',
            'Unte o fundo de uma assadeira e, em banho-maria, derreta o restante da manteiga.',
            'Estenda a massa em uma bancada com um rolo e, quando estiver bem fina, coloque-a sobre um pano de copa e puxe-a delicadamente com as mãos para ficar bem fina.',
            'Apare as extremidades com uma tesoura, retirando as sobras.',
            'Sobre a massa estendida, espalhe as fatias de maçã, a farinha de rosca, as passas e as nozes. Borrife manteiga derretida.',
            'Enrole a massa como um rocambole, leve à assadeira e pincele com mais manteiga derretida.',
            'Leve ao forno preaquecido a 200 °C por meia hora ou até dourar. Polvilhe açúcar de confeiteiro.',
            'Sirva com creme chantilly. Bom apetite.',
          ]}
        />
      )}
      {activeRecipeModal === 'bifeAParmegiana' && (
        <ModalRecipe
          imageRecipe="#"
          labelCheckboxes={[
            '1 kg de contra filé',
            '1 cebola ralada',
            '2 alhos picados',
            'tempero completo a gosto',
            'sal a gosto',
            'farinha de rosca',
            '200 g de presunto',
            '200 g de queijo mussarela',
            '1 lata de molho de tomate pronto',
            '1 gema de ovo para empanar os bifes',
          ]}
          locationRecipeBadge="Itália"
          timeRecipeBadge="15min"
          difficultyRecipeBadge="Fácil"
          closeRecipeModal={closeRecipeModal}
          labelListOfPreparations={[
            'Tempere os bifes com os ingredientes secos e faça-os à milanesa.',
            'Frite e leve-os a uma assadeira.',
            'Cubra-os com o presunto e a mussarela, coloque o molho por último.',
            'Leve ao forno para derreter a mussarela.',
          ]}
        />
      )}
      {activeRecipeModal === 'paoDeQueijo' && (
        <ModalRecipe
          imageRecipe="#"
          labelCheckboxes={[
            '800 g de polvilho azedo',
            '1 xícara de água',
            '1 xícara de leite',
            '1/2 xícara de óleo',
            '2 ovos',
            '100 g de queijo parmesão ralado',
            'sal a gosto',
          ]}
          locationRecipeBadge="Brasil"
          timeRecipeBadge="40min"
          difficultyRecipeBadge="Fácil"
          closeRecipeModal={closeRecipeModal}
          labelListOfPreparations={[
            'Em uma panela, ferva a água e acrescente o leite, o óleo e o sal.',
            'Adicione o polvilho aos poucos até dar liga. Pode ser que você não precise usar os 800 g, então coloque devagar e sove a massa até soltar da mão: esse é o ponto.',
            'Quando a massa estiver morna, acrescente o queijo parmesão, os ovos e misture bem.',
            'Unte as mãos e enrole bolinhas de 2 cm de diâmetro.',
            'Disponha as bolinhas em uma assadeira untada com óleo, deixando um espaço entre elas.',
            'Asse em forno médio (180º C), preaquecido, por cerca de 40 minutos.',
          ]}
        />
      )}

      <h1 className="text-2xl mx-36 mt-36 font-serif font-semibold text-wine sm:mx-auto sm:text-center sm:mt-20">
        Descubra, Crie e Compartilhe...
      </h1>
      <section className="mx-36 mt-6  justify-between text-center items-center grid grid-cols-4 gap-10 sm:hidden">
        <RecipeButton
          img={'./guacamole.svg'}
          recipe={'Guacamole'}
          time={'10min'}
          location={'México'}
          openRecipeModal={() => openRecipeModal('guacamole')}
        />
        <RecipeButton
          img={'./salad.svg'}
          recipe={'Salada'}
          time={'15min'}
          location={'Egito'}
          openRecipeModal={() => openRecipeModal('salad')}
        />
        <RecipeButton
          img={'./cocktail.jpg'}
          recipe="Cocktail Tropical"
          time={'10min'}
          location={'Egito'}
          openRecipeModal={() => openRecipeModal('cocktailTropical')}
        />
        <RecipeButton
          img={'./spaghetti.jpg'}
          recipe={'Spaghetti'}
          time={'20min'}
          location={'Itália'}
          openRecipeModal={() => openRecipeModal('spaghetti')}
        />
        <RecipeButton
          img={'#'}
          recipe={'Strogonoff'}
          time={'60min'}
          location={'Brasil'}
          openRecipeModal={() => openRecipeModal('strogonoff')}
        />
        <RecipeButton
          img={'#'}
          recipe={'Strudel de Maçã'}
          time={'60min'}
          location={'Alemanha'}
          openRecipeModal={() => openRecipeModal('strudelDeMaca')}
        />
        <RecipeButton
          img={'#'}
          recipe={'Bife á Parmegiana'}
          time={'15min'}
          location={'Itália'}
          openRecipeModal={() => openRecipeModal('bifeAParmegiana')}
        />
        <RecipeButton
          img={'#'}
          recipe={'Pão de Queijo'}
          time={'40min'}
          location={'Brasil'}
          openRecipeModal={() => openRecipeModal('paoDeQueijo')}
        />
      </section>
      <nav className="hidden sm:flex mt-4 space-y-6 flex-col drop-shadow-2xl justify-center items-center">
        <RecipeButtonHome
          img={'./guacamole.svg'}
          recipe={'Guacamole'}
          time={'10min'}
          location={'México'}
          openRecipeModal={() => openRecipeModal('guacamole')}
        />
        <RecipeButtonHome
          img={'./salad.svg'}
          recipe={'Salada'}
          time={'15min'}
          location={'Egito'}
          openRecipeModal={() => openRecipeModal('salad')}
        />
        <RecipeButtonHome
          img={'./cocktail.jpg'}
          recipe="Cocktail Tropical"
          time={'10min'}
          location={'Egito'}
          openRecipeModal={() => openRecipeModal('cocktailTropical')}
        />
        <RecipeButtonHome
          img={'./spaghetti.jpg'}
          recipe={'Spaghetti'}
          time={'20min'}
          location={'Itália'}
          openRecipeModal={() => openRecipeModal('spaghetti')}
        />
        <RecipeButtonHome
          img={'#'}
          recipe={'Strogonoff'}
          time={'60min'}
          location={'Brasil'}
          openRecipeModal={() => openRecipeModal('strogonoff')}
        />
        <RecipeButtonHome
          img={'#'}
          recipe={'Strudel de Maçã'}
          time={'60min'}
          location={'Alemanha'}
          openRecipeModal={() => openRecipeModal('strudelDeMaca')}
        />
        <RecipeButtonHome
          img={'#'}
          recipe={'Bife á Parmegiana'}
          time={'15min'}
          location={'Itália'}
          openRecipeModal={() => openRecipeModal('bifeAParmegiana')}
        />
        <RecipeButtonHome
          img={'#'}
          recipe={'Pão de Queijo'}
          time={'40min'}
          location={'Brasil'}
          openRecipeModal={() => openRecipeModal('paoDeQueijo')}
        />
      </nav>
    </div>
  )
}
