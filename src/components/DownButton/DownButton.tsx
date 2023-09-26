import React from 'react';
import down from "./images/Ic_down_Passive.png";
import "./DownButton.scss";

interface PropsType {
text:string
}

const DownButton: React.FC<PropsType> = ({text}) => {
    return (
        <div className="btn-down">
            <p className="main-font">{text}</p>
        <img src ={down} alt="down" ></img>
      </div>
    );
};

export default DownButton;