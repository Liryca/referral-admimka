import React from "react";
import "./Rules.scss";
import Icon from "../Icon/Icon";
import IconsSvg from "./images/rulesIcon.svg";
import mark from "./images/Mark.svg";
// import down from "./images/Ic_down_Passive.png"
import DownButton from "../DownButton/DownButton";
import dot from './images/Ellipse.svg';


const Rules: React.FC = () => {
  return (
    <section className="rules">
      <div className="rules__background-wrapp">
        <div className="rules__background">
          <div className="rules__content">
            <DownButton text="Правила" />
            <div className="rules__info">
              <div className="rules__list">
                <ul className="rules__gallery">
                  <li className="rules__card" >
                    <p  className="card__top small-font">1</p>
                    <p className="card__bottom  small-font">  Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!   </p>
                  </li>
                  <li className="rules__card" >
                  <p  className="card__top  small-font">2</p>
                    <p className="card__bottom  small-font">  Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!   </p>
                  </li>
                  <li className="rules__card" >
                  <p  className="card__top  small-font">3</p>
                    <p className="card__bottom  small-font">  Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!   </p>
                  </li>
                </ul>
        
              </div>

              <div className="rules__dots">
                  <img src={dot} alt="dot"></img>
                  <img src={dot} alt="dot"></img>
                  <img src={dot} alt="dot"></img>
                </div>

              <div className="rules__block">
                <div className="block__row">
                  <img className="block__ic-mark" src={mark} alt="mark"></img>
                  <div className="block__text small-font">
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                  </div>
                </div>
                <div className="block__row">
                  <img className="block__ic-mark" src={mark} alt="mark"></img>
                  <div className="block__text  small-font">
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                  </div>
                </div>
                <div className="block__row">
                  <img className="block__ic-mark" src={mark} alt="mark"></img>
                  <div className="block__text  small-font">
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                    Откройте свой воучер и узнайте какую сумму вы получите. Нарада доступа на суммк до 1 000 USDT!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Rules;