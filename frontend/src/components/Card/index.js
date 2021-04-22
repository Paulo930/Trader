import React from 'react'
import { Container, CardContainer, CardHeader, Info, CardBody } from "./styles";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

export default function Card() {
    return (
        <Container>
            <CardContainer>
                <CardHeader>
                    <FaArrowUp size={32} color="#2ecc71" />
                    {/* <FaArrowDown size={16} color="#e74c3c" /> */}
                    <Info>
                        <h1>EUR/USB</h1>
                        <span>Binária</span>
                        <small>R$ 10,00 - 91%</small>
                    </Info>
                </CardHeader>
                <CardBody>
                    <strong>Winn - </strong>R$ 9.10
                </CardBody>
            </CardContainer>
            <CardContainer>
                <CardHeader>
                    <FaArrowDown size={32} color="#e74c3c" />
                    {/* <FaArrowUp size={32} color="#2ecc71" /> */}
                    <Info>
                        <h1>EUR/USB</h1>
                        <span>Binária</span>
                        <small>R$ 10,00 - 91%</small>
                    </Info>
                </CardHeader>
                <CardBody>
                    <strong>Loss - </strong>R$ -10.00
                </CardBody>
            </CardContainer>
        </Container>
    )
}
