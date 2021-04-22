import React from 'react'
import { Container, Content, Title, Nav, NavLink } from "./styles";

export default function PageNotFound() {
    return (
        <Container>
            <Content>
                <Title><span>Error - 404</span></Title>
                <p>An error has occured, to continue:</p>
                <p>* Return to our homepage.<br />
                * Send us an e-mail about this error and try later.</p>
                <Nav>
                    <NavLink to="/">index</NavLink>&nbsp;|&nbsp;<NavLink>webmaster</NavLink>
                </Nav>
            </Content>
        </Container>
    )
}
