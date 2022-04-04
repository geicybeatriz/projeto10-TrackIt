import styled from "styled-components";

export const Container = styled.section`
    width:90%;
    height: 91px;

    display:flex;
    align-items: left;
    justify-content:space-between;

    padding: 13px;
    background-color: #FFFFFF;
    margin: 10px 0;

    border-radius:5px;
`;

export const Div = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
`;

export const Title = styled.h3`
    width: 208px;
    height: 25px;

    font-size: 19px;
    line-height: 25px;
    color: #666666;
`;

export const Text = styled.div`
    width: 208px;
    height: 16px;

    font-size: 13px;
    line-height: 16px;
    color: #666666;
    
    display:flex;
    gap: 5px;
`;

export const Result = styled.p`
    font-size: 13px;
    line-height: 16px;
    color: ${props => (props.done || props.record) ? "#8fc549" :"#666666"};

`;