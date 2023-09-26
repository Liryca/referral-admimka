import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./PartnersModal.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import star from "./images/icon _star.svg";
import { RootState } from '../../store';
import { changeModalShow } from '../../store/modal/action';
import cross from "../Modal/images/Ic_cross.svg";



const data = [
    {
        number: 1,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 2,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 3,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 1,
        sum: 56987,
        goal: 4569874123
    }, {
        number: 1,
        sum: 56987,
        goal: 4569874123
    }
    , {
        number: 1,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 1,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 2,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 3,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 1,
        sum: 56987,
        goal: 4569874123
    }, {
        number: 1,
        sum: 56987,
        goal: 4569874123
    }
    , {
        number: 1,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 1,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 2,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 3,
        sum: 56987,
        goal: 4569874123
    },
    {
        number: 1,
        sum: 56987,
        goal: 4569874123
    }, {
        number: 1,
        sum: 56987,
        goal: 4569874123
    }
    , {
        number: 1,
        sum: 56987,
        goal: 4569874123
    }

]



const PartnersModal: React.FC = () => {

    return (
        <><div className='partnersModal'>
            <h2 className='partnersModal__title'>Рейтинг</h2>
            <TableContainer className='partnersModal__tableContainer' component={Paper}>
                <Table sx={{ maxWidth: 635, height: 100 }} aria-label="simple table">
                    <TableHead className='partnersModal__thead'>
                        <TableRow>
                            <TableCell align="right">№</TableCell>
                            <TableCell align="right">Сумма</TableCell>
                            <TableCell align="right">Назначение</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody className='partnersModal__tbody'>
                        {data.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right" component="th" scope="row">
                                    {i <= 2 ? <img src={star} alt='star'></img> : row.number}
                                </TableCell>
                                <TableCell align="right" component="th" scope="row"> {row.sum} </TableCell>
                                <TableCell align="right" component="th"><p>{row.goal}</p></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </>
    );
};

export default PartnersModal;