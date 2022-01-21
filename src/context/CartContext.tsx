import axios from "axios";
import { useState, useEffect, createContext, ReactElement, ReactNode, SetStateAction, Dispatch } from "react";


interface CartProviderProps{
    children: ReactNode
}


interface CartContextData {
    cart: Fruit[];
    addFruit: (idFruit: string) => Promise<void>;
    updateProductAmount: ({ id, amount }: UpdateFruittAmount) => void;
    removeProduct: (id: string) => void;
    setCart: Dispatch<SetStateAction<Fruit[]>>

    fruits: Fruit[]
    setFruits: Dispatch<SetStateAction<Fruit[]>>
    loading: boolean
    setLoanding: Dispatch<SetStateAction<boolean>>

    setFruitItem: Dispatch<SetStateAction<Fruit>>
    fruitItem: Fruit
  }
  

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

interface UpdateFruittAmount {
    id: string;
    amount: number;
  }

export const CartContext = createContext <CartContextData>({} as CartContextData)




export default function CartProvider ({children}: CartProviderProps){

    const [cart, setCart] = useState<Fruit[]>([])


    const addFruit = async (idFruit: string) => {

        try{
            const updattedCart = [...cart]
            const fruitsExists = updattedCart.find(item => item.id == idFruit)

            const currentAmount = fruitsExists ? fruitsExists.amount : 0
            const amount = currentAmount +1

            if(fruitsExists){
                fruitsExists.amount = amount
            }
            else{
                const fruit = await axios.get(`/${idFruit}`)

                const newFruit = {
                    ...fruit.data,
                    amount: 1
                }

                updattedCart.push(newFruit)
            }

            setCart(updattedCart)

        }catch(err){
            console.log(err)
        }
    }


    const updateProductAmount = async ({id, amount}:UpdateFruittAmount)=>{

        try{

            if(amount < 0 ){
                return
            }

            const updattedCart = [...cart]

            const productsExists = updattedCart.find(item => item.id === id)

            if(productsExists){
                productsExists.amount = amount
                setCart(updattedCart)
            }else{
                throw Error()
            }

        }catch{
            alert('error')
        }
    }

    const removeProduct = (id: string)=>{
        try{
            const updatedcart = [...cart]
            const productIndex = updatedcart.findIndex(item => item.id == id)

            if(productIndex >=0){
                updatedcart.splice(productIndex, 1)
                setCart(updatedcart)
            }else{
                throw Error()
            }
        }catch(err){
            console.log(err)
        }
    }


    //All Itens
    const [fruits, setFruits] = useState<Fruit[]>([])
    const [loading, setLoanding] = useState(true)

    useEffect(()=>{
        setLoanding(true)
        const getApi = async()=>{
            const res = await axios.get('/all')
            setFruits(res.data)
            setLoanding(false)
        }

        getApi()
    },[])

    //Fruit
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
    const [fruitItem, setFruitItem] = useState<Fruit>(initialFruit)


    return(
        <CartContext.Provider value={{
                addFruit, 
                updateProductAmount, 
                cart, 
                removeProduct, 
                setCart,
                fruits,
                setFruits,
                loading,
                setFruitItem,
                fruitItem, 
                setLoanding
            }}>
            {children}
        </CartContext.Provider>
    )
}