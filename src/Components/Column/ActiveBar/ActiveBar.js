import './ActiveBar.css';
import doc from '../assets/doc.jpg';
import { useState } from 'react';

const ActiveBar = (props) => {
    return (
        <div className="row topblock p-0 py-2 m-0 mb-5 ">
                <div className='col-1 m-0 p-0 px-2 docimg'><img src={doc} className='igg' width={70} height={64}></img></div>
                <div className='col-5 m-0 p-0 px-2'>
                    <div className='col-12 m-0 p-0 name01 d-flex align-items-center nn'>{props.name}</div>
                    <div className='col-12 m-0 p-0 name02 d-flex align-items-center nn'>{props.mail}</div>
                </div>
                <div className='col py-2 py-sm-0 p-0 m-0 d-flex justify-content-start justify-content-sm-end align-items-center pe-md-3 pe-2'>
                    <span className='m-0 p-0 px-3 active'>Active</span>
                </div>
        </div>
    );
};


export default ActiveBar;