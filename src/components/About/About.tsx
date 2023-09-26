import React, { useState } from "react";
import "./About.scss";
import Button from "../Button/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import IconsSvg from './images/Icons.svg';
import { changeModalShow } from "../../store/modal/action";
import Icon from "../Icon/Icon";
import Modal from '../Modal/Modal';
import SettingsModal from '../SettingsModal/SettingsModal';
import ShareModal from '../ShareModal/ShareModal';


const About: React.FC = () => {

  const [activeSettingsModal, setactiveSettingsModal] = useState(false);
  const [activeShareModal, setactiveShareModal] = useState(false);


  return (
    <section className="about">
      {/* <div> <SnackbarProvider autoHideDuration={2000} />  </div> */}
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
              onClick={() =>setactiveSettingsModal(true)}
              className="small-font right-block__changedId">
              <p> Изменить настройки</p>
              <Icon classN={"right-block__icon"} id="#Ic_right_Passive" size={20} iconsSvg={IconsSvg}/>
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
          <label className="right-block__id">
            <p className="small-font">Referral ID</p>
            <input
              className="small-font"
              value={"451554565"}
              type="text">
            </input>
            <CopyToClipboard
              text="451554565"
              onCopy={() => enqueueSnackbar("copied")}>
              <Icon classN="right-block__ic-copy" id="#copy" size={17} iconsSvg={IconsSvg}/>
            </CopyToClipboard>
          </label>
          <label className="right-block__link">
            <p className="small-font">Реферальная ссылка</p>
            <input
              className="small-font"
              value={"https://accontsaaa59.43645"}
              type="text" >
            </input>
            <CopyToClipboard
              text="https://accontsaaa59.43645"
              onCopy={() => enqueueSnackbar("copied")}>
              <Icon classN="right-block__ic-copy" id="#copy" size={17} iconsSvg={IconsSvg}/>
            </CopyToClipboard>
          </label>
        </div>
        <div className="right-block__row">
          <Button
            fn={() =>setactiveShareModal(true)}
            classN="right-block__share main-font"
            id='#🦆 ic_share'
            text="Поделиться"
            iconsSvg={IconsSvg}
            size={22}
          />
        </div>
      </div>
      <Modal activeModal={activeShareModal} setActiveModal={setactiveShareModal}><ShareModal /></Modal>
      <Modal activeModal={activeSettingsModal} setActiveModal={setactiveSettingsModal}><SettingsModal  setActiveModal={setactiveSettingsModal}/></Modal>
    </section>
  );
};

export default About;
