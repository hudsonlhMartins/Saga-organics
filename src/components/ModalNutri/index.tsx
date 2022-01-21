import Modal from 'react-modal'
import {Button, Container, Content} from './styles'
import Imagem from '../../assests/ilustracao.jpg'
import {FiX} from 'react-icons/fi'


interface ModalNutriProps {
    isModalNutri: boolean
    handleCloseModalNutri: () => void
    fruitItem: FruitModal
}

type FruitModal = {
    id: string
    name: string
    nutritions: {
        calories: string
        carbohydrates: string
        fat: string
        protein: string
        sugar: string
    };
}

export default function ModalNutri ({isModalNutri, handleCloseModalNutri, fruitItem}: ModalNutriProps){

    return(
        <Modal 
        isOpen={isModalNutri}
        onRequestClose={handleCloseModalNutri}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
          <Container>
                <button onClick={handleCloseModalNutri} className='react-modal-close'>
                    <FiX fontSize={25} />
                </button>
                <img src={Imagem} />

                <div>
                    <strong>{fruitItem.name}</strong>
                    <p>Calories: <span>{fruitItem.nutritions.calories}</span> </p>
                    <p>Carbohydrates: <span>{fruitItem.nutritions.carbohydrates}</span> </p>
                    <p>Fat: <span>{fruitItem.nutritions.fat}</span> </p>
                    <p>Protein: <span>{fruitItem.nutritions.protein}</span> </p>
                    <p>Sugar: <span>{fruitItem.nutritions.sugar}</span> </p>
                </div>

                <Button>Adicionar carrinho</Button>
          </Container>
      </Modal>
    )
}