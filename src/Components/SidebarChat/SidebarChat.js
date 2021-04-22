import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarChat.css'

function SidebarChat({ id, name, chatDetails }) {
    const [message, setMessage] = useState("Hey Peter, Thankyou aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");



    return (
        // <Link to={`/rooms/${id}`}>
        <div className={`sidebarChat ${chatDetails}`}>
            <div className="avatar"></div>
            <div className="sidebarChat__info">
                <div className="sidebarChat__info__name" >{name}</div>
                <p className="sidebarChat__info__message">{message}</p>
            </div>
        </div>
        // </Link>
    );
}

export default SidebarChat;
