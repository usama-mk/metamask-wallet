import React from 'react'
import './Message.css'

function Message({ message, messageSide }) {
    return (
        <div className={`message ${messageSide}`}>
            {message}
        </div>
    )
}

export default Message
