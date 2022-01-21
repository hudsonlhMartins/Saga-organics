import styled from "styled-components";

export const Container = styled.div`
     display: flex;
    gap: 2rem;
    img{
        width: 200px;
        object-fit: cover;
    }

    div{
        strong{
            display: inline-block;
            font-size: 1.3rem;
            color: var(--gray-900);
            margin-bottom: 1rem;
            
        }

        p{  
            margin-top: 0.5rem;
            color: var(--gray-700);
            white-space: nowrap; // não quebra linha

            span{
                color: var(--gray-900);
            }
        }
        margin-bottom: 3rem;
    }

    @media (max-width: 420px){
        &{
            gap: 1rem;
        }
        img{
            width: 170px;
        }

    }

    @media (max-width: 340px){
        img{
            width: 150px;
        }

    }

`;

export const Content = styled.div`
   
`;


export const Button = styled.button`
    position: absolute;
    display: inline-block;
    padding: 0.5rem 1rem;
    border: none;
    background: var(--purple-600);
    color: var(--white);
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0.25rem;
    bottom: 1rem;
    transition: background 0.3s;
    right: 1rem;
    &:hover{
        background: var(--purple-500);
    }

    @media (max-width: 420px){
       width: 100px;

    }

`;