import React from 'react';
import ReactDOM from 'react-dom';
import LOGIN from '../components/login';
import '../css/modal.css';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <div>
      <div className="modalBox1">
        <div className="modalHeader">
          <button type="button" className="modalButton" onClick={hide}>&times;</button>
          <LOGIN/>
        </div>
      </div>
  </div>, document.body
) : null;

export default Modal;