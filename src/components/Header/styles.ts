import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 1rem;
    background: var(--green-800);
    
`;

export const Content = styled.div`
        max-width: 1080px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 120px;
        }
        
        div{
            display: flex;
            align-items: center;
            
            label{
                width: 300px;
                position: relative;
                background: var(--gray-500);
                border-radius: 10px;
                padding: 0.6rem 0.7rem 0.6rem 0.7rem;

                display: flex;
                align-items: center;
                

                input{
                    background: transparent;
                    border: none;
                    outline: none;

                    ::placeholder{
                    color: var(--gray-800);
                    }
                }
                svg{
                    position: absolute;
                    right: 1rem;
                }
            }
        }

        @media (max-width: 580px){
            div label{
                width: 200px ;
            }
        }
        @media (max-width: 480px){
            div label{
                display: none;
            }
        }
`;

export const Profile = styled.div`
    div{
        margin-left: 4rem;
        display: flex;
        align-items: center;

        span{
            margin-left: 1.5rem;
            position: relative;
            svg{
                margin-top: 4px;
            }

            a{
                position: absolute;
                top: -10px;
                background: var(--purple-600);
                right: -15px;
                padding: 2px 6px;
                border-radius: 50%;
                font-size: 13px;
                color: var(--white);
                font-weight: 500;
               
            }
        }
    }

`;