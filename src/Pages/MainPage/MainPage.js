import React, { useEffect, useState } from 'react'
import CurrencyComponent from '../../Components/Currency/CurrencyComponent'
import Message from '../../Components/Message/Message'
import SidebarChat from '../../Components/SidebarChat/SidebarChat'
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

    ])

    const [chatName, setChatName] = useState("");

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
                    <div className="newChatButton" >
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
                    <div className="currencies">
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
                                    <input />
                                </div>

                            </div>

                            <div className="rightContainer__readReward">
                                <div className="rightContainer__readReward__heading">
                                    reply reward
                            </div>
                                <div className="rightContainer__readReward__input">
                                    <input />
                                </div>
                            </div>

                            <div className="rightContainer__unlockReward">
                                <div className="rightContainer__unlockReward__heading">
                                    unlock reward
                            </div>
                                <div className="rightContainer__unlockReward__input">
                                    <input placeholder="set password" />
                                </div>
                            </div>


                        </div>

                        <div className="rightContainer__send">
                            <div className="rightContainer__send__button">Send</div>
                        </div>
                    </div>
                </div>




            {/* Container ends */}
            </div>
            {/* MainPage ends */}
        </div>
    )
}

export default MainPage
