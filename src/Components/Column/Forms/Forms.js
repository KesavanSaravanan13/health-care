import './Forms.css';
import edit from '../assets/edit-text.png';
import dropdown from '../assets/dropdown_arrow.webp';
import dob from '../assets/dob.png';
import { useState } from 'react';
import Save from './Submit';
import Props from '../../Toast/Toast';

import doc from '../assets/doc.jpg';

const Forms = () => {
    const [inputFirstName, setinputFirstName] = useState('Jessica');
    const [inputLasttName, setinputLasttName] = useState('');
    const [inputMail, setinputMail] = useState('jessica@gmail.com');
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
        <div className='m-0 p-0 pb-5'>
            <div className="row topblock p-0 py-2 my-4 m-0">
                <div className='col-12 m-0 p-0 '>
                    <div className='row m-0 p-0'>
                        <div className='col-1 m-0 p-0 px-2 docimg'><img src={doc} className='igg' width={70} height={64}></img></div>
                        <div className='col-5 m-0 p-0 px-2'>
                            <div className='col-12 m-0 p-0 name01 d-flex align-items-center nn'>{inputFirstName}</div>
                            <div className='col-12 m-0 p-0 name02 d-flex align-items-center nn'>{inputMail}</div>
                        </div>
                        <div className='col py-2 py-sm-0 p-0 m-0 d-flex justify-content-start justify-content-sm-end align-items-center pe-md-3 pe-2'>
                            <span className='m-0 p-0 px-3 active'>Active</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='row m-0 p-0 downBlock flex-wrap'>
                <forms className="m-0 p-3 pt-4 pb-5" id="formEle">
                    <div className='row m-0 p-0'>
                        <div className='col-8 m-0 p-0 flex-grow-1 pDetails'>Personal Details</div>
                        <div className='col-4 m-0 p-0 text-end'>
                            <button className='m-0 p-0 btn editBtn' onClick={() => {
                                <Props message='Edit is Enabled!!!' />
                                alert(`You have enabled the EDIT!!!`);
                                var inputs = document.querySelectorAll("#formEle input");
                                inputs.forEach(function (input) {
                                    input.disabled = false;
                                });
                                document.getElementById("submitBtn").style.display = 'flex';
                            }}>
                                <div className='row m-0 p-0 justify-content-between'>
                                    <div className='col-1 m-0 p-0 px-1 edit'><img src={edit} className='m-0 p-0' /></div>
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
                            <input type="email" className='col-12 m-0 w-100' disabled placeholder='Email Address' value={inputMail} onChange={handleMail}></input>
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
                            <input type="number" className='col-12 m-0 w-100' disabled placeholder='Phone Number' value={inputNumber} onChange={handleNumber}></input>
                        </div>
                    </div>
                    <div className='row m-0 p-0'>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>Address</label>
                            <input type=" text" className='col-12 m-0 w-100' disabled placeholder='Address' value={inputAddress} onChange={handleAddress}></input>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>City</label>
                            <input type=" text" className='col-12 m-0 w-100' disabled placeholder='City' value={inputCity} onChange={handleCity}></input>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>State</label>
                            <input type=" text" className='col-12 m-0 w-100' disabled placeholder='State' value={inputState} onChange={handleState}></input>
                        </div>
                    </div>
                    <div className='row m-0 p-0'>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>Postal code</label>
                            <input type=" text" className='col-12 m-0 w-100' disabled placeholder='Postal Code' value={inputPostalCode} onChange={handlePostalCode}></input>
                        </div>
                    </div>
                    <Save id='submitBtn' name={inputFirstName} email={inputMail} />
                </forms>
            </div>
        </div>
    );
};

export default Forms;