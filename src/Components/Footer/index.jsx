import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <Bottom>
            <Anchor to='/habitos'>Hábitos</Anchor>
            <Div to='/hoje'>Hoje</Div>
            <Anchor to='/historico'>Histórico</Anchor>
        </Bottom>
    );
}

const Bottom = styled.footer`
    width: 100%;
    height: 70px;

    position: fixed;
    bottom:0;
    z-index: 3;

    display: flex;
    justify-content:center;
    align-items: center;

    gap: 150px;

    background-color:#ffffff;
`;

const Anchor = styled(Link)`
    width: 79px;
    height: 22px;

    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
`;

const Div = styled(Link)`
    width: 91px;
    height: 91px;

    position: fixed;
    bottom: 10px;
    z-index:4;

    background-color: #52B6FF;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #FFFFFF;
`;
        
