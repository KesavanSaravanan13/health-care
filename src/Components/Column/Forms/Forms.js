import './Forms.css';
import edit from '../assets/edit-text.png';
import dropdown from '../assets/dropdown_arrow.webp';
import dob from '../assets/dob.png';

const Forms = () => {
    return (
        <div className='m-0 p-3 pb-5'>
            <div className='row m-0 p-0'>
                <div className='row m-0 p-0'>
                    <div className='col-8 m-0 p-0 flex-grow-1 pDetails'>Personal Details</div>
                    <div className='col-4 m-0 p-0 text-end'>
                        <div className='row m-0 p-0 justify-content-end'>
                            <div className='col-1 m-0 p-0 px-2 edit'><img src={edit} className='m-0 p-0'></img></div>
                            <div className='col-1 m-0 p-0 edit'>Edit</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row m-0 p-0'>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>First Name</label>
                    <input type=" text" className='col-12 m-0 p-0' placeholder='Jessica'></input>
                </div>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>Last Name</label>
                    <input type=" text " className='col-12 m-0 p-0' placeholder='Mark'></input>
                </div>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>Email Address</label>
                    <input type="email" className='col-12 m-0 p-0' placeholder='jessica@gmail.com'></input>
                </div>
            </div>
            <div className='row m-0 p-0'>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>Gender</label>
                    <div className='col-12 m-0 p-0 gdiv d-flex align-items-center'>
                        <div className='row m-0 p-0 flex-fill justify-content-between'>
                            <input type=" text" className=' m-0 p-0 gender' placeholder='Female'></input>
                            <div className='col-1 m-0 p-0 me-2'>
                                <img src={dropdown} class=" m-0 p-0"
                                    width="10px" height="15px" alt=""></img>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>DOB</label>
                    <div className='col-12 m-0 p-0 gdiv d-flex align-items-center'>
                        <div className='row m-0 p-0 flex-fill justify-content-between'>
                            <input type=" text" className=' m-0 p-0 gender' placeholder='Dec 13, 1989'></input>
                            <div className='col-1 m-0 p-0 me-2'>
                                <img src={dob} class=" m-0 p-0"
                                    width="20px" height="15px" alt=""></img>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>Phone Number</label>
                    <input type="number" className='col-12 m-0 p-0' placeholder='+1 (201) 874 8486'></input>
                </div>
            </div>
            <div className='row m-0 p-0'>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>Address</label>
                    <input type=" text" className='col-12 m-0 p-0' placeholder='1027 Edgardo'></input>
                </div>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>City</label>
                    <input type=" text" className='col-12 m-0 p-0' placeholder='Arlington'></input>
                </div>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>State</label>
                    <input type=" text" className='col-12 m-0 p-0' placeholder='Virginia'></input>
                </div>
            </div>
            <div className='row m-0 p-0'>
                <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                    <label className='col-12 m-0 p-0 pb-2'>Postal code</label>
                    <input type=" text" className='col-12 m-0 p-0' placeholder='22201'></input>
                </div>
            </div>
        </div>
    );
};

export default Forms;