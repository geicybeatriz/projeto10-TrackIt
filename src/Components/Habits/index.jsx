import {Container, ContainerHabits, Title, Button, Text} from "./style.jsx";

import axios from "axios";

import Header from "../Header";
import Footer from "../Footer";
import NewHabit from "../NewHabit";

//Context API
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/context.jsx";

export default function Habits(){
    const { apiData } = useContext(UserContext);
    const [habitList, setHabitList] = useState([]);
    const [addHabito, setAddHabito] = useState(false);

    console.log(apiData);

    const config = {headers: {Authorization: `Bearer ${apiData.token}`}};

    useEffect(() => {
        const URL_HabitsList = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const request = axios.get(URL_HabitsList, config);
        request.then(response => { setHabitList(response.data);
                                    console.log("lista hábitos", habitList)});
        request.catch(erro => console.log("erro", erro));
    }, [habitList]);


    //     const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idHora}/seats`);
    //     promise.then((response) => setPoltronas(response.data));
    // }, [idHora]);

    return (
        <Container>
            <Header/>

            <ContainerHabits>
                <Title>
                    <h1>Meus hábitos</h1>
                    <Button onClick={() => setAddHabito(true)}>+</Button>
                </Title>

                <NewHabit addHabito={addHabito} setAddHabito={setAddHabito}/>

                {habitList.length === 0 ? 
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text> 
                : 
                <></>}
                
            </ContainerHabits>

            <Footer/>
        </Container>
    );
}