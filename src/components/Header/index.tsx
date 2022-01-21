import Logo from '../../assests/logo.svg'

import { Container, Profile, Content } from "./styles"
import {RiSearchLine, RiShoppingCartLine, RiUser3Line} from 'react-icons/ri'
import { CartContext } from '../../context/CartContext'
import { useContext, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Seach from './Seach'
export default function Header (){
    const {cart} = useContext(CartContext)
    const cartSize = cart.length

    const [fruit, setFruit] = useState('')

    const {setFruitItem, setLoanding } = useContext(CartContext)

    
    useEffect(()=>{
        const getApi = async()=>{
            if(fruit){
                setLoanding(true)
                try{
                    const res = await axios.get(`/${fruit}`)
                    
                    setFruitItem(res.data)
                    setLoanding(false)

                }catch(err){
                    console.log('error provavelmente não completou a palavra')
                    setLoanding(false)
                }
            }else{
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
                setFruitItem(initialFruit)
            }

        }

        getApi()
    },[fruit])

    return(
        <Container>
            <Content>
                <Link to='/'> 
                    <img src={Logo}/>
                </Link>
                <div>
                    <label>
                        <Seach value={fruit} onChange={(seach) =>setFruit(seach)} />
                        <RiSearchLine color='#4E4E4E' fontSize='18px'/>
                    </label>

                    <Profile>
                        <div>
                            <RiUser3Line fontSize='20px' color='#fff'/>

                            <Link to='/cart'>
                                <span>
                                    <a>{cartSize}</a>
                                    <RiShoppingCartLine color='#fff' fontSize='20px' />
                                </span>
                            </Link>
                        </div>
                    </Profile>
                </div>

            </Content>
        </Container>
    )
}

// tipa o e o onchange 


//                         <
