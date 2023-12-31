import React from 'react';
import { Navbar, NavDropdown, Nav, Dropdown, Form, InputGroup, FormControl, Button, NavItem } from 'react-bootstrap';
import '../Style/style.css';  // Your custom CSS
import { FaBeer } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

const MainMenu: React.FC = () => {

    const toggleFullscreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
        }
    };
    return (
        <div>
            {/* Pre-loader 
            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>
            */}
            
            {/* Navigation */}
            <Navbar className="pcoded-navbar navbar-wrapper">
                <div className="navbar-wrapper">
                <NavItem className="navbar-brand header-logo">
                    <a className="b-brand">
                        <div className="b-bg"> 
                        <FaCog />
                        </div>
                        <span className="b-title">
                            Navbar scroll
                        </span>
                        </a>
                 {/* Convert the <a> to a button or another appropriate element */}
                <a className="mobile-menu" id="mobile-collapse" href='javascript:'>
                    <span></span>
                </a>
                </NavItem>
                
                <div className='navbar-content scroll-div'>
                    <Nav className="nav pcoded-inner-navbar">
                        <Nav.Item className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </Nav.Item>
                        <Nav.Item className="active">
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaBeer /></i>
                                </span>
                                <span className="pcoded-mtext"> Dashboard</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="pcoded-hasmenu">
                            <NavDropdown title="Basic Components" id="basic-nav-dropdown">
                                <NavDropdown.Item href="javascript:void(0)">Action</NavDropdown.Item>
                                <NavDropdown.Item href="javascript:void(0)">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="javascript:void(0)">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="javascript:void(0)">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item className="pcoded-menu-caption">
                            <label>Forms &amp; Tables</label>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaHome /></i>
                                </span>
                                <span className="pcoded-mtext"> Form Elements</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaBars /></i>
                                </span>
                                <span className="pcoded-mtext"> Form Layouts</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaUser /></i>
                                </span>
                                <span className="pcoded-mtext"> Table</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="pcoded-menu-caption">
                            <label>Chart &amp; Maps</label>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaChartPie /></i>
                                </span>
                                <span className="pcoded-mtext"> Chart</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaMap /></i>
                                </span>
                                <span className="pcoded-mtext"> Maps</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="pcoded-menu-caption">
                            <label>Pages</label>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaEnvelope /></i>
                                </span>
                                <span className="pcoded-mtext"> Authentication</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaFile /></i>
                                </span>
                                <span className="pcoded-mtext"> User Profile</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="pcoded-menu-caption">
                            <label>Other</label> 
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="javascript:void(0)">
                                <span className="pcoded-micon">
                                    <i className="feather"><FaBell /></i>
                                </span>
                                <span className="pcoded-mtext"> Menu Levels</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </div>
                </div>
            </Navbar>
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* toggle full sceen on click */}
                        <Nav.Link href="javascript:void(0)" onClick={toggleFullscreen}>
                            <i className="feather icon-maximize"></i>
                        </Nav.Link>
                        
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="javascript:void(0)">Action</Dropdown.Item>
                                <Dropdown.Item href="javascript:void(0)">Another action</Dropdown.Item>
                                <Dropdown.Item href="javascript:void(0)">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        
                    </Nav>
                </Navbar.Collapse>
            {/* ... Your other contents ... */}
            </div>
    );
};

export default MainMenu;
