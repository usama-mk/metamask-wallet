import React, { useState } from 'react'
import './CurrencyComponent.css'
import currencyLogo from '../../assets/currencyLogo.svg'

function CurrencyComponent() {
    const [bnb, setBnb] = useState("0.05")
    const [usd, setUsd] = useState("25")
    return (
        <div className="currencyComponent" >
            <div className="currencyData">
                <div className="currencyData1">{bnb} BNB</div>
                <div className="currencyData2">{usd} USD</div>
            </div>
            <div className="currencyLogo">
                <img src={currencyLogo} />
            </div>
        </div>
    )
}

export default CurrencyComponent
