import styled, {keyframes, css} from "styled-components";

export const Container = styled.main`
    width: 100%;
    padding: 1rem;
`;



const animation = keyframes`
from{
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg);
}
`;

export const ContentLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;

    svg{
        animation: ${animation} 2s linear infinite;
        color: var(--green-800);
    }
        

`





export const Content = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 5rem;

    ul{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        grid-auto-flow: row;
        list-style: none;
        margin-top: 1.5rem;

    }

    @media (max-width: 1200px){

        ul{
            grid-template-columns: repeat(4, 1fr);
        }

    }

    @media (max-width: 830px){
        ul{
            grid-template-columns: repeat(3, 1fr);
        }

    }

    @media (max-width: 600px){
        ul{
            gap: 1rem;
        }

    }

    @media (max-width: 500px){
        ul{
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }

    }

    @media (max-width: 400px){
        ul{
            gap: 1rem;
        }

    }


`;

export const Strong = styled.strong`
    font-size: 2rem;
    color: var(--gray-900);
    
`;

export const Li = styled.li`
    background: var(--white);
    padding: 1rem 0.5rem;
    border-radius: 0.40rem;
    height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s;
    width: 200px;


    img{
        width: 150px;
    }

    span{
        color: var(--gray-900);
        margin-top: 1rem;
    }


    strong{
        margin-top: 1rem;
        align-self: center;
    }

    &:hover{
        div{
            opacity: 1;
            pointer-events: auto;
        }

        button{
            opacity: 1;
            pointer-events: auto;
        }
    }

    @media (max-width: 937px){

        &{
            width: 180px;
        }

    }

    @media (max-width: 830px){
        &{
            width: 220px;
        }

    }

    @media (max-width: 745px){
        &{
            width: 180px;
        }

    }

    @media (max-width: 600px){
        &{
            width: 160px;

            div{
                opacity: 1;
                pointer-events: auto;
            }
            button{
                opacity: 1;
                pointer-events: auto;
            }
            button:last-child{
                opacity: 1;
                pointer-events: auto;
                margin-top: 1.5rem;
            }
        }

    }

    @media (max-width: 500px){
        &{
            width: 200px;
        }

    }

    @media (max-width: 450px){
        &{
            width: 180px;
        }

    }

    @media (max-width: 400px){
        &{
            width: 160px;
        }

    }

`

export const Buttons = styled.button`
        margin-top: 0.5rem;
        opacity: 0;
        pointer-events: none;
        background: var(--purple-600);
        padding: 0.4rem 0.2rem;
        border-radius: 0.25rem;
        color: var(--white);
        text-transform: uppercase;
        font-weight: bold;
        transition: all 0.3s;

        &:hover{
            background: var(--purple-500);
        }


`


export const ContentImgPrice = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

export const Button = styled.button`
    position: absolute;
    background: var(--gray-600);
    right: 0.3rem;
    top: 4px;
    border: none;
    outline: none;
    transition: all 0.3s;

    opacity: 0;
    pointer-events: none;
    


    &:hover{
        background: var(--gray-800);
    }

`