import './Sidebar.css';
import Logo from '../assets/frame_small.png';
import icon1 from '../assets/Frame 15.png';
import icon2 from '../assets/Frame 16.png';
import icon3 from '../assets/Frame 13.png';
import icon4 from '../assets/Frame 9.png';
import icon5 from '../assets/Frame 8.png';
import icon6 from '../assets/Frame 14.png';
import icon7 from '../assets/Frame 10.png';
import logout from '../assets/Frame 6.png';

const Sidebar = () => {
    return (
        <div className="row sidebar m-0 p-0 position-relative h-100">
            <div className='row m-0 p-0 icon flex-fill'>
                <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={Logo} alt="Logo"></img></a></div>
                <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon1} className='p-3 icon1' alt="Icon1"></img></a></div>
                <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon2} className='p-2' alt="Icon2"></img></a></div>
                <div className="col-12 px-0 px-md-3 p-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon3} className='p-2' alt="Icon3"></img></a></div>
                <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon4} className='p-2' alt="Icon4"></img></a></div>
                <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon5} className='p-2' alt="Icon5"></img></a></div>
                <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon6} className='p-2' alt="Icon6"></img></a></div>
                <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon7} className='p-2' alt="Icon7"></img></a></div>
            </div>
            <div className='row m-0 p-0 icon flex-fill position-absolute bottom-0 start-0'>
                <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill"><a className='m-0 p-0' href=''><img src={logout} className='p-2' alt="LogOut"></img></a></div>
            </div>

        </div>
    );
};

export default Sidebar;