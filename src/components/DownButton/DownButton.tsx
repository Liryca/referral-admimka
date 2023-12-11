import React from 'react';
import down from "./images/Ic_down.png";
import "./DownButton.scss";
import IconsSvg from './images/Ic_down.svg';
import Icon from '../Icon/Icon';


interface PropsType {
text:string
}

const DownButton: React.FC<PropsType> = ({text}) => {
    return (
        <div className="btn-down">
            <p className="main-font">{text}</p>
            <Icon classN='' id='#Ic_down' size={22} iconsSvg={IconsSvg} />
        {/* <img src ={down} alt="down" ></img> */}
      </div>
    );
};

export default DownButton;