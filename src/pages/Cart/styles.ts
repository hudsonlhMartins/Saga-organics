import styled from 'styled-components';
import { darken, lighten } from 'polished';



export const ContaineClear = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
`
export const ContentClear = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  h2{
    color: var(--gray-800);
    font-size: 2rem;
  }
`;


export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 4rem;
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
`;


export const ProductTable = styled.table`
  width: 100%;
  margin: 0 auto;

  thead th {
    color: var(--gray-900);
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid var(--gray-500);
  }
  img {
    height: 100px;
  }
  strong {
    color: var(--gray-800);
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: var(--gray-500);
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    svg {
      color: var(--purple-600);
      transition: color 0.2s;
    }
    &:hover {
      svg {
        color: ${darken(0.06, '#BB1CCE')};
      }
    }
    &:disabled {
      svg {
        color: ${lighten(0.25, '#BB1CCE')};
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 600px){
    border: 0;

    & caption{
        font-size: 1.3em;
    }
    & thead{
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    & tr{
        border-bottom: 2px solid var(--gray-100);
        display: block;
        margin-bottom: 2rem;

        &:last-child{
          margin-bottom: 0;
          border-bottom: none;
        }
    }
    & td{
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .9em;
        text-align: right;
    }
    & td::before{
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }
    & td:last-child{
        border-bottom: 0;
    }
    & td.addMore{
      display: flex;
      padding: 1rem 0;
      justify-content: space-between;
      margin-left: 11px;

      div{
        //align-self: flex-end;
      }
    }
    & td img{
      height: 80px;
    }
  }
`;


export const ButtonClear = styled.button`
      background: var(--green-700);
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.06, '#44AE7A')};
      }

`;

export const ButtonFinish = styled.button`
      background: var(--purple-600);
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.06, '#BB1CCE')};
      }
   
`;