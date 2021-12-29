import React from 'react';
import Backdrop from "./Backdrop";
import Button from "./Button";

const Modal = ({ onCancel, onConfirm, show, children }) => {
    const cancelHandler = () => {
        onCancel();
    };
    const confirmHandler = () => {
        onConfirm();
    };

    return (
        <>
            {show && <Backdrop />}
            <div className={`modal ${!show ? 'inactive-modal' : ''}`}>
                <div className='modal-body'>
                    {children}
                    <Button clickHandler={cancelHandler} isAlt label="Cancel" />
                    <Button clickHandler={confirmHandler} label="Confirm" />
                </div>
            </div>
        </>
    );
};

export default Modal;
