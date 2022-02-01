import React, { useEffect, useState } from 'react'
import CurrencyComponent from '../../Components/Currency/CurrencyComponent'
import Message from '../../Components/Message/Message'
import SidebarChat from '../../Components/SidebarChat/SidebarChat'
import Modal from 'react-modal'
import modalLogo from '../../assets/balanceLogo.svg'
import copySvg from '../../assets/copy.svg'
import './MainPage.css'

function MainPage() {
    const [recentUsers, setRecentUsers] = useState([
        {
            name: "@valeriu",
            chatDetails: "senderChat"
        },
        {
            name: "@michael",
            chatDetails: "recipientChat"
        },
        {
            name: "@bitcoin",
            chatDetails: "senderChat"
        },
        {
            name: "@vienna",
            chatDetails: "recipientChat"
        }

    ]);

    const [messages, setMessages] = useState([
        {
            "message": "Hi",
            "messageDetails": "receiver"
        },
        {
            "message": "Hello",
            "messageDetails": "sender"
        }

    ]);

    const [chatName, setChatName] = useState("");
    const [readReward, setReadReward] = useState("");
    const [replyReward, setReplyReward] = useState("");
    const [icebreaker, setIcebreaker] = useState("");
    const [userBnb, setuserBnb] = useState("0.05");
    const [userUsd, setUserUsd] = useState("25");
    const [link, setlink] = useState("http://icebreaker.money/1derw32d");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [linkPopUp, setLinkPopUp] = useState(false);

    const handleReadRewardInput = (e) => {
        setReadReward(e.target.value)
    }

    const handleReplyRewardInput = (e) => {
        setReplyReward(e.target.value)
    }

    const handleIceBreakerInput = (e) => {
        setIcebreaker(e.target.value)
    }

    const handleNewChat = () => {
        window.location.reload();
    }

    const handleKeyDown = (e) => {
        var currentMessages = {};
        if (e.key === 'Enter') {
            currentMessages = {
                "message": document.getElementById("sendMessageInput").value,
                "messageDetails": "sender"
            };
            setMessages((prev) => {
                return [...prev, currentMessages]
            })
            document.getElementById("sendMessageInput").value = ""
        }


    }

    return (
        <div className="mainPage">

            <div className="container">
                {/* left Container */}
                <div className="leftContainer">

                    <div className="ellipseMainContainer">
                        <div className="ellipseMain"></div>
                    </div>
                    <div className="chats" >
                        {recentUsers.map((recentUser => {
                            return (
                                <div onClick={() => setChatName(recentUser.name)}>

                                    <SidebarChat name={recentUser.name} chatDetails={recentUser.chatDetails} />
                                </div>
                            );

                        }))}

                    </div>

                    <div className="newChat">
                        <div className="newChatButton" onClick={handleNewChat} >
                            new chat
                    </div>
                    </div>


                </div>

                {/*Mid Container  */}
                <div className="midContainer">
                    <div className="midContainer__heading">

                        <div className="midContainer__headingElipse"> </div> <div className="midContainer__heading__chatName">{chatName}</div>
                    </div>
                    <div className="midContainer__body">

                        {messages.map((message => {
                            return <Message message={message.message} messageSide={message.messageDetails} />
                        }))}

                    </div>
                    <div className="midContainer__footer">
                        <div className="midContainer__footerInput">
                            <input placeholder="write something..." onKeyDown={handleKeyDown} id="sendMessageInput" />
                        </div>
                    </div>
                </div>

                {/* Right Container */}
                <div className="rightContainerWrapper">
                    <div className="currencies" onClick={() => setModalIsOpen(true)}>
                        <CurrencyComponent />
                    </div>
                    <div className="rightContainer">
                        <div className="rightContainer__configureMsg">
                            <div className="rightContainer__configureMsg__heading">
                                Configure Message
                        </div>

                            <div className="rightContainer__readReward">
                                <div className="rightContainer__readReward__heading">
                                    read reward
                            </div>
                                <div className="rightContainer__readReward__input">
                                    <input onChange={handleReadRewardInput} value={readReward} />
                                </div>

                            </div>

                            <div className="rightContainer__readReward">
                                <div className="rightContainer__readReward__heading">
                                    reply reward
                            </div>
                                <div className="rightContainer__readReward__input">
                                    <input onChange={handleReplyRewardInput} value={replyReward} />
                                </div>
                            </div>

                            <div className="rightContainer__unlockReward">
                                <div className="rightContainer__unlockReward__heading">
                                    icebreaker
                            </div>
                                <div className="rightContainer__unlockReward__input">
                                    <input placeholder="set password" onChange={handleIceBreakerInput} value={icebreaker} />
                                </div>
                            </div>


                        </div>

                        <div className="rightContainer__send">
                            <div className="rightContainer__send__button" onClick={() => setLinkPopUp(true)} >Send</div>
                        </div>
                    </div>
                </div>




                {/* Container ends */}
            </div>

            <Modal className="ModalWithdraw" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
                <div className="headingModalWithdraw" >Balance</div>


                <div className="modalWithdraw__details" >
                    <img src={modalLogo} alt="" />
                    <div className="modalWithdraw__details__info">
                        <div className="modalWithdraw__details__info__bnb">
                            {userBnb} <span className="info__bnb" >BNB</span>
                        </div>
                        <div className="modalWithdraw__details__info__usd">
                            ~{userUsd} <span className="info__usd" >USD</span>
                        </div>
                    </div>
                </div>

                <div className="ModalWithdraw__buttons">
                    <div className="ModalWithdraw__buttons__deposit">
                        deposit
                   </div>

                    <div className="ModalWithdraw__buttons__withdraw">
                        withdraw
                    </div>

                </div>
            </Modal>

            {/* link pop up */}
            <Modal className="linkModal" isOpen={linkPopUp} onRequestClose={() => setLinkPopUp(false)} >
                <div className="linkModal__link">
                    {link}
                </div>

                <div className="linkModal__copyLink" onClick={() => { navigator.clipboard.writeText(link) }} >
                    <img className="linkModal__copyLink__image" src={copySvg} alt="" />
                    <div className="linkModal__copyLink__copy">copy</div>
                </div>
            </Modal>
            {/* MainPage ends */}
        </div>
    )
}

export default MainPage
