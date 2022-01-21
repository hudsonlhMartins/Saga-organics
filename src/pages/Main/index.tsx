import Imagem from '../../assests/ilustracao.jpg'
import {FaSpinner} from 'react-icons/fa'
import { useContext } from "react";
import { useState } from "react";
import { Button, Buttons, Container, Content, ContentImgPrice, ContentLoading, Li, Strong } from "./styles";

import {FiSliders} from 'react-icons/fi'
import ModalNutri from '../../components/ModalNutri';
import { CartContext } from '../../context/CartContext';
import Header from '../../components/Header';




type FruitModalProps ={
    id: string
    name: string
    nutritions: {
        calories: string
        carbohydrates: string
        fat: string
        protein: string
        sugar: string
    };
    amount: number;
}

export default function Main(){
    const {addFruit, fruits, loading, fruitItem} = useContext(CartContext)

    const initialFruit = {
        id: '',
        name: '',
        nutritions:{
            calories: '',
            carbohydrates: '',
            fat: '',
            protein: '',
            sugar: '',
        },
        amount: 0

    }

    const [isModalNutri, setIsModalNutri] = useState(false)

    const [fruitModal, setFruitModal] = useState <FruitModalProps>(initialFruit)


    const handleOpenModalNutri = ()=>{
        setIsModalNutri(true)
      }
    
      const handleCloseModalNutri = ()=>{
        setIsModalNutri(false)
      }


    function handleAddProduct(id: string) {
        const itemId = String(id)
        addFruit(itemId)
        //console.log(itemId)
    }


    if(loading){
        return(
            <>
                <Header/>
                <Container>
                    <ContentLoading>
                        <FaSpinner fontSize={50}/>
                    </ContentLoading>
                </Container>
            </>

        )
    }

    if(!!fruitItem?.id){

        return(
            <>
                <Header/>
                <Container>
                    <Content>
                        <Strong>{fruitItem.name}</Strong>
                        <ul>
                
                    <Li>
                        <Button onClick={() => {
                            handleOpenModalNutri()
                            setFruitModal(fruitItem)
                        }}>
                            <FiSliders fontSize={20} color='#fff'/>
                        </Button>
                        <ContentImgPrice>
                            <img src={Imagem}/>
                            <span>{fruitItem.name}</span>
                        </ContentImgPrice>

                        <strong>R$ 0,00</strong>

                        <Buttons onClick={()=>handleAddProduct(fruitItem.id)}>
                            Adicionar
                            
                        </Buttons>
                    </Li>

                </ul>
                    </Content>
                </Container>
                <ModalNutri isModalNutri={isModalNutri} handleCloseModalNutri={handleCloseModalNutri} fruitItem={fruitModal} />

            </>
        )
    }

    return(
        <>
            <Header/>
            <Container>
            <Content>

                <Strong>All fruits</Strong>

                <ul>
                {fruits.map(item =>(
                    <Li key={item.id}>
                        <Button onClick={() => {
                            handleOpenModalNutri()
                            setFruitModal(item)
                        }}>
                            <FiSliders fontSize={20} color='#fff'/>
                        </Button>
                        <ContentImgPrice>
                            <img src={Imagem}/>
                            <span>{item.name}</span>
                        </ContentImgPrice>

                        <strong>R$ 0,00</strong>

                        <Buttons onClick={()=>handleAddProduct(item.id)}>
                            Adicionar
                            
                        </Buttons>
                    </Li>
                ))}

                </ul>
              
            </Content>

            <ModalNutri isModalNutri={isModalNutri} handleCloseModalNutri={handleCloseModalNutri} fruitItem={fruitModal} />
        </Container>
        </>
        
    )
}

