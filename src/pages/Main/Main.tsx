import React,{useState} from "react";
import "./Main.scss";
import About from "../../components/About/About";
import Rules from "../../components/Rules/Rules";
import Referrals from "../../components/Referrals/Referrals";

const Main: React.FC = () => {
  return (
    <main className="main">
      <About />
      <Rules />
      <Referrals />
   
    </main>
  );
};

export default Main;



