import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../UI/Modal";
import {closeEditEmployeeModal} from "../../store/actions/EmployeesListActions";
import EditEmployeeForm from "../../containers/EditEmployeeForm";

const EditEmployeeModal = () => {
    const  dispatch = useDispatch(),
        name = useSelector((state) =>  state.editEmployeeDataReducer.name),
        email = useSelector((state) =>  state.editEmployeeDataReducer.email),
        city = useSelector((state) =>  state.editEmployeeDataReducer.city),
        phone = useSelector((state) =>  state.editEmployeeDataReducer.phone),
        website = useSelector((state) =>  state.editEmployeeDataReducer.website),
        companyName = useSelector((state) =>  state.editEmployeeDataReducer.companyName),
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
            title='Edit employee'
            isConfirmDisabled={!(name && email && city && phone && website && companyName)}
        >
            <EditEmployeeForm />
        </Modal>
    );
};

export default EditEmployeeModal;