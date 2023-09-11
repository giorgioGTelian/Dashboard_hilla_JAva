import React from 'react';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import '../Style/style.css';  // Your custom CSS
import MainMenu from '../MainMenu/MainMenu';

const TableView: React.FC = () => {
    return(
        <>
        <MainMenu />
        <div className="pcoded-wrapper-table">
            <div className="pcoded-content">
                <div className="pcoded-inner-content"></div>
                {/* start of breadcrumbs */}
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h5 className="m-b-10">Table</h5>
                                </div>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#!">Table</a></li>
                                    <li className="breadcrumb-item">Basic Initialization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-body">
                    <div className="page-wrapper">
                        <Row className="row">
                            <div className="col-xl-12">
                                <Card>
                                    <Card.Header>
                                        <h5>Basic Initialization</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td colSpan={2}>Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* ... rest of the card's content ... */}
                                    </Card.Body>
                                </Card>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default TableView;