import styled from "styled-components";

export const Container = styled.section`
    width:90%;
    height: 91px;

    display:flex;
    align-items: left;
    justify-content:space-between;

    padding: 13px;
    background-color: #FFFFFF;
    margin: 15px 0;

    border-radius:5px;
`;

export const Div = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
`;

export const Title = styled.div`
    width: 100%;
    height:25px;

    font-family: 'Lexend Deca';
    font-weight: 400; 
    font-size: 20px;
    line-height: 25px;

    color:#666666;

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