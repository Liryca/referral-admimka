import React from 'react';
import "./ShareModal.scss";
import logo from './images/ic_logo.svg';
import facebook from './images/facebook.svg';
import instagramm from './images/nstagram.svg'
import telegramm from './images/telegram.svg';
import vk from './images/wk.svg';
import { WhatsApp } from '@mui/icons-material';
import whatsapp from './images/whatsapp.svg';

const ShareModal: React.FC = () => {
    return (
        <div className='shareModal'>
            <img className='shareModal__logo' src={logo}></img>

            <div className='shareModal__id'>
                <p className='small-font'>Referral ID</p>
                <p className='shareModal__text '>12345678</p>

            </div>
            <div className='shareModal__text shareModal__p'>Поделиться </div>
            <div className='shareModal__links'>
                <a
                    className="btn_telegram_share"
                    href="https://telegram.me/share/url?url=ВАШ_URL&text=Referral ID12345678" target="_blank">
                    <img src={telegramm} alt=''></img>
                </a>
                <a className='btn_whatsapp_share'
                    href={`https://wa.me/?text=Referral ID12345678`} target="_blank">
                    <img src={whatsapp} alt='whatsapp'></img>
                </a>

                <a className='btn_whatsapp_share'
                    href='https://www.facebook.com/sharer/sharer.php?u=Referral ID12345678 'target="_blank">
                    <img src={facebook} alt='facebook'></img>
                </a>

                <a   className='btn_whatsapp_share'
                    href="http://vkontakte.ru/share.php?url=Referral ID12345678" target="_blank">
                        <img src={vk} alt=''></img>
                    </a>

                <img src={instagramm} alt=''></img>

            </div>
        </div>

    );
};

export default ShareModal;