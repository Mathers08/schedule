import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import './Day.scss';
import '../Modal/Modal.scss';

const Day = () => {

  const {isShowing, toggle} = useModal();
  const [data, setData] = useState({
    subject: '',
    office: '',
    teacher: ''
  })
  const subjectChange = (e: any) => setData({ ...data, subject: e.target.value});
  const officeChange = (e: any) => setData({ ...data, office: e.target.value});
  const teacherChange = (e: any) => setData({ ...data, teacher: e.target.value});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setData({
      subject: data.subject,
      office: data.office,
      teacher: data.teacher
    });
    toggle();
  };

  return (
    <>
      <td onClick={toggle}>{data.subject}<br/>{data.office}<br/>{data.teacher}</td>
      {isShowing &&
        <Modal
          isShowing={isShowing}
          hide={toggle}
          subject={data.subject}
          office={data.office}
          teacher={data.teacher}
          subjectChange={subjectChange}
          officeChange={officeChange}
          teacherChange={teacherChange}
          handleSubmit={handleSubmit}
        />
      }
    </>
  );
};

export default Day;
