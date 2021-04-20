import React from 'react'
import CurrencyComponent from '../../Components/Currency/CurrencyComponent'
import './MainPage.css'

function MainPage() {
    return (
        <div className="mainPage">
        
        <div className="container">
{/* left Container */}
        <div className="leftContainer">

            <div className="ellipseMain"></div>
            <div className="chats" >
                chats
            </div>
            <div className="currencies">
                <CurrencyComponent/>
            </div>

            </div>

{/*Mid Container  */}
            <div className="midContainer">
                <div className="midContainer__heading">
                   
                <div className="midContainer__headingElipse"> </div>
                </div>
                <div className="midContainer__body">
                    body
                </div>
                <div className="midContainer__footer">
                    <div className="midContainer__footerInput">
                    <input placeholder="write something..." />
                    </div>
                </div>
            </div>

{/* Right Container */}
            <div className="rightContainer"></div>
                    </div>




{/* MainPage ends */}
         </div>
    )
}

export default MainPage
