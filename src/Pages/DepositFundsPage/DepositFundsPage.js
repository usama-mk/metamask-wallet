import React, { useState } from 'react'
import './DepositFundsPage.css'
import Modal from 'react-modal'
import exclamatoryLogo from '../../assets/exclamatory.svg'

function DepositFundsPage() {
    const[modalIsOpen, setModalIsOpen]= useState(false);
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
           <input placeholder="0.01" />
            </div>
            <div onClick={()=> setModalIsOpen(true)} className="content__button" >
                Deposit
            </div>
        </div>

        

            


          
            <Modal className="ModalDeposit" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} >
               
               <div className="startModalDeposit">

               <div className="headingModalsDeposit" >
               <img src={exclamatoryLogo} />
               <div className="headingModalDeposit" >Minimum Amount</div>
               </div>
               <div className="headingModalDeposit h2" >0.01 BNB</div>
               </div>

               <div className="connectSectionModalDeposit" >
            <div onClick={()=>setModalIsOpen(false)} className="connectButtonModalDeposit" >
                try again
            </div>
            </div>
           </Modal>
            
    </div>
    )
}

export default DepositFundsPage
