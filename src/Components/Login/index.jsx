import logo from "./../../assets/img/logo-trackit.png";
import loading from "../../assets/img/loading.gif"
import {Container, Logo, Form, Inputs, Button, Anchor} from "./../../assets/css/style.jsx"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/context";
import axios from "axios";

export default function Login(){
    const {setApiData} = useContext(UserContext);
    const [userData, setUserData] = useState({email: '', password: ''});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function logInto(e){
        e.preventDefault();
        setDisabled(true);

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(URL,userData);
        promise.then((response) => {console.log(response);
                                    setApiData(response.data);
                                    navigate('/habitos')});

        promise.catch((erro) => {console.log(erro);
                                alert("Algo deu errado. Tente novamente.");
                                setDisabled(false);})
    }
    
    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt="TrackIt"/>
                    <h1>TrackIt</h1>
                </Logo>
    
                <Form onSubmit={logInto}>
                    <Inputs type="email" placeholder="email" value={userData.email} 
                            onChange={(e) => setUserData({...userData, email:e.target.value})} disabled={disabled}/>

                    <Inputs type="password" placeholder="senha" value={userData.password} 
                            onChange={(e) => setUserData({...userData, password: e.target.value})} disabled={disabled}/>

                    <Button type="submit" disabled={disabled}>
                        {!disabled ? "Entrar" : <img src={loading} alt="loading" />}
                    </Button>
                </Form>

                <Anchor to="/cadastro">Não tem uma conta? Cadastre-se!</Anchor>
            </Container>
        </>
    )
}