import React from 'react'
import {  Navbar } from "react-bootstrap";
export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">
                    <i className="fas fa-home"> </i>
                    {" "} Contador
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
