import React, { useState } from 'react';
import './AddReferralModal.scss';
import Icon from '../Icon/Icon';
import Slider from '@mui/material/Slider';
import Button from '../Button/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconsAbouteSvg from '../About/images/Icons.svg';
import { styled } from '@mui/material/styles';
import line1 from './images/Line_1.svg';
import line2 from './images/Line_2.svg';
import thumb from './images/thumb.svg';
import { Snackbar } from "@mui/material"


const marks = [
    {
        value: 0,
        label: '0%',

    },
    {
        value: 25,
        label: '25%',
        icon: thumb
    },
    {
        value: 50,
        label: '50%'
    },

    {
        value: 75,
        label: '75%'
    },

    {
        value: 100,
        label: '100%'
    },
];


const marksDiscounts = [
    {
        value: 0,
        label: '1мес'
    },
    {
        value: 20,
        label: '2мес'
    },
    {
        value: 40,
        label: '3мес'
    },

    {
        value: 60,
        label: '4мес'
    },

    {
        value: 80,
        label: '5мес'
    },
    {
        value: 100,
        label: '6мес'
    },
];



const IOSSlider = styled(Slider)(() => ({
    height: 2,
    '& .18fkqhq-MuiSlider-root': {
        color: '#16A382',
        width: '80%',
        height: 1,

    },



    '& .MuiSlider-markLabel': {
        top: 48,
        color: '#E5E7EB',
    },

    '& .MuiSlider-markLabelActive': {
        top: 48,
        color: '#16A382',
    },

    '& .MuiSlider-track': {
        height: 1,
        border: '1px solid #16A382',
    },


    '& .MuiSlider-rail': {
        opacity: 0.5,
        backgroundColor: '#E5E7EB',
    },


    '& .MuiSlider-mark': {
        backgroundColor: '#E5E7EB',
        height: 10,
        width: 1,
        top: 35,
        '&.MuiSlider-markActive': {
            opacity: 2,
            backgroundColor: '#16A382',
        },
    },
}));


const data = [
    {
        tarif: 'Тариф',
        partner: '000 ₽',
        referal: '000 ₽',
    },
    {
        tarif: 'Тариф',
        partner: '000 ₽',
        referal: '000 ₽',
    },
    {
        tarif: 'Тариф',
        partner: '000 ₽',
        referal: '000 ₽',
    },
]

function valuetext(value: number) {
    return `${value}°C`;
}

interface PropsType {
    setActiveAddReferralModal : (v: boolean) => void
}

const AddRefferralModal: React.FC<PropsType> = ({ setActiveAddReferralModal}) => {

    const [value, setValue] = React.useState<number[]>([0, 50]);
    const [openAlert, setOpenAlert] = useState(false);

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log(event)
        // setA(Number((event!.target as HTMLInputElement)!.value))

        setValue(newValue as number[]);
    };

    const cancel = () => {
        setActiveAddReferralModal(false);
    };
    const save = () => {
        setActiveAddReferralModal(false);
    };
    const fn = () => { }

    const handleClick = (v: string) => {
        setOpenAlert(true)
        navigator.clipboard.writeText(v);
    };

    return (
        <div className='addRefferralModal'>
            <div className='addRefferralModal__top-block'>
                <h2 className='addRefferralModal__title'>Добавить нового реферала</h2>
                <label className='addRefferralModal__description'>
                    <p className='small-font'>Описание:</p>
                    <input className='main-font' onChange={fn} type='text' placeholder='Поле ввода'></input>
                    <div onClick={() => handleClick('aaaaa')}>
                        <Icon classN='addRefferralModal__ic-copy' id='#copy' size={20} iconsSvg={IconsAbouteSvg} />
                        <Snackbar
                            message="скопировано"
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                            autoHideDuration={1000}
                            onClose={() => setOpenAlert(false)}
                            open={openAlert}
                        />
                    </div>
                </label>
            </div>
            <div className='addRefferralModal__bottom-block'>
                <div className='addRefferralModal__range'>
                    <div className='addRefferralModal__Сoefficient '>
                        <div className='Сoefficient__title'> <p className='small-font'>Установить коэффициент комиссии </p></div>

                        <IOSSlider
                            aria-label="Custom marks"
                            step={25}
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            valueLabelDisplay='off'
                            marks={marks}
                            onChange={handleChange}
                            value={value}
                        />
                    </div>

                    <div className='addRefferralModal__discounts '>
                        <div className='discounts__title'> <p className='small-font'>Период скидки для реферала </p></div>

                        <IOSSlider
                            step={20}
                            aria-label="Custom marks"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="off"
                            marks={marksDiscounts}
                        // onChange={handleChange}
                        />
                    </div>
                </div>

                <TableContainer className='addRefferralModal__tableContainer' component={Paper}>
                    <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                        <TableHead className='addRefferralModal__thead'>
                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>Партнер</TableCell>
                                <TableCell></TableCell>
                                <TableCell >Реферал</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='addRefferralModal__tbody'>
                            {data.map((row, i) => (
                                <TableRow
                                    className='addRefferralModal__tableRow'
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th">
                                        <div className='addRefferralModal__tableCell'>
                                            <span>{i + 1}.</span>
                                            <span>{row.tarif}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell component="th"><img src={line1}></img></TableCell>
                                    <TableCell component="th"> {row.partner}</TableCell>
                                    <TableCell component="th"><img src={line2}></img></TableCell>
                                    <TableCell component="th"> {row.referal}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='addRefferralModal__buttons'>
                    <Button fn={cancel} classN={'addRefferralModal__action settingsModal__save-btn main-font'} text={'Отменить'} id={''} iconsSvg={''} size={0}></Button>
                    <Button fn={save} classN={'addRefferralModal__action settingsModal__save-btn main-font'} text={'Сохранить'} id={''} iconsSvg={''} size={0}></Button>
                </div>
            </div>
        </div>
    );
};

export default AddRefferralModal;