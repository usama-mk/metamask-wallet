import React, { useState } from 'react'
import './SignupPage.css'
import Modal from 'react-modal'
import exclamatoryLogo from '../../assets/exclamatory.svg'



function SignupPage() {
    const[modalIsOpen, setModalIsOpen]= useState(false);
    return (
        <div className="signupPage">
            <div className="ellipse">
            </div>

            <div className="contentSignup" >
               <div className="contentSignup__heading">
               Choose a <span>username</span> 
               </div>
                <div className="contentSignup__input">
               <input placeholder="@username" />
                </div>
                <div onClick={()=> setModalIsOpen(true)} className="contentSignup__button" >
                    Signup
                </div>
            </div>

            

                


              
                <Modal className="ModalSignup" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} >
                   
                   <div className="startModalSignup">
                   <img src={exclamatoryLogo} />
                   <div className="headingModalSignup" >Invalid Username</div>
                    
                   </div>
                   <div className="connectSectionModalSignup" >
                <div onClick={()=>setModalIsOpen(false)} className="connectButtonModalSignup" >
                    try again
                </div>
                </div>
               </Modal>
                
        </div>
    )
}

export default SignupPage
