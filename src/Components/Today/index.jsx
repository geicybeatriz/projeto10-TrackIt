import Footer from "../Footer";
import Header from "../Header";
import Tasks from "../Tasks";
import { ContainerTodayPage, Container, Title, Text } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/context.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function TodayPage(){
    const { apiData } = useContext(UserContext);
    const [taskList, setTaskList] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => !apiData.token && navigate("/"), [apiData.token, navigate]);

    useEffect(() => {
        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_SearchHabits = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const request = axios.get(URL_SearchHabits, config);
        request.then(response => {console.log(response.data);
                                    setTaskList(response.data)});
        request.catch(erro => console.log("erro", erro));
    }, [apiData.token]);

    console.log(taskList);

    return (
        <ContainerTodayPage>
            <Header/>

            <Container>
                <Title>Segunda-feira</Title>
                <Text>Nenhum hábito concluído ainda </Text>
                {taskList.map((item, i) => <Tasks key={i} item={item} setTaskList={setTaskList}/>)}
            </Container>

            <Footer />
        </ContainerTodayPage>
    );
}