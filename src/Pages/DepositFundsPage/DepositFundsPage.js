import React, { useState } from 'react'
import './DepositFundsPage.css'
import Modal from 'react-modal'
import exclamatoryLogo from '../../assets/exclamatory.svg'
import { useHistory } from "react-router-dom";

function DepositFundsPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [bnbInput, setBnbInput] = useState("");
    var history = useHistory();

    const handleBnbInput = (e) => {
        setBnbInput(e.target.value);
    }

    const handleDeposit = () => {
        if (bnbInput < 0.01) {
            setModalIsOpen(true)
        }
        else {
            //    window.location.assign("/mainpage")
            history.push("/mainpage")
        }
    }
    return (
        <div className="DepositFundsPage">
            <div className="ellipse">
            </div>

            <div className="contentDeposit" >
                <div className="content__headingDeposit">
                    Deposit <span>BNB</span>
                </div>
                <div className="content__subHeading">0.01 BNB minimum to prevent spam</div>
                <div className="content__inputDeposit">
                    <input type="number" placeholder="0.01" onChange={handleBnbInput} value={bnbInput} />
                </div>
                <div onClick={handleDeposit} className="content__button" >
                    Deposit
            </div>
            </div>







            <Modal className="ModalDeposit" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >

                <div className="startModalDeposit">

                    <div className="headingModalsDeposit" >
                        <img src={exclamatoryLogo} />
                        <div className="headingModalDeposit" >Minimum Amount</div>
                    </div>
                    <div className="headingModalDeposit h2" >0.01 BNB</div>
                </div>

                <div className="connectSectionModalDeposit" >
                    <div onClick={() => setModalIsOpen(false)} className="connectButtonModalDeposit" >
                        try again
            </div>
                </div>
            </Modal>

        </div>
    )
}

export default DepositFundsPage
