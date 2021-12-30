import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../UI/Modal";
import {closeEditEmployeeModal} from "../../store/actions/EmployeesListActions";

const EditEmployeeModal = () => {
    const  dispatch = useDispatch(),
        isEditEmployeeModal = useSelector((state) =>  state.employeesListReducer.isEditEmployeeModal);

    const closeModalHandler = () => {
        dispatch(closeEditEmployeeModal());
    }

    const editDataHandler = () => {
        console.log('edit data');
    }

    return (
        <Modal
            onCancel={closeModalHandler}
            onConfirm={editDataHandler}
            show={isEditEmployeeModal}
        >
            Edit employee modal
        </Modal>
    );
};

export default EditEmployeeModal;