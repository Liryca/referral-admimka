import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Balance from './pages/Balance/Balance';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import PartnersModal from './components/PartnersModal/PartnersModal';
import Modal from './components//Modal/Modal';





const App: React.FC = () => {




  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/balance' element={<Balance />}></Route>
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
