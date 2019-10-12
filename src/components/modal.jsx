import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup } from 'reactstrap';

class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="info" id="toggler3" onClick={this.toggle}>Add New Contact</Button>
                <Modal id="modal" isOpen={this.state.modal} modalTransition={{ timeout: 600 }}
                    backdropTransition={{ timeout: 1000 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Contact Info</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <label className="control-label">Id:</label>
                                <input className="form-control" id="id" name="Id" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <label className="control-label">First Name:</label>
                                <input className="form-control" id="firstName" name="FirstName" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <label className="control-label">Last Name:</label>
                                <input className="form-control" id="lastName" name="LastName" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <label className="control-label">Contact type:</label>
                                <select className="form-control" id="contactType" name="ContactType" type="text">
                                    <option>Friend</option>
                                    <option>Personal</option>
                                    <option>Colleague</option>
                                    <option>Other</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <label className="control-label">Birth date:</label>
                                <input className="form-control" id="birthDate" name="birthDate" type="tel" required />
                            </FormGroup>
                            <FormGroup>
                                <label className="control-label">Phone number:</label>
                                <input className="form-control" id="phoneNumber" name="phoneNumber" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <label className="control-label">Email:</label>
                                <input className="form-control" id="email" name="email" type="text" />
                            </FormGroup>
                        </Form>
                    </ModalBody >
                    <ModalFooter>
                        <button id="saveBtn" color="success" className="btn btn-success" data-dismiss="modal"
                            onclick="addData()">Save</button>
                        <Button color="primary" onClick={this.toggle}>Reset</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal >
            </div >
        );
    }
}

export default MyModal;