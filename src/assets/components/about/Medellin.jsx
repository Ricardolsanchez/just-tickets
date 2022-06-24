import React, {useState} from 'react'
import './medellin.css'
import Currency from '../Currency/Currency';
import PickUpSeat from '../PickUpSeat/modalPickUp';

const Medellin = () => {
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
                    <td>Daddy Yankee</td>
                    <td><a href='https://movistararena.co/en/'>Movistar Arena</a></td>
                    <td><button className='btns' onClick={()=> setShowModalPickUp(true)}>Buy</button></td>
                </tr>

                <tr>
                    <td>May 31st 2022</td>
                    <td><span className='country__currency'>{currencyState}</span> $100 + 10</td>
                    <td>Bad Bunny</td>
                    <td><a href='https://movistararena.co/en/'>Movistar Arena</a></td>
                    <td><button className='btns' onClick={()=> setShowModalPickUp(true)}>Buy</button></td>
                    
                </tr>

                <tr>
                    <td>Nov 11th 2022</td>
                    <td><span className='country__currency'>{currencyState}</span> $50 + $20</td>
                    <td>karol G</td>
                    <td><a href='https://movistararena.co/en/'>Movistar Arena</a></td>
                    <td><button className='btns' onClick={()=> setShowModalPickUp(true)}>Buy</button></td>
                </tr>

                {showModalPickUp && <PickUpSeat setShowModalPickUp={setShowModalPickUp} />}
            </tbody>
        </table>
    </div>
  );
};

export default Medellin