import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DownButton from '../../components/DownButton/DownButton';
import "./Balance.scss";
import Modal from '../../components/Modal/Modal';
import PartnersModal from '../../components/PartnersModal/PartnersModal';
import { Link } from 'react-router-dom';
import back from "./images/Ic_return.svg";
import Icon from '../../components/Icon/Icon';
import IconsSvg from "./images/Icons.svg";


const data = [
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },
    {
        date: 258963214785,
        sum: 566987,
        goal: 56987412963,
        status: 852741963
    },

]


const Balance: React.FC = () => {
    return (
        <section className='balance'>
            <div className='balance__content'>
                <div className='balance__total'>
                    <div className='balance__total-wrapp'>
                        <div className='balance__all-time'>
                            <p>Всего за все время</p>
                            <span>1000000 ₽</span>
                        </div>
                        <div className='balance__now'>
                            <p>Текущий баланс</p>
                            <span>1000000 ₽</span>
                        </div>
                    </div>
                    {/* <Link className='footer__icon' to='/'>
                        <div className='balance__circle'>
                        <Icon classN={'balance__back'} id={'#back'} size={45} iconsSvg={IconsSvg} />
                        </div>
                    </Link> */}
                </div>
                <div className='balance__background'><div className='balance__history'>
                <DownButton text="История" />
                </div></div>
               
                <TableContainer className="balance__table-container" component={Paper}>
                    <Table sx={{ maxWidth: 1133 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Дата / Время</TableCell>
                                <TableCell >Сумма</TableCell>
                                <TableCell>Назначение</TableCell>
                                <TableCell>Статус</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row"> {row.date} </TableCell>
                                    <TableCell component="th" scope="row"> {row.sum} </TableCell>
                                    <TableCell component="th"><p>{row.goal}</p></TableCell>
                                    <TableCell component="th">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </section>
    );
};

export default Balance;