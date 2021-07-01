import Modal from "../Modal/Modal";
import useModal from '../Modal/useModal';

const Day = () => {
    const {isShowing, toggle} = useModal();
    return (
        <>
            <td onClick={toggle}>------<br/>------<br/>------</td>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </>
    );
}

export default Day;