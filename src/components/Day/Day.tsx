import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import './Day.scss';
import useColor from "../Hooks/useColor";
import useModal from "../Hooks/useModal";

const Day = () => {

  const {color, setColor} = useColor();
  const {isShowing, toggle} = useModal();
  const [background, setBackground] = useState('#000');
  const [isTyping, setIsTyping] = useState(false);
  const [data, setData] = useState({
    subject: '',
    office: '',
    teacher: ''
  })
  const subjectChange = (e: any) => {
    setIsTyping(true);
    setData({...data, subject: e.target.value});
  }
  const officeChange = (e: any) => {
    setIsTyping(true);
    setData({...data, office: e.target.value});
  }
  const teacherChange = (e: any) => {
    setIsTyping(true);
    setData({...data, teacher: e.target.value});
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setData({
      subject: data.subject,
      office: data.office,
      teacher: data.teacher
    });
    setIsTyping(false);
    toggle();
  };

  const Info = () => {
    return (
      <>
        {data.subject}<br/>{data.office}<br/>{data.teacher}
      </>
    )
  }

  return (
    <>
      <td onClick={toggle} style={{background: background}}>
        {!isTyping && <Info/>}
      </td>
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
        />}
    </>
  );
};

export default Day;
