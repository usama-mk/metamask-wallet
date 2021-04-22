import React, { useState } from 'react'
import './SignupPage.css'
import Modal from 'react-modal'
import exclamatoryLogo from '../../assets/exclamatory.svg'
import { useHistory } from "react-router-dom";




function SignupPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [username, setUsername] = useState("");
    let history = useHistory();
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleSignup = () => {
        var letters = /^[0-9a-zA-Z-@]+$/;
        if (username.match(letters) && username.charAt(0) == "@" && username.charAt(1)) {
            setUsername("")
            //    window.location.assign("/depositfunds")
            history.push("depositfunds")
        }
        else {
            setModalIsOpen(true)
        }
    }
    return (
        <div className="signupPage">
            <div className="ellipse">
            </div>

            <div className="contentSignup" >
                <div className="contentSignup__heading">
                    Choose a <span>username</span>
                </div>
                <div className="contentSignup__input">
                    <input placeholder="@username" onChange={handleUsername} value={username} />
                </div>
                <div className="contentSignup__button" onClick={handleSignup} >
                    Signup
                </div>
            </div>







            <Modal className="ModalSignup" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >

                <div className="startModalSignup">
                    <img src={exclamatoryLogo} />
                    <div className="headingModalSignup" >Invalid Username</div>

                </div>
                <div className="connectSectionModalSignup" >
                    <div onClick={() => setModalIsOpen(false)} className="connectButtonModalSignup" >
                        try again
                </div>
                </div>
            </Modal>

        </div>
    )
}

export default SignupPage
