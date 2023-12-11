import React, { useState } from "react";
import "./About.scss";
import Button from "../Button/Button";
import IconsSvg from './images/Icons.svg';
import Icon from "../Icon/Icon";
import Modal from '../Modal/Modal';
import SettingsModal from '../SettingsModal/SettingsModal';
import ShareModal from '../ShareModal/ShareModal';
import { Snackbar } from "@mui/material"
import AddRefferralModal from "../AddReferralModal/AddReferralModal";


const About: React.FC = () => {

  const [activeSettingsModal, setactiveSettingsModal] = useState(false);
  const [activeShareModal, setactiveShareModal] = useState(false);
  const [activeAddReferralModal, setActiveAddReferralModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = (v: string) => {
    setOpenAlert(true)
    navigator.clipboard.writeText(v);
  };

  return (
    <section className="about">

      <div className="about__left-block">
        <h1 className="left-block__title title">
          Пригласите друзей. Зарабатывайте криптовалюту вместе
        </h1>
        <p className="left-block__discription main-font">
          Получите до 40% комиссии за каждую сделку на Binance Spot, Futures, и
          Pool
        </p>
      </div>
      <div className="about__right-block">
        <div className="right-block__row">
          <div className="right-block__cup">
            <p className="small-font right-block__defaultId">Реферальный ID по умолчанию</p>
            <div
              onClick={() => setactiveSettingsModal(true)}
              className="small-font right-block__changedId">
              <p> Изменить настройки</p>
              <Icon classN={"right-block__icon"} id="#Ic_right_Passive" size={20} iconsSvg={IconsSvg} />
            </div>
          </div>
          <div className="right-block__procent">
            <div className="procent__your">
              <p className="main-font">Вы получите</p>
              <p className="big-font">20%</p>
            </div>
            <div className="procent__friends">
              <p className="main-font">Друзья получат</p>
              <p className="big-font">0%</p>
            </div>
          </div>
        </div>
        <div className="right-block__row">
          <div className="right-block__id">
            <p className="small-font">Referral ID</p>
            <div className="right-block__text small-font">123456789</div>
            <div onClick={() => handleClick('aaaaa')}>
              <Icon classN='addRefferralModal__ic-copy' id='#copy' size={20} iconsSvg={IconsSvg} />
              <Snackbar
                message="Скопировано"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={1000}
                onClose={() => setOpenAlert(false)}
                open={openAlert}
              />
            </div>
          </div>
          <div className="right-block__link">
            <p className="small-font">Реферальная ссылка</p>
            <div className="right-block__text small-font">https://accontsaaa59.43645</div>
            <div onClick={() => handleClick('aaaaa')}>
              <Icon classN='addRefferralModal__ic-copy' id='#copy' size={20} iconsSvg={IconsSvg} />
              <Snackbar
                message="Скопировано"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={1000}
                onClose={() => setOpenAlert(false)}
                open={openAlert}
              />
            </div>
          </div>
        </div>
        <div className="right-block__row">
          <Button
            fn={() => setactiveShareModal(true)}
            classN="right-block__share main-font"
            id='#🦆 ic_share'
            text="Поделиться"
            iconsSvg={IconsSvg}
            size={22}
          />
        </div>
      </div>
      <Modal activeModal={activeShareModal} setActiveModal={setactiveShareModal}><ShareModal /></Modal>
      <Modal activeModal={activeSettingsModal} setActiveModal={setactiveSettingsModal}>
        <SettingsModal setactiveSettingsModal={setactiveSettingsModal} setActiveAddReferralModal={setActiveAddReferralModal} />
      </Modal>
      <Modal activeModal={activeAddReferralModal} setActiveModal={setActiveAddReferralModal} >
        <AddRefferralModal setActiveAddReferralModal={setActiveAddReferralModal} />
      </Modal>

    </section>
  );
};

export default About;
