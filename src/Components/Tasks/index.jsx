import {BsFillCheckSquareFill} from "react-icons/bs";
import { Container, Div, Title, Text } from "./style";
import { useContext } from "react";
import UserContext from "../Context/context.jsx";
import axios from "axios";

export default function Tasks({item, setTaskList}){
    const { apiData } = useContext(UserContext);
    
    function updateTasks(){
        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_SearchHabits = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const request = axios.get(URL_SearchHabits, config);
        request.then(response => setTaskList(response.data));
        request.catch(erro => console.log("erro", erro));
    }

    function toggleCheck(){
        let checked = "";
        (item.done) ? checked="uncheck" : checked="check";

        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_Check = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/${checked}`;
        const request = axios.post(URL_Check, {},config);
        request.then(updateTasks());
        request.catch(erro => console.log("erro", erro));
    }

    return (
        <Container>
            <Div>
                <Title>{item.name}</Title>
                <Text>Sequencia atual: {item.curretSequence} dia(s)</Text>
                <Text>Seu recorde: {item.highestSequence} dia(s)</Text>
            </Div>
            <Div>
                <BsFillCheckSquareFill size={70} color={item.done ? "#8fc549" : "#EBEBEB"} onClick={toggleCheck}/>
            </Div>
        </Container>
    )
}