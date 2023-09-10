import React from 'react';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import '../Style/style.css';  // Your custom CSS
import MainMenu from '../MainMenu/MainMenu';

const FormLayout: React.FC = () => {
    return (
        <>
        <MainMenu />
        <Row>
            <Col sm={12}>
                <Card>
                    <Card.Header>
                        <h5>Basic Component</h5>
                    </Card.Header>
                    <Card.Body>
                        <h5>Form controls</h5>
                        <hr />
                        <Row>
                            <Col md={6}>
                                <Form>
                                    <Form.Group controlId="exampleInputEmail1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    {/* ... rest of the form fields ... */}
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                            </Col>
                            <Col md={6}>
                                {/* ... similar transformations for this column ... */}
                            </Col>
                        </Row>
                        {/* ... rest of the card's content ... */}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Input Group</h5>
                    </Card.Header>
                    <Card.Body>
                        <InputGroup className="mb-3">
                        <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            <Form.Control type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>
                        {/* ... rest of the input groups ... */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    );
}

export default FormLayout;
