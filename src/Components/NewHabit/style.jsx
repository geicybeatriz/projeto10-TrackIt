import styled from "styled-components";

export const ContainerCreate = styled.section`
    width:90%;
    height: 180px;

    display: flex;
    flex-direction:column;
    align-items:center;

    padding: 18px;

    background-color: orchid;

`;

export const Inputs = styled.input`
    width: 100%;
    height: 45px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    padding-left: 11px;

    &::placeholder{
        font-size: 19px;
        line-height: 20px;
        color: #DBDBDB;
    }
`;

export const WeekDays = styled.div`
    width:100%;

    display: flex;
    justify-content:left;
    align-items: center;

    gap:4px;
    margin: 10px 0;

    background-color:goldenrod;
`;

export const Day = styled.div`
    width: 30px;
    height: 30px;

    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
`;
export const Buttons = styled.section`
    width: 100%;
    height: 35px;

    display: flex;
    justify-content: right;
    align-items: center;

    margin-top: 19px;

    background-color: royalblue;
`;

export const Button = styled.button``;