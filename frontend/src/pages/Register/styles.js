import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 94.4vh;
    display: flex;
`
export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65%;
    text-align: center;
    h1 {
        margin-bottom: .5rem;
    }
    p {
        margin-bottom: .5rem;
    }
    a {
        color: #fff;
    }
`
export const Image = styled.div`
    margin: 1rem 0 -5rem 0;
    img {
        width: 100%;
        height: 80%;
    }
`
export const Card = styled.div`
    width: 60%;
    height: 65%;
    background: #fff;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.5);
    border-radius: .5rem;
`
export const CardHeader = styled.div`
    margin-bottom: 2rem;
    text-transform: uppercase;
    h1 {
        font-size: 2.5rem;
    }
`
export const CardBody = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;
`
export const Form = styled.form`
    text-align: center;
`
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1.5rem;
`
export const Label = styled.label`
    margin-bottom: .25rem;
    font-weight: 500;
    text-transform: uppercase;
`