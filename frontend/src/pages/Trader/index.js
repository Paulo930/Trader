import React from 'react';
import { IoTrophySharp } from "react-icons/io5";
import { Container, ContentCard, Card, Header, Placing, Main, Content } from "./styles";

export default function Trader() {
    return (
        <Container>
            <ContentCard>
                <Card>
                    <Header className="header">
                        <Placing>1°</Placing>
                        <IoTrophySharp size={100} color="#ff0"/>
                    </Header>
                    <Main className="main">
                        <h1>Paulo Eduardo</h1>
                        <Content>
                            <h3>Valor Conseguido:</h3>
                            <p>R$ 200,000.00</p>
                        </Content>
                    </Main>
                </Card>
                <Card>
                    <Header className="header">
                        <Placing>2°</Placing>
                        <IoTrophySharp size={100} color="#7f8fa6"/>
                    </Header>
                    <Main className="main">
                        <h1>Paulo Eduardo</h1>
                        <Content>
                            <h3>Valor Conseguido:</h3>
                            <p>R$ 100,000.00</p>
                        </Content>
                    </Main>
                </Card>
                <Card>
                    <Header className="header">
                        <Placing>3°</Placing>
                        <IoTrophySharp size={100} color="#e15f41"/>
                    </Header>
                    <Main className="main">
                        <h1>Paulo Eduardo</h1>
                        <Content>
                            <h3>Valor Conseguido:</h3>
                            <p>R$ 50,000.00</p>
                        </Content>
                    </Main>
                </Card>
                <Card>
                    <Header className="header">
                        <Placing>4°</Placing>
                        <IoTrophySharp size={100} color="#000"/>
                    </Header>
                    <Main className="main">
                        <h1>Paulo Eduardo</h1>
                        <Content>
                            <h3>Valor Conseguido:</h3>
                            <p>R$ 200,000.00</p>
                        </Content>
                    </Main>
                </Card>
            </ContentCard>
        </Container>
    )
}