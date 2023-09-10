import React from 'react';
import { Navbar, NavDropdown, Nav, Dropdown, Form, InputGroup, FormControl, Button, NavItem } from 'react-bootstrap';
import '../Style/style.css';  // Your custom CSS

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
                        <i className="feather icon-trending-up"></i>
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
                </div>
            </Navbar>

  

            {/* ... Your other contents ... */}
            </div>
    );
};

export default MainMenu;
