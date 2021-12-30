import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    setEmployeeCity, setEmployeeCompanyName,
    setEmployeeEmail,
    setEmployeeName,
    setEmployeePhone, setEmployeeWebsite
} from "../store/actions/EditEmployeeDataActions";

const EditEmployeeForm = () => {
    const dispatch = useDispatch(),
        name = useSelector((state) =>  state.editEmployeeDataReducer.name),
        email = useSelector((state) =>  state.editEmployeeDataReducer.email),
        city = useSelector((state) =>  state.editEmployeeDataReducer.city),
        phone = useSelector((state) =>  state.editEmployeeDataReducer.phone),
        website = useSelector((state) =>  state.editEmployeeDataReducer.website),
        companyName = useSelector((state) =>  state.editEmployeeDataReducer.companyName);

    const nameHandler = (e) => {
        dispatch(setEmployeeName(e.target.value));
    }
    const emailHandler = (e) => {
        dispatch(setEmployeeEmail(e.target.value));
    }
    const cityHandler = (e) => {
        dispatch(setEmployeeCity(e.target.value));
    }
    const phoneHandler = (e) => {
        dispatch(setEmployeePhone(e.target.value));
    }
    const websiteHandler = (e) => {
        dispatch(setEmployeeWebsite(e.target.value));
    }
    const companyNameHandler = (e) => {
        dispatch(setEmployeeCompanyName(e.target.value));
    }
    return (
        <div  className='form-wrapper'>
            <div className='input-wrapper'>
                <label htmlFor='name'>name</label>
                <input type='text' value={name} id='name' onChange={nameHandler} />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='email'>email</label>
                <input type='text' value={email} id='email' onChange={emailHandler} />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='city'>city</label>
                <input type='text' value={city} id='city' onChange={cityHandler} />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='phone'>phone</label>
                <input type='text' value={phone} id='phone' onChange={phoneHandler} />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='website'>website</label>
                <input type='text' value={website} id='website' onChange={websiteHandler} />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='companyName'>companyName</label>
                <input type='text' value={companyName} id='companyName' onChange={companyNameHandler} />
            </div>
        </div>
    );
};

export default EditEmployeeForm;