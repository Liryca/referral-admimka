import React, { useEffect } from "react";
import './Modal.scss';
import cross from "./images/Ic_cross.svg";
import { changeModalShow } from "../../store/modal/action";


type PropsType = {
    activeModal: boolean,
    setActiveModal: (v: boolean) => void,
    children: React.ReactNode;
};

const Modal: React.FC<PropsType> = ({ activeModal, setActiveModal, children}) => {



    useEffect(() => {
        activeModal?document.body.classList.add('noScroll'):document.body.classList.remove('noScroll')
    }, [activeModal])

    return (
        <div className={activeModal ? 'modal active' : "modal"}>
            <div className={activeModal ?  'modal__content active' : "modal__content"}>
                <div className="modal__wrapp">
                    {children}
                    <img className="modal__icon" onClick={() => setActiveModal(false)} src={cross} alt="cross"></img>
                </div>
            </div>

        </div>
    );
};

export default Modal;