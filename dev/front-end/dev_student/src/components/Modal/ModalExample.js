import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './LoginModal.css'
import LoginModalTemplate from './LoginModalTemplate';
class ModalExample extends React.Component {
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
        const styleUnLoggined = {
            backgroundColor: '#222a35',
            borderRadius: 3,
            border: '0',
            color: 'white',
        };
        return (
            <div>

                <Button style={styleUnLoggined} onClick={this.toggle}>
                    <img width="20px" height="20px" src="/img/user_area_button.png"></img>
                        &nbsp;&nbsp;                    Sign In

        </Button>
                <Modal  isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                      <LoginModalTemplate/>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default ModalExample;

//                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
