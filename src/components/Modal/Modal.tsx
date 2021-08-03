import React from 'react';
import {createPortal} from 'react-dom';
import './Modal.scss';
import useColor from '../Hooks/useColor';

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

const Modal = ({subject, office, teacher, hide, subjectChange, officeChange, teacherChange, handleSubmit}:ModalProps)  => {

  const {color, onBlueCircleClick, onGreenCircleClick, onRedCircleClick} = useColor();

  return createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal" style={{background: color.modal}}>
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <h3 style={{color: color.text}}>Предмет</h3>
            <input
              autoFocus
              type="text"
              maxLength={16}
              value={subject}
              onChange={subjectChange}
            />
            <h3 style={{color: color.text}}>Кабинет</h3>
            <input
              type="text"
              maxLength={16}
              value={office}
              onChange={officeChange}
            />
            <h3 style={{color: color.text}}>Преподаватель</h3>
            <input
              type="text"
              maxLength={16}
              value={teacher}
              onChange={teacherChange}
            />
            <div>
              <h3 style={{color: color.text}}>Выберите цвет</h3>
              <div className="circle-picker">
                <span>
                  <div className="circle color color-blue" onClick={onBlueCircleClick}/>
                </span>
                <span>
                  <div className="circle color color-green" onClick={onGreenCircleClick}/>
                </span>
                <span>
                  <div className="circle color color-red" onClick={onRedCircleClick}/>
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
