import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import {ContainerHistoric, Container, Title, Text} from "./style";
import { useContext, useEffect } from "react";
import UserContext from "../Context/context.jsx";



export default function HistoricPage(){
    const { apiData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => !apiData.token && navigate("/"), [apiData.token, navigate]);
    return (
        <ContainerHistoric>
            <Header />

            <Container>
                <Title>Histórico</Title>
                <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            </Container>

            <Footer />
        </ContainerHistoric>
    )
}