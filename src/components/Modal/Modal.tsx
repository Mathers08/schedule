import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

interface ModalProps {
  isShowing: boolean,
  subject: string,
  office: string,
  teacher: string,
  hide: (v: any) => void,
  subjectChange: (v: any) => void,
  officeChange: (v: any) => void,
  teacherChange: (v: any) => void,
  handleSubmit: (v: any) => void,
}

const Modal = ({
  isShowing,
  subject,
  office,
  teacher,
  hide,
  subjectChange,
  officeChange,
  teacherChange,
  handleSubmit,
}: ModalProps) => {
  return createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <p>Предмет</p>
            <input
              autoFocus
              type="text"
              value={subject}
              onChange={subjectChange}
            />
            <p>Кабинет</p>
            <input
              type="text"
              value={office}
              onChange={officeChange}
            />
            <p>Преподаватель</p>
            <input
              type="text"
              value={teacher}
              onChange={teacherChange}
            />
            <button type="submit">Добавить</button>
          </form>
        </div>
      </div>
    </React.Fragment>, document.body);
};

export default Modal;