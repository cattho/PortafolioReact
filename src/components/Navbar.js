import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";


export default class navbar extends Component{
    render(){
        return(
            <Navbar className="prueba" variant="dark">
                <Container>
                <Navbar.Brand href="#top"><img className="navImg" src="https://img2.freepng.es/20190223/btf/kisspng-kitten-cat-portable-network-graphics-clip-art-imag-cat-cutie-kawaii-stickersalma-black-gato-negro-fre-5c715120c41153.9410608215509302088031.jpg" /></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Hola</Nav.Link>
                <Nav.Link href="#features">Proyectos</Nav.Link>
                <Nav.Link href="#pricing">Testimonios</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>                
                </Nav>                                   
                <Button variant="outline-success">Descargar curriculum</Button>                
                </Container>
            </Navbar>
        )
    }
}