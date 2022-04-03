import styled from "styled-components";

export const ContainerTodayPage = styled.main`
    width: 100vw;
    height: 100vh;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Container =styled.section`
    width: 100%;
    height: 100vh;
    padding: 70px 0;

    display:flex;
    flex-direction: column;
    align-items: center;

    background-color: #e5e5e5;
`;

export const Title = styled.h1`
    width: 100%;
    height: 35px;

    margin: 22px 0;

    display:flex;
    justify-content: flex-start;
    align-items: center;

    padding: 0 18px;

    font-size: 22px;
    line-height: 29px;
    color: #126BA5;
`;

export  const Text =styled.p`
    width:100%;
    font-size: 18px;
    line-height: 22px;

    padding: 0 18px;

    color: #666666;
`;