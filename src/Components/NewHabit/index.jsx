import {ContainerCreate, Inputs, WeekDays, Day, Buttons, Button } from "./style";


export default function NewHabit(){
    const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return (
        <>
            <ContainerCreate>
                <Inputs type="text" placeholder="nome do hábito"></Inputs>
                <WeekDays>
                    {week.map((days, i) => <Day key={i} >{days[0]}</Day>)}
                </WeekDays>
                <Buttons>
                    <Button >Cancelar</Button>
                    <Button>Salvar</Button>
                </Buttons>

            </ContainerCreate>
        </>

    );
}