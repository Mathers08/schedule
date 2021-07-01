import React from 'react';
import {createPortal} from 'react-dom';
import './Modal.css';

const Modal = (props) => {
    return createPortal(
        <React.Fragment>
            <div className="modal-overlay"/>
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <form onSubmit={props.handleSubmit}>
                    <p>Предмет</p>
                    <input
                        autoFocus
                        type="text"
                        value={props.subject}
                        onChange={props.subjectChange}
                    />
                    <p>Кабинет</p>
                    <input
                        type="text"
                        value={props.office}
                        onChange={props.officeChange}
                    />
                    <p>Преподаватель</p>
                    <input
                        type="text"
                        value={props.teacher}
                        onChange={props.teacherChange}
                    />
                    <button type="submit">Добавить</button>
                </form>
            </div>
            </div>
        </React.Fragment>, document.body)
}

export default Modal;