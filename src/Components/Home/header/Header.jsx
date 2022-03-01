import React from "react";
import '../header/Header.css';
import { Button } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Logo from '../../../assest/Logo.svg';
import UserNav from '../../../assest/fi-rr-user.svg';
import dropIcon from '../../../assest/Polygon2.svg'

function Header() {

    return (
        <div className="home">
            <div className="container">
                <Navbar  expand="lg" className="navMain" >
                <Container fluid>
                    <Navbar.Brand href="#"> <img src={Logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 nav-items"
                        style={{ maxHeight: '111px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="navItemText" >Courses</Nav.Link>
                        <Nav.Link href="#action2" className="navItemText">Practice</Nav.Link>
                        <Nav.Link href="#action2" className="navItemText">Blog</Nav.Link>
                        <Nav.Link href="#action2" className="navItemText">About</Nav.Link>
                        <Nav.Link href="#action2" className="navItemText">Contact</Nav.Link>

                    
                    </Nav>
                    <Form className="d-flex navbarBtn">
                            <Button className="applyBtn ">Apply Now</Button>
                            <Button className="loginBtn "><img src={UserNav} className="navIcon" alt="" /> Log in</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

            </div>
                <div className="mainPageBg">
                    <div className="container">
                        <div className="mainPage">
                              <div className="row mainPageRow">
                                <div className="col-6 mainPageText">
                                    <div className="codingDiv">
                                        <h2 className="mainPageh2"> Futuristic </h2>
                                        <h2 className="mainPageYellowText">{"<Coding>"}</h2>
                                        <h2 className="schoolText">School</h2>
                                    </div>
                                    <div className="pTextMain">
                                        <p className="pText">Education is the process of learning, or acquistion of <br />
                                            knowladge, skills, values, beliefs and habits
                                        </p>
                                    </div>
                                    <button className="learnMoreBtn">Learn More</button>
                                </div>
                                <div className="col-6 mainPageInput">
                                    <div className="mainPageInputTitleDiv">
                                        <p className="mainPageInputTitle">To change your future</p>
                                    </div>
                                    <Form.Select aria-label="Default select example"  className="mainPageInputDropdown">
                                      <option>Select the Program   </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                    <img src={dropIcon} className="dropdownIcon" alt="" />
                                    <input type="text" className="inputs " placeholder="  Name" />
                                    <input type="text" className="inputs" placeholder="  Email" />
                                    <button className="mainPageInputBtn">Get more info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Header;
