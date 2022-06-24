import React from "react";
import './Currency.css'


function Currency ({ handleCurrency, currencyState }) {

  return (
    <>
      <div>
        <select 
        className="btn-currency"
        value={currencyState}
        onChange={(e) => {
          const selectedCountry= e.target.value;
          handleCurrency(selectedCountry);
        }}
        >
          <option value="COP">COP</option>
          <option value="USA ($25 + 5)">USA</option>
          <option value="EUR (€$28 + $7)">EUR</option>

        </select> 
      </div>
    </>
  );
}

export default Currency;
