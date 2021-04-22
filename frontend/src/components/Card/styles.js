import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    width: 10rem;
    height: 10rem;
    border-radius: 0.5rem;
    box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.5);
    margin: 0.2rem;
`
export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 1.5rem;
        margin-top: 0.9rem;
    }
    span {
        font-size: 1rem;
        text-transform: uppercase;
    }
    small {
        font-size: 0.6rem;
    }
`
export const CardBody = styled.div`
    margin-top: 1rem;
    text-transform: uppercase;
    strong {
        color: #c0392b;
        /* color: #27ae60; - winn */
    }
`