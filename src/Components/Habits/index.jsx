import {Container, ContainerHabits, Title, Button, Text} from "./style.jsx";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import AddHabit from "../AddHabit";
import UserHabit from "../UserHabit/index.jsx";
import { useNavigate } from "react-router-dom";

//Context API
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/context.jsx";


export default function Habits(){
    const { apiData } = useContext(UserContext);
    const [habitList, setHabitList] = useState([]);
    const [addHabito, setAddHabito] = useState(false);
    const navigate = useNavigate();

    useEffect(() => !apiData.token && navigate("/"), [apiData.token, navigate]);

    useEffect(() => {
        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_HabitsList = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const request = axios.get(URL_HabitsList, config);
        request.then(response => setHabitList(response.data));
        request.catch(erro => console.log("erro", erro));
    }, [apiData.token]);

    function updateHabitsList(){
        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_HabitsList = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const request = axios.get(URL_HabitsList, config);
        request.then(response => setHabitList(response.data));
        request.catch(erro => console.log(erro));
    }

    return (
        <Container>
            <Header/>

            <ContainerHabits>
                <Title>
                    <h1>Meus hábitos</h1>
                    <Button onClick={() => setAddHabito(true)}>+</Button>
                </Title>

                <AddHabit updateHabitsList={() => updateHabitsList()} addHabito={addHabito} setAddHabito={setAddHabito}/>

                {habitList.length === 0 &&
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Text> }

                {habitList.map((data, i) => <UserHabit updateHabitsList={() => updateHabitsList()} setHabitList={ setHabitList} key={i} data={data}/>)}
                
            </ContainerHabits>

            <Footer/>
        </Container>
    );
}