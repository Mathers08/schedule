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

const Modal = ({subject, office, teacher, hide, subjectChange, officeChange, teacherChange, handleSubmit}: ModalProps) => {
  return createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Предмет</h3>
            <input
              autoFocus
              type="text"
              maxLength={16}
              value={subject}
              onChange={subjectChange}
            />
            <h3>Кабинет</h3>
            <input
              type="text"
              maxLength={16}
              value={office}
              onChange={officeChange}
            />
            <h3>Преподаватель</h3>
            <input
              type="text"
              maxLength={16}
              value={teacher}
              onChange={teacherChange}
            />
            <div>
              <h3>Выберите цвет</h3>
              <div className="circle-picker">
                <span>
                  <div className="circle color color-lec"/>
                </span>
                <span>
                  <div className="circle color color-pr"/>
                </span>
                <span>
                  <div className="circle color color-lab"/>
                </span>
              </div>
            </div>
            <button className="modal-add-button" type="submit">Добавить</button>
          </form>
        </div>
      </div>
    </React.Fragment>, document.body
  );
};

export default Modal;