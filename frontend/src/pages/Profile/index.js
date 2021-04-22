import React from 'react';
import { IoPencil } from "react-icons/io5";
import { Container, Content, Dice } from "./styles";
import imgProfire from "../../assets/images/profile.jpg";

export default function Profile() {
    return (
        <Container>
            <Content>
                <img src={imgProfire} alt="Photo Profile"/>
                <Dice>
                    <h1>Paulo Eduardo</h1>
                    <p>pauloedu531@gmail.com</p>
                    <span>12/09/2002</span>
                    <button>
                        Editar
                        <IoPencil size={13} color="#fff" />
                    </button>
                </Dice>
            </Content>
        </Container>
    )
}