import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const ContainerHabits = styled.div`
    width: 100%;
    height: 100vh;
    padding: 70px 0;

    display:flex;
    flex-direction: column;
    align-items: center;

    background-color: #e5e5e5;
`;

export const Title = styled.section`
    width: 100%;
    height: 35px;

    margin: 22px 0;

    display:flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 18px;

    background-color: yellowgreen;


    h1{
        width: 148px;
        height: 29px;

        font-size: 22px;
        line-height: 29px;
        color: #126BA5;
    }

`;

export const Button = styled.div`
    width: 40px;
    height: 36px;

    background-color: #52B6FF;
    border-radius: 5px;

    display:flex;
    justify-content:center;
    align-items: center;
    
    font-size:25px;
    text-align:center;
    color:#ffffff;

    padding-bottom: 3px;
`;

export const Text = styled.p`
    width:100%;
    font-size: 18px;
    line-height: 22px;

    padding: 0 18px;

    color: #666666;
    background-color: pink;
`;