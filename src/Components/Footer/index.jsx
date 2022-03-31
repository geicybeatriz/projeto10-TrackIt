import styled from "styled-components";

export default function Footer(){
    return (
        <Bottom>
            <h1>Hábitos</h1>
            <div>Hoje</div>
            <h1>Histórico</h1>
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

    h1{
        width: 79px;
        height: 22px;

        font-size: 18px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }

    div{
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
    }
`;
