import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    img{
        width: 180px;
        height: 100px;
    }
    h1{
        width: 180px;

        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 70px;
        line-height: 75px;
        text-align: center;

        color: #126BA5;
    }
`;

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin:25px 0 25px 0;
    gap: 6px;
`;

export const Inputs = styled.input`
    width: 303px;
    height: 45px;

    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    padding-left: 11px;
    
    &::placeholder{
        font-size: 18px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;
export const Button = styled.button`
    width: 303px;
    height: 45px;

    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;

    font-size: 20px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;
`;

export const Anchor = styled.p`
    width: 232px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52B6FF;

    margin-bottom:100px;

`;
