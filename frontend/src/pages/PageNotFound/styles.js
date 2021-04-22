import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    font: normal 2.75rem/1.05em 'VT323', monospace;
    background: #0414a7;
    color: #e0e2f4;
    width: 100vw;
    height: 100vh;
    padding-top: 10%;
`
export const Content = styled.div`
    width: 90%;
    margin: auto;
    max-width: 640px;
    p {
        font: normal 20px/1.25rem 'VT323', monospace;
    }
`
export const Title = styled.h1`
    font: normal 2.75rem/1.05em 'VT323', monospace;
    margin-bottom: 50px;
    text-align: center;
    color: #0414a7;
    span {
        background: #aaaaaa;
        padding: 0 15px 2px 13px;
    }
`
export const Nav = styled.div`
    margin-top: 35px;
    text-align: center;
`
export const NavLink = styled(Link)`
    font: normal 20px/1.25rem 'VT323', monospace;
    text-decoration: none;
    padding: 0 9px 2px 8px;
    color: #e0e2f4;
    &:hover,
    &:focus {
        background: #aaaaaa;
        color: #0414a7;
    }
`