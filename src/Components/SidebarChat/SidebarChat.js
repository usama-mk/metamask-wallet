import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarChat.css'

function SidebarChat({ id, name }) {
    const [message, setMessage] = useState("Hey Peter, Thankyou...");

 

    return (
        // <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <div className="avatar" />
                <div className="sidebarChat__info">
                    <div className="sidebarChat__info__name" >{name}</div>
                    <p className="sidebarChat__info__message">{message}</p>
                </div>
            </div>
        // </Link>
    ); 
}

export default SidebarChat;