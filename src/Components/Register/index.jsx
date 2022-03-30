import logo from "../../assets/img/logo-trackit.png";
import {Container, Logo, Form, Inputs, Button, Anchor} from "../../assets/css/style.jsx";

export default function Register(){
    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt="TrackIt"/>
                    <h1>TrackIt</h1>
                </Logo>
    
                <Form>
                    <Inputs type="email" placeholder="email"></Inputs>
                    <Inputs type="password" placeholder="senha"></Inputs>
                    <Inputs type="text" placeholder="nome"></Inputs>
                    <Inputs type="url" placeholder="foto"></Inputs>
                    <Button>Cadastrar</Button>
                </Form>

                <Anchor>Já tem uma conta? Faça login!</Anchor>
            </Container>
        </>
    )
}