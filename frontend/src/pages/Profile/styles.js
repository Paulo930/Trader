import styled from "styled-components";
import imgBanner from "../../assets/images/banner.jpg"

export const Container = styled.div`
    padding: .5rem calc((100vw - 1000px) / 2);
    height: 90vh;
`
export const Content = styled.div`
    background: url(${imgBanner});
    background-repeat: no-repeat;
    background-position: 100%;
    display: flex;
    padding: .5rem;
    border-radius: .5rem;
    align-items: center;
    position: relative;
    &:before {
        content: '';
        background: #000;
        position: absolute;
        opacity: .4;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: .5rem;
    }
    img {
        z-index: 1;
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
`
export const Dice = styled.div`
    color: #fff;
    z-index: 1;
    width: 100%;
    margin-left: 1rem;
    position: relative;
    p {
        margin: .3rem 0;
    }
    span {
        font-weight: 100;
    }
    button {
        position: absolute;
        right: 10%;
        top: 25%;
    }
`