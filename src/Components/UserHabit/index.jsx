import {Container, Title, WeekDays, Day, Div} from "./style.jsx";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../Context/context.jsx";

export default function UserHabit({data, updateHabitsList}){
    const { apiData } = useContext(UserContext);
    const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    function deleteHabit(id){
        const config = {headers: { Authorization: `Bearer ${apiData.token}`}};
        const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const request = axios.delete(URL_DELETE, config);
        request.then(() => window.confirm("Realmente deseja deletar esse hábito?") ===true && updateHabitsList());
        request.catch(r => console.log(r));
    }



    return (
        <Container>
            <Div>
                <Title>{data.name}</Title>
                <WeekDays>
                    {week.map((d, i) => 
                    <Day key={i} 
                    selected={data.days.includes(i)}
                    disabled>{d[0]}</Day>)}
                </WeekDays>
            </Div>
            <Div>
                <BsTrash onClick={() => deleteHabit(data.id)}color="#666666"/>
            </Div>
        </Container>
    );
}