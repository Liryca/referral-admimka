import React, { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from './images/ic_logo.svg';
import PartnersModal from '../PartnersModal/PartnersModal';
import Modal from '../Modal/Modal';


const Header: React.FC = (): any => {
    
    const [activePartnersModal, setActivePartnersModal] = useState(false);
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <header className='header'>
            <div className='header__content'>
                <div className='header__left-block'>
                    <img className='header__logo' src={logo} alt='logo'></img>
                </div>
                {/* <Hamburger open={open} setOpen={setOpen} /> */}
                <div className='header__right-block'>
                    <div className='header__list'>
                    <NavLink className='header__link main-font' to={'/'}>Главная</NavLink>
                    <NavLink className='header__link main-font' to={'/balance'}>Баланс</NavLink>
                    <p onClick={() => setActivePartnersModal(true)} className='header__link main-font'>Список партнеров</p>
                    </div>
                    <div className='header__avatar'></div>
                </div>
            </div>
            <Modal activeModal={activePartnersModal} setActiveModal={setActivePartnersModal}><PartnersModal /></Modal>
    
        </header>
    );
};

export default Header;