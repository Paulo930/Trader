import React from 'react'
import { Container, Content, Login, Image, Card, CardHeader, CardBody, Form, FormGroup, Label } from "./styles";
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login.svg'

export default function Register() {
    return (
        <Container>
            <Content>
                <Card>
                    <CardHeader>
                        <h1>Increver-se</h1>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={e => e.preventDefault()}>
                            <FormGroup>
                                <Label>Nome</Label>
                                <input />
                            </FormGroup>
                            <FormGroup>
                                <Label>E-mail</Label>
                                <input />
                            </FormGroup>
                            <FormGroup>
                                <Label>Data de Nacimento</Label>
                                <input type="date" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Senha</Label>
                                <input />
                            </FormGroup>
                            <FormGroup>
                                <Label>Confirner Senha</Label>
                                <input />
                            </FormGroup>
                            <button>Cadastre-se</button>
                        </Form>
                    </CardBody>
                </Card>
            </Content>
            <Content>
                <Login>
                    <h1>Já é um de nós?</h1>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                    <button><Link to="/login">Conecte-se</Link></button>
                </Login>
                <Image>
                    <img src={loginImg} alt="Image Register"></img>
                </Image>
            </Content>            
        </Container>
    )
}