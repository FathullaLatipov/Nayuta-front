import React from 'react';
import usa from '../img/flagusa.svg'
import europe from '../img/flageurope.svg'
import russia from '../img/flagrussia.svg'
import japan from '../img/flagjapan.svg'
import './Currency.scss';
import { useUserContext } from './context/home-context';

function Navbar() {

  const { rates } = useUserContext()

  return (
    <div className='currency' id='currency'>
      <div className='currencyContainer'>
        <div className='flags'>
          <img src={usa} alt='' />
          <p>  1 USD = {rates?.USD?.nbu_cell_price} UZS</p>
        </div>
        <div className='flags'>
          <img src={europe} alt='' />
          <p>  1 EUR = {rates?.EUR?.nbu_cell_price} UZS </p>
        </div>
        <div className='flags'>
          <img src={russia} alt='' />
          <p> 1 RUB = {rates?.RUB?.nbu_cell_price} UZS </p>
        </div>
        <div className='flags' id='japan'>
          <img src={japan} alt='' />
          <p> 1 YEN = {rates?.JPY?.nbu_cell_price} UZS </p>
        </div>
      </div>
    </div>

  );
}

export default Navbar;
