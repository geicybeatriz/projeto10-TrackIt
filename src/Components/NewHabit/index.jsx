import {ContainerCreate, Inputs, WeekDays, Day, Buttons, Button } from "./style";


export default function NewHabit(props){
    const {addHabito, setAddHabito} = props;
    const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return (
        <>
            <ContainerCreate addHabito={addHabito}>
                <Inputs type="text" placeholder="nome do hábito"></Inputs>
                <WeekDays>
                    {week.map((days, i) => <Day key={i} >{days[0]}</Day>)}
                </WeekDays>
                <Buttons>
                    <Button onClick={() => setAddHabito(false)}>Cancelar</Button>
                    <Button>Salvar</Button>
                </Buttons>

            </ContainerCreate>
        </>

    );
}