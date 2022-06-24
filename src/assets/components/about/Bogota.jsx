import React, { useState } from 'react';
import './bogota.css'
import Currency from '../Currency/Currency'
import PickUpSeat from '../PickUpSeat/modalPickUp';

function Bogota (props) {
    const [currencyState, setCurrencyState] = useState("COP");
    const[showModalPickUp, setShowModalPickUp] = useState(false);

    const handleCurrency = (val) => {
    setCurrencyState(val);
}
  return (

    <div className="skill__wrapper">
        <Currency handleCurrency={handleCurrency}/>
        
        <table className='table'>
            <thead>
                <tr>
                    <th>Dates</th>
                    <th>Concert</th>
                    <th>Singer</th>
                    <th>Location</th>
                </tr>
            </thead> 

            <tbody>
            <tr>
                    <td>Jul 23th 2022</td>
                    <td><span className='country__currency'>{currencyState}</span> $150 + $10</td>
                    <td>Gorillaz</td>
                    <td><a href='https://movistararena.co/en/'>Movistar Arena</a></td>
                    <td><button className='btns'onClick={()=> setShowModalPickUp(true)}>Buy</button></td>
                </tr>

                <tr>
                    <td>May 31st 2022</td>
                    <td><span className='country__currency'>{currencyState}</span> $120 + 10</td>
                    <td>Harry Styles</td>
                    <td><a href='https://movistararena.co/en/'>Movistar Arena</a></td>
                    <td><button className='btns' onClick={()=> setShowModalPickUp(true)}>Buy</button></td>
                    
                </tr>

                <tr>
                    <td>Nov 11th 2022</td>
                    <td><span className='country__currency'>{currencyState}</span> $50 + $20</td>
                    <td>Dua Lipa</td>
                    <td><a href='https://movistararena.co/en/'>Movistar Arena</a></td>
                    <td><button className='btns' onClick={()=> setShowModalPickUp(true)}>Buy</button></td>
                </tr>

                {showModalPickUp && <PickUpSeat setShowModalPickUp={setShowModalPickUp} />}
            </tbody>
        </table>
    </div>
  );
};
export default Bogota;
