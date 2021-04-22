import React from 'react'
import { Container, Form, RadioContent, Call, Put, FormGroup, Label } from "./styles";

export default function RegisterTrades() {
    return (
        <Container>
            <Form>
            <h1>Cadastrar Entrada</h1>
                <RadioContent>
                    <Call>
                        <p>
                            <input type="radio"/> CALL
                        </p>
                    </Call>
                    <Put>
                        <p>
                            <input type="radio"/> PUT
                        </p>
                    </Put>
                </RadioContent>
                <FormGroup>
                    <Label>Tipo</Label>
                    <select>
                        <option>BINÁRIA</option>
                        <option>DIGITAL</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <Label>Payout</Label>
                    <input type="number"/>
                </FormGroup>
                <FormGroup>
                    <Label>Valor da Entrada</Label>
                    <input type="number"/>
                </FormGroup>
                <FormGroup>
                    <Label>Resultado</Label>
                    <RadioContent>
                        <Call>
                            <input type="radio"/> WINN
                        </Call>
                        <Put>
                            <input type="radio"/> LOSS
                        </Put>
                    </RadioContent>
                </FormGroup>
                <FormGroup>
                    <Label>Valor da Entrada</Label>
                    <input />
                </FormGroup>
                <button>Cadastrar Entrado</button>
            </Form>
        </Container>
    )
}
