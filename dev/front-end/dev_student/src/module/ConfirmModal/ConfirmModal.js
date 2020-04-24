import React from "react";
import "./ConfirmModal.css";
import { Container, Modal, ModalBody } from "reactstrap";

const ConfirmModal = ({ modal, toggle, clickOk, clickNo, title, message }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} className="ConfirmModal">
            <ModalBody>
                <div>헤레레</div>
            </ModalBody>
        </Modal>
    );
};

export default ConfirmModal;
