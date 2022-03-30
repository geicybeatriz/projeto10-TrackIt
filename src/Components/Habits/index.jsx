import {Container, ContainerHabits} from "./style.jsx";
import Header from "../Header";
import Footer from "../Footer/index.jsx";

export default function Habits(){
    return (
        <Container>
            <Header/>
            <ContainerHabits>
                <h1>Aqui</h1>
            </ContainerHabits>
            <Footer/>
        </Container>

    );
}