import {ContainerCreate, Inputs, WeekDays, Day, Buttons, CancelButton, SaveButton } from "./style";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

//Context API
import { useContext, useState } from "react";
import UserContext from "../Context/context.jsx";

export default function AddHabit(props){
    const { apiData } = useContext(UserContext);
    const {addHabito, setAddHabito, updateHabitsList} = props;
    const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const [disabled, setDisabled] = useState(false);
    const [newHabit, setNewHabit] = useState({name: '', days:[]});

    function selectDay(i){
        if(newHabit.days.includes(i)){
            setNewHabit({...newHabit, days: newHabit.days.filter((e) => i === e ? false : true)});
        } else {
            setNewHabit({...newHabit, days: [...newHabit.days, i]});
        }
    }

    function saveNewHabit(){
        if(newHabit.days.length === 0 ){
            alert("Selecione pelo menos um dia da semana!");
            return;
        }

        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_SaveNewHabit = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const request = axios.post(URL_SaveNewHabit, newHabit, config);
        setDisabled(true);
        request.then((response) => {
            setDisabled(false);
            setAddHabito(false);
            console.log(response.data);
            setNewHabit({name: '', days:[]});
            updateHabitsList();
        } );
        request.catch((erro) => {
            console.log("erro", erro);
            setDisabled(false);
            (newHabit.name.length === 0 && alert("Digite o nome do seu hábito!"))})
    }
    
    return (
        <>
            <ContainerCreate addHabito={addHabito}>
                <Inputs type="text" 
                        placeholder="nome do hábito" 
                        value={newHabit.name}
                        onChange={(e) => setNewHabit({...newHabit, name: e.target.value})}
                        disabled={disabled}
                        required></Inputs>
                <WeekDays>
                    {week.map((days, i) => 
                        <Day key={i} 
                            selected={newHabit.days.includes(i)}
                            onClick={() => selectDay(i)} 
                            disabled={disabled}>{days[0]}</Day>)}
                </WeekDays>
                <Buttons>
                    <CancelButton onClick={() => setAddHabito(false)} disabled={disabled}>Cancelar</CancelButton>
                    <SaveButton onClick={saveNewHabit} disabled={disabled} >
                        {!disabled ? "Salvar" : <ThreeDots width="40" height="20" color="white" ariaLabel="loading"/>}</SaveButton>
                </Buttons>

            </ContainerCreate>
        </>

    );
}