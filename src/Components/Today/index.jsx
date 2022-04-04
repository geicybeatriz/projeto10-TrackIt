import Footer from "../Footer";
import Header from "../Header";
import Tasks from "../Tasks";
import { ContainerTodayPage, Container, Title, Text } from "./style";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/context.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function TodayPage(){
    const { apiData, progress, setProgress } = useContext(UserContext);
    const [taskList, setTaskList] = useState([]);
    const [taskDone, setTaskDone] = useState([]);
    const navigate = useNavigate();
    dayjs.locale('pt-br');

    useEffect(() => !apiData.token && navigate("/"), [apiData.token, navigate]);

    useEffect(() => {
        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_SearchHabits = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const request = axios.get(URL_SearchHabits, config);

        request.then(response => {setTaskList(response.data);
                                setTaskDone(response.data.filter((e) => e.done));
                                setProgress(Math.round((taskDone.length*100)/taskList.length))
                                });

        request.catch(erro => console.log("erro", erro));
    }, [apiData.token, taskList.length, setProgress, taskDone.length]);

    return (
        <ContainerTodayPage>
            <Header/>

            <Container>
                <Title>
                    {`${(dayjs().format('dddd'))[0].toUpperCase()}${(dayjs().format('dddd, DD/MM')).slice(1)}`}
                </Title>

                <Text done={progress !== 0}>
                    {progress !== 0 ? `${progress}%  dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
                </Text>
                {taskList.map((item, i) => 
                    <Tasks  key={i} 
                            item={item} 
                            taskList={taskList} 
                            setTaskList={setTaskList} 
                            taskDone={taskDone} 
                            setTaskDone={setTaskDone}/>
                )}
            </Container>

            <Footer />
        </ContainerTodayPage>
    );
}