import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { routes } from "../../assets/json/routes.json";
import { Footer } from "./styles";

export default function Header() {
    let location = useLocation()
    const [hidden, setHidden] = useState(false)
    useEffect(() => setHidden(!routes.includes(location.pathname)) ,[location.pathname])
    return (
        <Footer hidden={hidden}>
            <hr/>
            <small>Desenvouvido por Paulo</small>
        </Footer>
    )
}
