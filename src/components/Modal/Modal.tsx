import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import './Modal.scss';
import cross from "./images/Ic_cross.svg";
import { changeModalShow } from "../../store/modal/action";


type PropsType = {
    activeModal: boolean,
    setActiveModal:(v:boolean)=>void,
    children: React.ReactNode;
};

const Modal: React.FC<PropsType> = ({ activeModal, setActiveModal, children }) => {
    
    return (
        <div className={activeModal ? "modal active" : "modal" }>
            <div className={activeModal? "modal__content active" : "modal__content"}>
                {children}
            <img className="modal__icon" onClick={()=>setActiveModal(false)} src={cross} alt="cross"></img>
            </div>
        </div>
    );
};

export default Modal;