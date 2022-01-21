import Imagem from '../../assests/ilustracao.jpg'

import React, { useContext } from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { CartContext } from '../../context/CartContext';

import { ButtonClear, ButtonFinish, ContaineClear, Container, ContentClear, ProductTable } from './styles';
import Header from '../../components/Header';

type Fruit = {
    id: string
    name: string
    nutritions: {
        calories: string
        carbohydrates: string
        fat: string
        protein: string
        sugar: string
    }
    amount: number

}

const Cart = (): JSX.Element => {
    const {cart ,updateProductAmount, removeProduct, setCart} = useContext(CartContext)


  

  function handleProductIncrement(product: Fruit) {
    updateProductAmount({ id: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Fruit) {
    updateProductAmount({ id: product.id, amount: product.amount - 1 });
  }
  function handleRemoveProduct(id: string ){
    const idItem = String(id)
    removeProduct(idItem)
  }

  function handleClearList (){
    
    setCart([])
  }

  //console.log(!!cart.length)

  if(!(!!cart.length)){
      return(
          <>
            <Header/>
            <ContaineClear>
                <ContentClear>
                    <h2>Seu carrinho esta vazio</h2>
                </ContentClear>
            </ContaineClear>
          </>

      )
  }


  return (
      <>
      <Header/>
        <Container>
            <ProductTable>
                <thead>
                <tr>
                    <th scope='col' />
                    <th scope='col'>PRODUTO</th>
                    <th scope='col'>QTD</th>
                    <th scope='col' aria-label="delete icon" />
                </tr>
                </thead>
                <tbody>
                {cart.map(product => (
                    <tr key={product.id} data-testid="product">
                    <td data-label='img'>
                        <img src={Imagem} alt={product.name} />
                    </td>
                    <td data-label='name'>
                        <strong>{product.name}</strong>
                        <span>R$ 0,00</span>
                    </td>
                    <td data-label='button' className='addMore'>
                        <div>
                            <button
                                type="button"
                                data-testid="decrement-product"
                                disabled={product.amount <= 1}
                                onClick={() => handleProductDecrement(product)}
                            >
                                <MdRemoveCircleOutline size={20} />
                            </button>
                            <input
                                type="text"
                                data-testid="product-amount"
                                readOnly
                                value={product.amount}
                            />
                            <button
                                type="button"
                                data-testid="increment-product"
                                onClick={() => handleProductIncrement(product)}
                            >
                                <MdAddCircleOutline size={20} />
                            </button>
                        </div>
                    </td>
                    <td data-label='Remove'>
                        <button
                        type="button"
                        data-testid="remove-product"
                        onClick={() => handleRemoveProduct(product.id)}
                        >
                        <MdDelete size={20} />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </ProductTable>

            <footer>
                <ButtonFinish>Finalizar pedido</ButtonFinish>

                <ButtonClear onClick={handleClearList}>Esvazia</ButtonClear>
            </footer>
        </Container>
    </>
  );
};

export default Cart