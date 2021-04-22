import styled from "styled-components";

export const Container = styled.div`
    padding: .5rem calc((100vw - 1000px) / 2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    h1 {
        margin-bottom: .5rem;
        text-transform: uppercase;
    }
`
export const Form = styled.form`
    box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.5);
    border-radius: .5rem;
    padding: .5rem;
    background: #fff;
    width: 100%;
`
export const RadioContent = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
`
export const Call = styled.div``
export const Put = styled.div``
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    select {
        width: 100%;
        border: 0;
        background: #f4f4f4;
        padding: .75rem;
        border-radius: .25rem;
        font-size: 1rem;
    }
`
export const Label = styled.label`
    margin-bottom: .25rem;
    font-weight: 500;
    text-transform: uppercase;
`