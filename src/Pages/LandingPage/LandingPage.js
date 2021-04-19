import React, { useState } from 'react'
import Modal from 'react-modal'
import './LandingPage.css'
import modalLogo from '../../assets/modalLogo.svg';

function LandingPage() {
    const[modalIsOpen, setModalIsOpen]= useState(false);
    return (
        <div className="landingPage">
            <div className="ellipse">
            </div>

            <div className="heading" >
                Make your message heard.
                <div className="subHeading">
                reward your recipient for reading and replying
                </div>
            </div>

            

                <div className="walletHeading" >
                connect wallet to get started
                </div>

                <div className="connectSection" >
                <div onClick={()=> setModalIsOpen(true)} className="connectButton" >
                    Connect
                </div>
                </div>

              
                <Modal className="Modal" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} >
                   <div className="headingModal" >Connect Metamask</div>
                   <img src={modalLogo} />

                   <div className="walletHeadingModal" >
                connect wallet to get started
                </div>
                   <div className="connectSectionModal" >
                <div className="connectButtonModal" >
                    Connect
                </div>
                </div>
               </Modal>
                
        </div>
    )
}

export default LandingPage
