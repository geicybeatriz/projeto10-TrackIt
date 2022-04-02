import Footer from "../Footer";
import Header from "../Header";
import {ContainerHistoric, Container, Title, Text} from "./style";



export default function HistoricPage(){
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