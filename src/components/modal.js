import React from 'react';
import ReactDOM from 'react-dom';
import SIGNUP from '../components/signup';
import '../css/modal.css';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <div>
      <div className="modalBox1">
        <div className="modalHeader">
          <button type="button" className="modalButton" onClick={hide}>&times;</button>
          <SIGNUP/>
        </div>
      </div>
  </div>, document.body
) : null;

export default Modal;