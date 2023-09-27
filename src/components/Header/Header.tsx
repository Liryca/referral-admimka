import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from './images/ic_logo.svg';
import PartnersModal from '../PartnersModal/PartnersModal';
import Modal from '../Modal/Modal';


const Header: React.FC = (): any => {
    
    const [activePartnersModal, setactivePartnersModal] = useState(false);
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
                    <Link className='header__link main-font' to={'/balance'}>Баланс</Link>
                    <p onClick={() => setactivePartnersModal(true)} className='header__link main-font'>Список партнеров</p>
                    <div className='header__avatar'></div>

                </div>
            </div>

            <Modal activeModal={activePartnersModal} setActiveModal={setactivePartnersModal} ><PartnersModal /></Modal>
        </header>
    );
};

export default Header;