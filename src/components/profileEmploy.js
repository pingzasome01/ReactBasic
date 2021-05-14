import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, NavDropdown, Navbar, Nav, Image, Card, Figure } from 'react-bootstrap';
import '../css/topSideBar.css'
import '../css/profileEmploy.css'
import images from '../images/1122.jpg'



export default class TopSideBar extends React.Component {
    render() {
        return (
            <Container fluid className='bgImage' >
                <Row>
                    <Col className='p-0' >
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                            <div className='timeClock'>
                                <Navbar.Brand href="#home">Attendance Check System for Employee in a Building</Navbar.Brand>
                            </div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <NavDropdown alignRight id="collasible-nav-dropdown" title={
                                        <span>
                                            <Image className="image" src={images} roundedCircle />
                                        </span>}>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>

                <Col md={3} >

                    <Figure classname='figure'>
                        <Figure.Image
                            width={350}
                            height={400}
                            alt="171x180"
                            src={images} thumbnail
                        />

                    </Figure>
                    <Row classname='col-center' >
                        <Col xs={10} md={10}>
                            <div className='testp'>
                                <Card style={{ width: '30rem' }} >
                                    <Card.Body>
                                        <Card.Title as="h3">Profile</Card.Title>
                                        <Card.Text >
                                            Name : Tay <br />
                                        LastName :  <br />
                                        JobPosition : <br />
                                        EmployeeID :     <br />
                                        Tepereture :  <br />
                                        Status :  <br />
                                        CheckTime : <br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Col>
                    </Row>

                </Col>



            </Container>
        )
    }
}