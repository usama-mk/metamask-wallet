import React, { useEffect, useState } from 'react'
import CurrencyComponent from '../../Components/Currency/CurrencyComponent'
import Message from '../../Components/Message/Message'
import SidebarChat from '../../Components/SidebarChat/SidebarChat'
import './MainPage.css'

function MainPage() {

    const[messages, setMessages]= useState([
        {"message": "Hi",
        "messageDetails": "receiver"},
        {"message": "Hello",
        "messageDetails": "sender"}
         
    ])
    const handleKeyDown=(e)=>{
        var currentMessages=messages;
        if (e.key === 'Enter') {
            currentMessages.push({
                "message": document.getElementById("sendMessageInput").value,
                "messageDetails": "sender"
            });
            setMessages(currentMessages)
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
                        <SidebarChat name="@valeriu"/>
                        <SidebarChat name="@michael"/>
                        <SidebarChat name="@bitcoin"/>
                        <SidebarChat name="@vienna"/>

            </div>
                    <div className="currencies">
                        <CurrencyComponent />
                    </div>

                </div>

                {/*Mid Container  */}
                <div className="midContainer">  
                    <div className="midContainer__heading">

                        <div className="midContainer__headingElipse"> </div>
                    </div>
                    <div className="midContainer__body">
                        
                        {messages.map((message=>{
                            return <Message message={message.message} messageSide={message.messageDetails}/>
                        }))}  
                         
                </div>
                    <div className="midContainer__footer">
                        <div className="midContainer__footerInput">
                            <input placeholder="write something..." onKeyDown={handleKeyDown} id="sendMessageInput" />
                        </div>
                    </div>
                </div>

                {/* Right Container */}
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
            {/* MainPage ends */}
        </div>
    )
}

export default MainPage
