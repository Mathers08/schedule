import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import './Day.scss';

const Day = () => {

  const {isShowing, toggle} = useModal();
  //const [info, setInfo] = useState([]);
  const [subject, setSubject] = useState('');
  const [office, setOffice] = useState('');
  const [teacher, setTeacher] = useState('');
  const subjectChange = (e: any) => setSubject(e.target.value);
  const officeChange = (e: any) => setOffice(e.target.value);
  const teacherChange = (e: any) => setTeacher(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    /*const newItem = {
      subject,
      office,
      teacher
    };
    setInfo([...info, newItem]);*/
    setSubject(subject);
    setOffice(office);
    setTeacher(teacher);
    toggle();
  };

  return (
    <>
      <td onClick={toggle}>{subject}<br/>{office}<br/>{teacher}</td>
      {isShowing &&
        <Modal
          isShowing={isShowing}
          hide={toggle}
          subject={subject}
          office={office}
          teacher={teacher}
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
