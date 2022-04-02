import styled from "styled-components";

export const ContainerCreate = styled.form`
    width:90%;
    height: 180px;

    display: ${props => props.addHabito ? "flex" : "none"};
    flex-direction:column;
    align-items:center;

    padding: 18px;
    background-color: #FFFFFF;
    margin-bottom: 15px;
    border-radius:5px;
`;

export const Inputs = styled.input`
    width: 100%;
    height: 45px;

    background-color: ${props => props.disabled ? "#F2f2f2" : "#ffffff"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    padding-left: 11px;

    font-family: 'Lexend Deca';
    font-weight: 400; 
    font-size: 18px;
    line-height: 25px;

    &::placeholder{
        font-size: 19px;
        line-height: 20px;
        color: ${props => props.disabled ? "#dbdbdb" : "#afafaf"}
    }
`;

export const WeekDays = styled.div`
    width:100%;

    display: flex;
    justify-content:left;
    align-items: center;

    gap:4px;
    margin: 10px 0;
`;

export const Day = styled.div`
    width: 30px;
    height: 30px;

    background-color: ${props => props.selected ? "#cfcfcf" : "#ffffff"};

    border:${props => props.selected ? "1px solid #cfcfcf" : " 1px solid #D5D5D5;"};
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    line-height: 25px;
    color:  ${props => props.selected ? "#ffffff" : "#dbdbdb"};

`;
export const Buttons = styled.section`
    width: 100%;
    height: 35px;

    display: flex;
    justify-content: right;
    align-items: center;

    gap: 20px;
    margin-top: 19px;
`;

export const CancelButton = styled.button`
    width: 69px;
    height: 20px;

    font-size: 16px;
    line-height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #52B6FF;
    background-color: #ffffff;
    border:none;
    border-radius: 5px;
    ${props => props.disabled && "opacity: 0.7"};
`;

export const SaveButton = styled.button`
    width: 84px;
    height: 35px;

    background-color: #52B6FF;
    border-radius: 5px;
    border:none;

    font-size: 16px;
    line-height: 20px;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.disabled && "opacity: 0.7"};
`;
