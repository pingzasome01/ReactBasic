import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/loginForm.css'
import logo from '../images/1234.png'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ConsumeAPI from '../api/index'
import { Carousel } from 'bootstrap'
const MySubComponent = (props) => {

    // const Ddd = () => {
    //     const params = useParams()
    //     console.log(params);
    //     console.log('asdasdsa');
    // }


    // if (props.display) {
    //     return (
    //         <Button variant="primary" onClick={Ddd}>
    //             login test
    //         </Button>
    //     )
    // }
}

export default class  LoginForm extends React.Component {
    // state = {
    //     user: [{
    //         memberId: 61515004,
    //         password: 'Ping2303',
    //         role: 'user'
    //     },
    //     {
    //         memberId: 61515003,
    //         password: ' ',
    //         role: 'Admin'
    //     },
    //     ],
    //     dummy: 'dummy'
    // }
    state = {
        loginType: false
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const memberId = this.memberId.value
        const password = this.password.value
        const data = {
            id: memberId,
            password: password
        }
        const login = await ConsumeAPI('post', 'login', data)
        console.log(login);
        if(login != undefined) {
            this.setState({loginType: true})
            localStorage.setItem('id',memberId)
        } else {
            alert("Wrong id or password")
        }
        
    }

    // componentDidMount() {
    //     // this.user0()
    //     // this.user1()
    // }


    //     for (var i in this.state.user) {
    //         console.log(this.state.user[i].memberId, '===', member, this.state.user[i].memberId == member);

    //         if (this.state.user[i].memberId == member) {
    //             checkId = this.state.user[i]
    //         }
    //         // console.log(this.state.user[i]);
    //     }

    //     if (checkId) {
    //         if (checkId.password == password) {
    //             alert('welcome')

    //         } else {
    //             alert('wrong password')
    //         }
    //     } else {
    //         alert('no member id in sys')
    //     }


    //     console.log(member);
    //     console.log(password);
    // }

    // returnInput(id) {
    //     return document.getElementById(id).value
    // }



    // user1(){
    //     var a = this.state.user[1]
    //     console.log(a)
    // }

    // user3 = () => {
    //     console.log(this.state.user)
    //     for (var i in this.state.user){
    //         if(this.state.user[i].memberId === 61515004){
    //             console.log(this.state.user[i])
    //         }
    //     }
    // }



    render() {
        if(this.state.loginType) {
            return <Redirect to={'/topsideBar'} />
        }
        const { location } = this.props
        return (
            <Container fluid className="bgImage"  >
               
                    <Row >
                    <Col md={3} className="col-center" >
                    
                        <img src={logo} className="logoImages" />
                        <Form style={{color:"White"}} onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail" className="text-left">
                                <div >
                                <Form.Label  >MemberID</Form.Label>
                                </div>
                                <Form.Control type='text' placeholder="MemberID" id='memberID' ref={(input) => this.memberId = input} />
                                <Form.Text className="text-muted" >
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="text-left">
                                <Form.Label  >Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" id='password' ref={(input) => this.password = input} />
                            </Form.Group>
                            <br/>
                            <Button variant="primary" type="submit" className="buttonW">
                                Login
                            </Button>                           
                            
                            {/* <Button variant="primary" onClick={this.handleSubmit} >
                                login test
                            </Button> */}
                            {/* <div>{location.pathname}</div> */}
                            {/* <MySubComponent display={true} /> */}
                        </Form>
                     
                    </Col>
                </Row>
        </Container>
            // <Containe fluid>
            //     <Row>
            //         <Col md="5" classsName="m-auto">
            //             <div>eee</div>
            //         </Col>
            //     </Row>
            // </Container>
        );
    }
}
