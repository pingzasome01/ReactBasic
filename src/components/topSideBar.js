import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, NavDropdown, Navbar, Nav, Image, Card, Table } from 'react-bootstrap';
import '../css/topSideBar.css'
import '../css/loginForm.css'
import '../css/timeClock.css'
import images from '../images/11.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ConsumeAPI from '../api/index'


export default class TopSideBar extends React.Component {
    state = {
        employee: [],
        temp: [],
        user: [],
        status: []
    }
    async componentDidMount() {
        // console.log(await ConsumeAPI('post', `user/readbyid`, {id}));
        setTimeout(async () => {
            var id = localStorage.getItem('id')
            console.log(id);
            this.setState({ user: await ConsumeAPI('post', `user/readbyid`, { id }) })
            console.log(this.state.user);

        }, 50)
        this.getstatus()
        setInterval(() => {
            this.getstatus()
        }, 1000);


        // var employee = await ConsumeAPI('get', 'employees/id')
        // var temp = await ConsumeAPI('get', 'putin/id')
        // var x =  Object.assign(employee, temp[temp.length -1])
        // this.setState({
        //     employee : x
        // })
    }
    getstatus = async () => {
        var status = await ConsumeAPI('get', `model/waterlevel`)
        if (status[0].status) {
            this.setState({ status: ['ปกติ', status[0].status] })
        } else {
            this.setState({ status: ['ต่ำกว่ากำหนด', status[0].status] })
        }
    }
    getHistory = async (e) => {
        e.preventDefault()
        const memberId = this.id.value
        this.setState({ employee: await ConsumeAPI('get', `model/user/${memberId}`) })
        console.log(this.state.employee[0].status);
        console.log(this.state.employee);

    }
    render() {
        return (
            <Container fluid className='bgImage' style={{ overflow: "hidden" }}  >
                <Row>
                    <Col className='p-0' md='3'>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                            <div className='timeClock'>
                                <Navbar.Brand href="#home">Admin</Navbar.Brand>
                            </div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <NavDropdown alignRight id="collasible-nav-dropdown" title={
                                        <span>
                                            <Image className="image" src={images} roundedCircle />
                                        </span>}>
                                        <Link to={`/ProfileEmploy`}>
                                            <NavDropdown.Item >Profile</NavDropdown.Item>
                                        </Link>
                                        
                                        <NavDropdown.Item ><Link to={"/RegisterPage"}>Register </Link></NavDropdown.Item>
                                       

                                        <NavDropdown.Divider />
                                       
                                            <NavDropdown.Item ><Link to={'/'}>Logout</Link></NavDropdown.Item>
                                        
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
                <Row  >
                    <Col className="block-example border border-dark">
                        {this.state.user.map((data, i) => {
                            return (
                                <div>
                                    <div className="test1">

                                        <Image src={data.image} roundedCircle className='image1' />
                                    </div>
                                    <div className='test2'>
                                        <Card style={{ width: '20rem' }} >
                                            <Card.Body >
                                                <div>
                                                    <Card.Title as="h3" key={i}>Profile</Card.Title>
                                                    <Card.Text >
                                                        Name : {data.name} <br />
                                                        LastName : {data.lastname} <br />
                                                        JobPosition :{data.jobposition} <br />
                                                        EmployeeID :  {data.id}   <br />
                                                        Role :  {data.role}   <br />
                                                        {/* Tempereture : {data.lastname} <br />
                                                        Status : {data.lastname} <br />
                                                    CheckTime : {data.lastname}<br /> */}
                                                    </Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            )
                        })}
                    </Col>
                    <Col md='6' >
                        <Row>

                            <Col md='12' className="block-example border border-dark box-40">

                                <div >


                                    <Form className='test3' onSubmit={this.getHistory}>
                                        <Form.Group controlId="formBasicPassword" className='sizeBox text-center'>
                                            <Form.Label>Enter the code</Form.Label>

                                            <Form.Control type="Number" placeholder="ID:MEMBER" ref={(input) => this.id = input} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className='buttonE'>
                                            Enter
                                        </Button>

                                        <div className='sidetemp'>
                                            <h3>
                                                สถานะเเอลกอฮอล์ : 
                                                {this.state.status[1]
                                                    ? <span style={{ color: 'green' }}>{this.state.status[0]}</span>
                                                    : <span style={{ color: 'red' }}>{this.state.status[0]}</span>
                                                }
                                            </h3>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                            <Col md='12' className="block-example border border-dark box-60">
                                <div className="test4">
                                    <Table striped bordered hover className='sizeTable'>
                                        <thead>
                                            <tr style={{ color: 'white' }} className='text-center'>
                                                <th>Name</th>
                                                <th>LastName</th>
                                                <th>jobPosition</th>
                                                <th>Tempereture</th>
                                                <th>CheckTime </th>
                                                <th>Alcohol </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.employee.map((data, i) => {
                                                return (
                                                    <tr style={{ color: 'white' }} colSpan="1" key={i}>
                                                        <td>{data.name}</td>
                                                        <td>{data.lastname}</td>
                                                        <td>{data.jobposition}</td>
                                                        <td>{data.temp}</td>
                                                        <td>{data.time}</td>
                                                        <td>{String(data.status)}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}