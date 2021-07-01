import { useState } from "react";
import Modal from "../Modal/Modal";
import useModal from '../Modal/useModal';
import './Day.css';

const Day = () => {

    const {isShowing, toggle} = useModal();
    const [info, setInfo] = useState([]);
    const [subject, setSubject] = useState('---------');
    const [office, setOffice] = useState('---------');
    const [teacher, setTeacher] = useState('---------');
    const subjectChange = e => setSubject(e.target.value);
    const officeChange = e => setOffice(e.target.value);
    const teacherChange = e => setTeacher(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = {
            subject,
            office,
            teacher
        }
        setInfo([...info, newItem]);
        setSubject('');
        setOffice('');
        setTeacher('');
    }

    return (
        <>
            <td onClick={toggle}>{subject}<br/>{office}<br/>{teacher}</td>
            { isShowing 
                ? <Modal 
                    isShowing={isShowing} 
                    hide={toggle} 
                    subjectChange={subjectChange}
                    officeChange={officeChange}
                    teacherChange={teacherChange}
                    handleSubmit={handleSubmit}
                  /> 
                : null 
            }
        </>
    );
}

export default Day;