import React, {Component, useEffect, useState} from 'react';
import {Button,Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class R048_ReactModal extends Component{
    constructor(props){
        super(props);
        this.state = {modal:false}
    }

    toggle = () => {
        this.setState({modal : !this.state.modal})
    }

    render() {
        return (
            <>
            <Button color="warning" onClick={this.toggle}>Modal 버튼</Button>
            <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
                <ModalBody>
                    the generated ~~~~
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={this.toggle}>확인</Button>
                    <Button color='secondary' onClick={this.toggle}>닫기</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}
export default R048_ReactModal;