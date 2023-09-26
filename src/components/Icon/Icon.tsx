import React from 'react';
// import IconsSVG from './Icons.svg';


interface PropsType {
  classN: string,
  id: string,
  size: number,
  iconsSvg: string,

}

const Icon: React.FC<PropsType> = ({ classN, id, size, iconsSvg }) => (
  <svg className={classN} width={size} height={size}>
    <use href={`${iconsSvg}${id}`} />
  </svg>
);



export default Icon;

