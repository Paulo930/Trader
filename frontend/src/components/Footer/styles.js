import styled from "styled-components";

export const Footer = styled.footer`
    display: ${props => props.hidden ? 'none' : 'block'};
    background: #070c1f;
    height: 60px;
    padding: 1rem 1rem 2rem;
    position: relative;
    small {
        color: #fff;
        position: absolute;
        right: 1rem;
        top: 40%;
    }
`;