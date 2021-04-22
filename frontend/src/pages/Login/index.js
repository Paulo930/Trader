import React from 'react'
import { Container, Content, Register, Image, Card, CardHeader, CardBody, Form, FormGroup, Label, CardFooter } from "./styles";
import { Link } from 'react-router-dom';
import registerImg from '../../assets/images/register.svg'

export default function Login() {
    return (
        <Container>
            <Content>
                <Register>
                    <h1>Novo aqui?</h1>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                    <button><Link to="/register">Inscrever-se</Link></button>
                </Register>
                <Image>
                    <img src={registerImg} alt="Image Register"></img>
                </Image>
            </Content>            
            <Content>
                <Card>
                    <CardHeader>
                        <h1>Login</h1>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={e => e.preventDefault()}>
                            <FormGroup>
                                <Label>E-mail</Label>
                                <input />
                            </FormGroup>
                            <FormGroup>
                                <Label>Senha</Label>
                                <input />
                            </FormGroup>
                            <button>Login</button>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Link>Esqueceu a senha?</Link>
                    </CardFooter>
                </Card>
            </Content>
        </Container>
    )
}