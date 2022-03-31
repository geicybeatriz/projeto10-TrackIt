import logo from "./../../assets/img/logo-trackit.png";
import {Container, Logo, Form, Inputs, Button, Anchor} from "./../../assets/css/style.jsx"


export default function Login(){
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
                    <Button>Entrar</Button>
                </Form>

                <Anchor to="/cadastro">Não tem uma conta? Cadastre-se!</Anchor>
            </Container>
        </>
    )
}