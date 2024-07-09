import './Forms.css';
import edit from '../assets/edit-text.png';
import dropdown from '../assets/dropdown_arrow.webp';
import dob from '../assets/dob.png';
import { useState } from 'react';
import Submit from './Submit';
import Pops from '../../Toast/Toast';

const Forms = () => {
    const [inputFirstName, setinputFirstName] = useState('');
    const [inputLasttName, setinputLasttName] = useState('');
    const [inputMail, setinputMail] = useState('');
    const [inputNumber, setinputNumber] = useState('');
    const [inputAddress, setinputAddress] = useState('');
    const [inputCity, setinputCity] = useState('');
    const [inputState, setinputState] = useState('');
    const [inputPostalCode, setinputPostalCode] = useState('');

    const handleFirstName = (event) => {
        setinputFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setinputLasttName(event.target.value);
    }
    const handleMail = (event) => {
        setinputMail(event.target.value);
    }
    const handleNumber = (event) => {
        setinputNumber(event.target.value);
    }
    const handleAddress = (event) => {
        setinputAddress(event.target.value);
    }
    const handleCity = (event) => {
        setinputCity(event.target.value);
    }
    const handleState = (event) => {
        setinputState(event.target.value);
    }
    const handlePostalCode = (event) => {
        setinputPostalCode(event.target.value);
    }
    return (
        <div className='m-0 p-3 pb-5'>
            <forms className="m-0 p-0" id="formEle">
                <div className='row m-0 p-0'>
                    <div className='col-8 m-0 p-0 flex-grow-1 pDetails'>Personal Details</div>
                    <div className='col-4 m-0 p-0 text-end'>
                        <button className='m-0 p-0 btn editBtn' onClick={() => {
                            <Pops />
                            alert(`You have Enabled the EDIT!!!`);
                            var inputs = document.querySelectorAll("#formEle input");

                            inputs.forEach(function (input) {
                                input.disabled = false;
                            });

                            document.getElementById("submitBtn").style.display = 'flex';
                        }}>
                            <div className='row m-0 p-0 justify-content-between'>
                                <div className='col-1 m-0 p-0 px-1 edit'><img src={edit} className='m-0 p-0'></img></div>
                                <div className='col-1 m-0 p-0 px-1 edit'>Edit</div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='row m-0 p-0'>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>First Name</label>
                        <input type="text" className='col-12 m-0 w-100' disabled placeholder='First Name' value={inputFirstName} onChange={handleFirstName}></input>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>Last Name</label>
                        <input type="text" className='col-12 m-0 w-100' disabled placeholder='Last Name' value={inputLasttName} onChange={handleLastName}></input>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>Email Address</label>
                        <input type="email" className='col-12 m-0 w-100' disabled placeholder='Email' value={inputMail} onChange={handleMail}></input>
                    </div>
                </div>
                <div className='row m-0 p-0'>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>Gender</label>
                        <select className='m-0 col-12 m-0 gdiv d-flex align-items-center w-100' disabled>
                            <option value="Male">Male</option>
                            <option value="Female" selected>Female</option>
                            <option value="Others">Other</option>
                        </select>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>DOB</label>
                        <div className='col-12 m-0 p-0 gdiv d-flex align-items-center dob'>
                            <div className='row m-0 p-0 flex-fill justify-content-between w-100'>
                                <input type=" text" className=' m-0 gender dobinput' disabled placeholder='Dec 13, 1989' value=''></input>
                                <div className='col-1 m-0 p-0 me-2'>
                                    <img src={dob} class=" m-0 p-0"
                                        width="20px" height="15px" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>Phone Number</label>
                        <input type="number" className='col-12 m-0 w-100' disabled placeholder='Enter the Phone Number' value={inputNumber} onChange={handleNumber}></input>
                    </div>
                </div>
                <div className='row m-0 p-0'>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>Address</label>
                        <input type=" text" className='col-12 m-0 w-100' disabled placeholder='Enter the Address' value={inputAddress} onChange={handleAddress}></input>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>City</label>
                        <input type=" text" className='col-12 m-0 w-100' disabled placeholder='Enter the City' value={inputCity} onChange={handleCity}></input>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>State</label>
                        <input type=" text" className='col-12 m-0 w-100' disabled placeholder='Enter the State' value={inputState} onChange={handleState}></input>
                    </div>
                </div>
                <div className='row m-0 p-0'>
                    <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                        <label className='col-12 m-0 p-0 pb-2'>Postal code</label>
                        <input type=" text" className='col-12 m-0 w-100' disabled placeholder='Enter the pincode' value={inputPostalCode} onChange={handlePostalCode}></input>
                    </div>
                </div>
                <Submit id='submitBtn' />
            </forms>
        </div>
    );
};

export default Forms;