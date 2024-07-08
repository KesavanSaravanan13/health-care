import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

const Pops = () => {
    // const {message} = props;
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: '240px' }}
    >
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Task Info</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>Completed</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Pops; 