import React from 'react';
import { Navbar, NavDropdown, Nav, Dropdown } from 'react-bootstrap';
import '../Style/style.css';  // Your custom CSS

const MainMenu: React.FC = () => {
    return (
        <div>
            {/* Pre-loader */}
            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>

            {/* Navigation */}
            <Navbar bg="light" expand="lg" className="pcoded-navbar">
                {/* ... Rest of your nav content ... */}
            </Navbar>

            {/* Header */}
            <Navbar bg="light" expand="lg" className="pcoded-header navbar-expand-lg navbar-light">
                {/* ... Rest of your header content ... */}
            </Navbar>

            {/* ... Your other contents ... */}
        </div>
    );
};

export default MainMenu;
