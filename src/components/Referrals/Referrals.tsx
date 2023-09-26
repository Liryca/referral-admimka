import React, { useMemo } from "react";
import "./Referrals.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = [
    {
        id: '1111111177777',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '1111111196',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '11111111777',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '111111117',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '111111118',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '1111111177777',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '1111111196',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '11111111777',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '111111117',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
    {
        id: '111111118',
        tarif: 255896,
        bonuse: 5899412,
        date: 258963214785,

    },
]


const Referrals: React.FC = (): any => {


    return (
        <section className="referrals">
            <div className="refferals__content">
                <h2 className="refferals__title main-font" >Рефералы</h2>
                <TableContainer className="refferals__table-container" component={Paper}>
                    <Table sx={{ maxWidth: 809 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>User ID реферала</TableCell>
                                <TableCell >Тариф</TableCell>
                                <TableCell >Заработано реферальных<br />бонусов</TableCell>
                                <TableCell>Дата регистрации</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row"> {row.id} </TableCell>
                                    <TableCell component="th" scope="row"> {row.tarif} </TableCell>
                                    <TableCell component="th"><p>{row.bonuse}</p></TableCell>
                                    <TableCell component="th">{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
};

export default Referrals;
