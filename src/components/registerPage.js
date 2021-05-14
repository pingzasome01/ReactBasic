import React from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ConsumeAPI from '../api/index'
import { Link } from 'react-router-dom';

export default class RegisterPage extends React.Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        const name = this.name.value
        const lastname = this.lastname.value
        const id = this.id.value
        const password = this.password.value
        const image = this.image.value
        const role = this.role.value
        const jobposition = this.job.value

        const data = {
            name,
            lastname,
            id,
            password,
            jobposition,
            role, image
        }
        console.log(data);
        const update = await ConsumeAPI('post', 'model/user/', data)
        console.log(update);
    }
    render() {
        return (
            <Container fluid className='bgImage'>
                <Row>
                    <Col md={3} className='col-center'>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row className='mb-3'>
                                <Col controlId="formBasicEmail" className='text-left' style={{ color: "White" }}>
                                    <Form.Label>FirstName</Form.Label>
                                    <Form.Control placeholder=" First name"  ref={(input) => this.name = input}required/>
                                </Col>
                                <Col controlId="formBasicEmail" className='text-left' style={{ color: "White" }}>
                                    <Form.Label>LastName</Form.Label>
                                    <Form.Control placeholder="Last name"  ref={(input) => this.lastname = input}required/>
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="formBasicEmail" className='text-left' style={{ color: "White" }}>
                                <Form.Label> jobposition</Form.Label>
                                <Form.Control type="text" placeholder="jobposition" ref={(input) => this.job = input}required/>

                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className='text-left' style={{ color: "White" }}>
                                <Form.Label>MemberID</Form.Label>
                                <Form.Control type="number" placeholder="MemberID" ref={(input) => this.id = input}required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className='text-left' style={{ color: "White" }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={(input) => this.password = input}required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className='text-left' style={{ color: "White" }}>
                                <Form.Label>Re-Password</Form.Label>
                                <Form.Control type="password" placeholder="Re-Password" ref={(input) => this.repassword = input} required/>
                            </Form.Group>
                            <Form.Group className='text-left' >
                                <Form.Label style={{ color: "White" }} >Role</Form.Label >
                                <Form.Control as="select" type="text" placeholder="User" ref={(input) => this.role = input}>
                                    <option>User</option>
                                    <option>Admin</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className='text-left' style={{ color: "White" }}>
                                <Form.Label>URL Images</Form.Label>
                                <Form.Control type="text" placeholder="URL Images" ref={(input) => this.image = input} required/>
                            </Form.Group>
                            

                            <Button variant="primary" type="submit" className='mr-5'>
                                Confirm
                            </Button>
                            
                             <Link to={"/TopSideBar"}>Back </Link>
                           

                        </Form>

                    </Col>
                </Row>
            </Container>

        )
    }
}