import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, NavDropdown, Navbar, Nav, Image, Figure, Card } from 'react-bootstrap';
import '../css/topSideBar.css'
import images from '../images/1122.jpg'
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import '../css/timeClock.css'
import '../components/form.js'
import ConsumeAPI from '../api/index'





export default class TopSideBar extends React.Component {

    state = {
        date: null,
        day: null,
        isUpdate: false,
        lengthPutin: null,
        user: []
    }
    async componentDidMount() {
        // setInterval(function(){ alert("Hello"); }, 3000);
        setInterval(() => {
            var today = new Date();
            // var d = today.getUTCDate();
            // var M = today.getMonth();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            // var y = today.getFullYear();
            var P = today.toDateString();
            // add a zero in front of numbers<10
            m = this.checkTime(m);
            s = this.checkTime(s);

            this.setState({
                date: h + " : " + m + " : " + s,
                day: P
            })
        }, 1000);
        var putin = await ConsumeAPI('get', '/model/putin')
        this.setState({ lengthPutin: putin.length, user: await ConsumeAPI('get', '/model/user') })

        // console.log(this.state.user);

        setInterval(async () => {
            var putin = await ConsumeAPI('get', '/model/putin')
            // console.log(putin.length != this.state.lengthPutin);
            if (putin.length != this.state.lengthPutin) {
                // console.log(putin[putin.length - 1].template);
                var template = { template: putin[putin.length - 1].template }
                var user = await ConsumeAPI('post', '/user/readbyid', template)
                // console.log(user);
                console.log(putin[putin.length - 1]);
                console.log(user[0]);
                var data = Object.assign(putin[putin.length - 1], user[0])
                console.log(data);
                this.setState({
                    isUpdate: true,
                    lengthPutin: putin.length,
                    user: data
                })
                // console.log(this.state.user);
                setTimeout(() => {
                    this.setState({ isUpdate: false, user: [] })
                }, 10000);
            }



        }, 1000);




    }
    checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    render() {
        const isUpdate = this.state.isUpdate
        var page = '';
        var user = this.state.user
        if (isUpdate) {
            page = (
                <Col className="mt-3">
                    <Figure >
                        <Figure.Image
                            width={350}
                            height={400}
                            alt="171x180"
                            src={user.image} thumbnail
                        />
                    </Figure>
                    <Row >
                        <Col md={{ span: 4, offset: 4 }}>
                            <Card >
                                <Card.Body >
                                    <Card.Title as="h3">Profile</Card.Title>
                                    <Card.Text className='text-left px-3'>
                                        Name : {user.name} <br />
                                        LastName : {user.lastname} <br />
                                        JobPosition : {user.jobposition}<br />
                                        EmployeeID : {user.id}   <br />
                                        Tepereture : {user.temp} <br />
                                        Status : {String(user.status)}  <br />
                                        CheckTime : {user.time} <br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            )

        } else {
            page = (
                <Col>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='sizeClocke'>
                        {this.state.day}
                    </div>
                    <div className='sizeClock'>
                        {this.state.date}
                    </div>
                </Col>
            )
        }



        return (
            <Container fluid className='bgImage' >

                <Row className="mb-5" md='3'>
                    <Col className="p-0 " >
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
                            <div className="timeClock">
                                <Navbar.Brand href="#home">Attendance Check System for Employee in a Building</Navbar.Brand >
                            </div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className="ml-auto">

                                    <NavDropdown alignRight id="collasible-nav-dropdown" title={
                                        <span>
                                            <Image className="image" src={images} roundedCircle />
                                        </span>}>
                                        <Link to={`/topsideBar`}>
                                            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                                        </Link>

                                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
                <Row className="pt-5 text-center">
                    {page}
                    {/*                   
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                        <div className='sizeClocke'>
                            {this.state.day}
                        </div>
                        <div className='sizeClock'>
                            {this.state.date}
                        </div>


                    </Col> */}
                </Row>
            </Container>
        )
    }
}
