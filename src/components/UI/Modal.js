import React from 'react';
import Backdrop from "./Backdrop";
import Button from "./Button";

const Modal = ({ title, onCancel, onConfirm, show, children }) => {
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
                    <h3 className='title'>{title}</h3>
                    {children}
                    <div className='btns-wrapper'>
                        <Button clickHandler={cancelHandler} isAlt label="Cancel" />
                        <Button clickHandler={confirmHandler} label="Confirm" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
