import React from 'react';
import Icon from '../Icon/Icon';

interface PropsType {
    fn: () => void,
    classN: string,
    text: string,
    id: string,
    iconsSvg: string,
    size:number
}


const Button: React.FC<PropsType> = ({ fn, classN, text, id, iconsSvg,size }) => {
    return (
        <button
            onClick={() => fn()}
            className={classN}  >
            {iconsSvg && <Icon classN={'right-block__ic-share'} iconsSvg={iconsSvg} id={id} size={size} />}
            <div className='button-control-text'>{text}</div>
        </button>
    );
};

export default Button;