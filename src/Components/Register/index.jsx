import logo from "../../assets/img/logo-trackit.png";
import {Container, Logo, Form, Inputs, Button, Anchor} from "../../assets/css/style.jsx";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Register(){
    const [data, setData] = useState({email: '', name: '', image: '', password: ''});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function submitUserData(e){
        e.preventDefault();
        setDisabled(true);

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(URL, data);
        promise.then(() => navigate('/'));

        promise.catch((erro) => {console.log("erro", erro);
                                setDisabled(false);
                                alert("Algo deu errado. Tente novamente.")});
    }

    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt="TrackIt"/>
                    <h1>TrackIt</h1>
                </Logo>
    
                <Form onSubmit={submitUserData}>
                    <Inputs type="text" placeholder="email" value={data.email} onChange={(e) => setData({...data, email:e.target.value})} disabled={disabled}/>
                    <Inputs type="password" placeholder="senha" value={data.password} onChange={(e) => setData({...data, password:e.target.value})} disabled={disabled}/>
                    <Inputs type="text" placeholder="nome" value={data.name} onChange={(e) => setData({...data, name:e.target.value})} disabled={disabled}/>
                    <Inputs type="url" placeholder="foto" value={data.image} onChange={(e) => setData({...data, image:e.target.value})} disabled={disabled}/>
                    <Button type="submit" disabled={disabled}>{!disabled ? "Cadastrar" 
                    : <ThreeDots width="60" height="60" color="white" ariaLabel="loading"/>}</Button>
                </Form>
                <Anchor to='/'>J?? tem uma conta? Fa??a login!</Anchor>
            </Container>
        </>
    )
}