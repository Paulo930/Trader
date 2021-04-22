import styled from "styled-components";

export const Container = styled.div`
    padding: .5rem calc((100vw - 1000px) / 2);
    height: 90vh;
`
export const ContentCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
`
export const Card = styled.div`
    background: #fff;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    border-radius: .5rem;
    &:nth-child(n + 4) {
        grid-column: 1 / 4;
        padding: 0;
        .header {
            align-self: center;
            p {
                margin: auto 0;
            }
            svg {
                display: none;
            }
        }
        .main {
            display: flex;
            justify-content: center;
            align-items: center;
            h1 {
                margin-right: 1rem;
            }
            h3 {
                display: none;
            }
        }
    }
`
export const Header = styled.div``
export const Placing = styled.p``
export const Main = styled.div``
export const Content = styled.div``