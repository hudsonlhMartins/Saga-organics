import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    :root{
        --green-700: #44AE7A;
        --green-800: #379279;

        --purple-600: #BB1CCE;
        --purple-500: #A923E8;

        --gray-900: #4E4E4E;
        --gray-800: #6D6D6D ;
        --gray-700: #7C7C7C;
        --gray-600: #9B9B9B;
        --gray-500: #BABABA;
        --gray-100: #F8F8F8;

        --background: #D9D9D9;
        --white: #fff;

    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        --webkit-font-smooth: antialiased;
        //color: var(--background);
        background: var(--background);
        
    }
    html{
        @media (max-width: 1080px){
        font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 85.5%;
        }
    }
    
    button{
        cursor: pointer;
        border: 0;
    }
    body, input, button{
        font-family: 'Roboto', sans-serif;
    }


    .react-modal-overlay{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.5);
    }
    .react-modal-content{
        width: 100%;
        max-width: 550px;
        // se estiver como mais de 576 ele vai para aqui se não vai pegar 100%
        background: var(--white);
        padding: 2rem;
        position: relative;
        border-radius: 0.25rem;
        //display: flex;
        z-index: 999;
    }

    .react-modal-close{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: transparent;
        border: 0;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`;