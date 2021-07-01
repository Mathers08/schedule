import React from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import './Modal.css';

const Modal = ({ isShowing, hide }) => isShowing ? createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form>
            <p>Предмет</p>
            <input/>
            <p>Кабинет</p>
            <input/>
            <p>Преподаватель</p>
            <input/>
        </form>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;