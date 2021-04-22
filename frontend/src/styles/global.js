import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Ubuntu', sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
        font-weight: 400;
        background: #f4f4f4;
        /* background: #2c3e50; */
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    button {
        background: #6c63fe;
        border: 0;
        border-radius: .25rem;
        padding: .6rem .5rem;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .3s linear;
        &:hover {
            opacity: 90%;
            transform: scale(1.1);
        }
    }
    input {
        width: 100%;
        border: 0;
        background: #f4f4f4;
        padding: .75rem;
        border-radius: .25rem;
        font-size: 1rem;
    }
`