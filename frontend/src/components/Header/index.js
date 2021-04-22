import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { routes } from "../../assets/json/routes.json";
import { Navbar, NavMenu, NavLink, Bars, NavBtn, NavBtnLink } from "./styles";
import logoImg from "../../assets/images/logo.png";

export default function Header() {
    let location = useLocation()
    const [hidden, setHidden] = useState(false)
    useEffect(() => setHidden(!routes.includes(location.pathname)) ,[location.pathname])
    return (
        <Navbar hidden={hidden}>
            <NavLink to="/">
                <img src={logoImg} alt="trader"/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/registertrades">Cadastrar</NavLink>
                <NavLink to="/trader">Trader</NavLink>
                <NavLink to="/graphic">Gráfico</NavLink>
                <NavLink to="/profile">Pefil</NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/login">Logar</NavBtnLink>
            </NavBtn>
        </Navbar>
    )
}
