import { useState } from "react";
import Modal from "../Modal/Modal";
import useModal from '../Modal/useModal';
import './Day.css';

type Info = {
    subject: string,
    office: string,
    teacher: string,
}

const Day = () => {

    const {isShowing, toggle} = useModal();
    const [info, setInfo] = useState<Info[]>([]);
    const [subject, setSubject] = useState('---------');
    const [office, setOffice] = useState('---------');
    const [teacher, setTeacher] = useState('---------');
    const subjectChange = (e: any) => setSubject(e.target.value);
    const officeChange = (e: any) => setOffice(e.target.value);
    const teacherChange = (e: any) => setTeacher(e.target.value);

    const handleSubmit = (e: any) => {
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
                    subject=""
                    office=""
                    teacher=""
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