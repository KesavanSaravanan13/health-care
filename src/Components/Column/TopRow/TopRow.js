import './TopRow.css';
import bell from '../assets/bell.png';
import doc from '../assets/jejeje-1.png';
import dropdown from '../assets/dropdown_arrow.webp';
import logout from '../assets/Frame 6.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton, DropdownHeader, DropdownToggle } from 'react-bootstrap';
import password from '../assets/password.jpg';
import profile from '../assets/user.png';

const TopRow = () => {
    return (
        <div className="row topblock p-1 m-0 row1 flex-wrap">
            <div className="col-3 m-0 p-0 px-2 d-flex align-items-center">
                <button className="btn p-1 px-2 m-0 rounded-5 bell">
                    <div className='d-inline-block position-relative m-0 p-0'>
                        <img src={bell} className='p-0 m-0'>
                        </img>
                        <span className='badge position-absolute start-100 translate-middle rounded-pill m-0'>2</span>
                    </div>
                </button>
            </div>
            <div className='col-1 m-0 p-0 vr'></div>
            <div className="col-8 m-0 p-0 flex-fill">
                <Dropdown>
                    <DropdownToggle variant='bg-light' className=''>
                        <div className='row m-0 p-0 d-flex justify-content-between'>
                            <img src={doc} className='col-5 m-0 p-0'></img>
                            <div className='col-5 m-0 p-0'>
                                <div className='col-12 m-0 p-0 name1'>Jessica</div>
                                <div className='col-12 m-0 p-0 name2'>admin</div>
                            </div>
                            <div className='col-1 p-0 ps-3 m-0 text-center'>
                                <img src={dropdown} class="m-0 p-0"
                                    width="15px" height="15px" alt=""></img>
                            </div>
                        </div>
                    </DropdownToggle>

                    <Dropdown.Menu className='p-0 m-0 dmenu'>
                        <Dropdown.Item href="" className='p-2 m-0'>
                            <div className='row p-0 m-0 flex-nowrap'>
                                <div className='col-2 m-0 ms-1 p-0'><img src={profile} className='m-0 p-0'></img></div>
                                <div className='col-10 m-0 p-0 ps-3 tt'>My Profile</div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="" className='p-2 m-0'>
                            <div className='row p-0 m-0 flex-nowrap'>
                                <div className='col-2 m-0 ms-1 p-0'><img src={password} className='m-0 p-0'></img></div>
                                <div className='col-10 m-0 p-0 ps-1 tt'>Change Password</div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="" className='p-2 m-0'>
                            <div className='row p-0 m-0 flex-nowrap'>
                                <div className='col-2 m-0 p-0'><img src={logout} className='m-0 p-0' width={24} height={24}></img></div>
                                <div className='col-10 m-0 p-0 ps-3 tt'>Log out</div>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <div className='dropdown m-0 p-0'>
                    
                </div> */}

            </div>
        </div>
    );
};

export default TopRow;