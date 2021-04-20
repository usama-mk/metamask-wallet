import React from 'react'
import './CurrencyComponent.css'
import currencyLogo from '../../assets/currencyLogo.svg'

function CurrencyComponent() {
    return (
        <div className="currencyComponent" >
           <div className="currencyData">
                <div className="currencyData1">0.05 BNB</div>
                <div  className="currencyData2">25 USD</div>
           </div>
           <div className="currencyLogo">
                <img src={currencyLogo} />
           </div>
        </div>
    )
}

export default CurrencyComponent 
