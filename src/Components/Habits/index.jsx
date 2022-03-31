import {Container, ContainerHabits, Title, Button, Text} from "./style.jsx";
import Header from "../Header";
import Footer from "../Footer";
import NewHabit from "../NewHabit";

export default function Habits(){
    return (
        <Container>
            <Header/>

            <ContainerHabits>
                <Title>
                    <h1>Meus hábitos</h1>
                    <Button>+</Button>
                </Title>

                <NewHabit/>
                
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </ContainerHabits>

            <Footer/>
        </Container>

    );
}