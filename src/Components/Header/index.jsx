import styled from "styled-components";

//Context API
import { useContext } from "react";
import UserContext from "../Context/context.jsx";

export default function Header(){
    const {apiData} = useContext(UserContext);


    return (
        <Top>
            <p>TrackIt</p>
            <img src={apiData.image} alt="Foto de perfil"/>
        </Top>
    );
}

const Top = styled.header`
    width: 100%;
    height: 70px;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 18px;

    img{
        width: 51px;
        height: 51px;

        border-radius: 50%;
        object-fit: cover;

    }
    p{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 49px;

        color: #FFFFFF;
    }
`;