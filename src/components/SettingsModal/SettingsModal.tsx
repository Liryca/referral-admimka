import React, { useState } from 'react';
import "./SettingsModal.scss";
import Button from '../Button/Button';
import IconsSvg from "./images/icons.svg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Icon from '../Icon/Icon';
import AddRefferralModal from '../AddReferralModal/AddReferralModal';
import Modal from '../Modal/Modal';


const data = [
    {
        procent: 56987,
        desription: 'Описание описание описание описание',
        link: 'http//741852963ertyuiodfg',
        action: [],
    },
    {
        procent: 56987,
        desription: 'Описание описание описание описание',
        link: 'http//741852963ertyuiodfg',
        action: [],
    },

]

interface PropsType{
    setActiveModal: (v: boolean) => void;
}

const SettingsModal: React.FC<PropsType> = ({setActiveModal}) => {

    const [activeAddReferralModal, setActiveAddReferralModal] = useState(false);

    const addReferal = () => {
        setActiveAddReferralModal(true)
    }

    const saveSettings = () => {
        setActiveModal(false)
    }


    return (
        <div className='settingsModal'>
            <div className='settingsModal__cup'>
                <div className='settingsModal__cup-content'>
                    <div className='settingsModal__cup-text'>
                        <h2 className='settingsModal__cup-title'>Выбрать реферала</h2>
                        <p className='small-font'>Количество рекламных ссылок, которые можно создать: 10 </p>
                    </div>
                    <Button
                        fn={addReferal}
                        classN={'settingsModal__add-btn main-font'}
                        text={'Добавить реферала'}
                        id={'#plus'}
                        iconsSvg={IconsSvg}
                        size={14}
                    />
                </div>
            </div>
            <div className='settingsModal__content'>
                <TableContainer className='settingsModal__tableContainer' component={Paper}>
                    <Table sx={{ maxWidth: 775 }} aria-label="simple table">
                        <TableHead className='settingsModal__thead'>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>Вы получите /<br />друзья получат</TableCell>
                                <TableCell >Кол-во & описание</TableCell>
                                <TableCell >Реферальная ссылка</TableCell>
                                <TableCell >Действие</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='settingsModal__tbody'>
                            {data.map((row, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th">{i+1}</TableCell>
                                    <TableCell component="th"> {row.procent}</TableCell>
                                    <TableCell component="th"> {row.desription}</TableCell>
                                    <TableCell component="th"><p>{row.link}</p></TableCell>
                                    <TableCell component="th">
                                        <div className='settingsModal__icons'>
                                            <Icon classN='settingsModal__ic-edit' id='#edit' size={24} iconsSvg={IconsSvg} />
                                            <Icon classN='settingsModal__ic-delete' id='#delete' size={20} iconsSvg={IconsSvg} />

                                        </div></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button fn={saveSettings} classN={'settingsModal__save-btn main-font'} text={'Сохранить'} id={''} iconsSvg={''} size={14} />
            </div>
            
            <Modal activeModal={activeAddReferralModal} setActiveModal={setActiveAddReferralModal}><AddRefferralModal/></Modal>
        </div>
    );
};

export default SettingsModal;