import React, { useState } from 'react'
import './RecipientLandingPage.css'
import Modal from 'react-modal'
import modalLogo from '../../assets/modalLogo.svg';
import { useHistory } from "react-router-dom";


function RecipientLandingPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    var history = useHistory();

    const connectWallet = () => {
        history.push("/signup")
    }
    return (
        <div className="landingPageRecipient">
            <div className="ellipse">
            </div>

            <div className="headingRecipient" >
                Your time is valuable.
            <div className="subHeadingRecipient">
                    Recieve<span className="bold" > 10 USD </span>in crypto for reading and replying to this message.
            </div>
            </div>



            <div className="walletHeadingRecipient" >
                connect wallet to get started
            </div>

            <div className="connectSectionRecipient" >
                <div onClick={() => setModalIsOpen(true)} className="connectButtonRecipient" >
                    Connect
            </div>
            </div>


            <Modal className="ModalRecipient" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
                <div className="headingModalRecipient" >Connect Metamask</div>
                <img src={modalLogo} />

                <div className="walletHeadingModalRecipient" >
                    connect wallet to get started
            </div>
                <div className="connectSectionModalRecipient" >
                    <div className="connectButtonModalRecipient" onClick={connectWallet} >
                        Connect
            </div>
                </div>
            </Modal>

        </div>
    )
}

export default RecipientLandingPage
