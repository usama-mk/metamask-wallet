import React, { useState } from 'react'
import './SignupPage.css'
import modalLogo from '../../assets/modalLogo.svg';
import Modal from 'react-modal'
import exclamatoryLogo from '../../assets/exclamatory.svg'



function SignupPage() {
    const[modalIsOpen, setModalIsOpen]= useState(false);
    return (
        <div className="signupPage">
            <div className="ellipse">
            </div>

            <div className="content" >
               <div className="content__heading">
               Choose a username
               </div>
                <div className="content__input">
               <input placeholder="@username" />
                </div>
                <div onClick={()=> setModalIsOpen(true)} className="content__button" >
                    Signup
                </div>
            </div>

            

                


              
                <Modal className="Modal" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} >
                   
                   <div className="startModal">
                   <img src={exclamatoryLogo} />
                   <div className="headingModal" >Invalid Username</div>
                    
                   </div>
                   <div className="connectSectionModal" >
                <div onClick={()=>setModalIsOpen(false)} className="connectButtonModal" >
                    try again
                </div>
                </div>
               </Modal>
                
        </div>
    )
}

export default SignupPage
