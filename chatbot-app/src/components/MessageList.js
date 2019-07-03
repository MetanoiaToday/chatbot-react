import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'protein',
        text: 'Eat me'
    },
    {
        senderId: 'fat',
        text: 'Avoid me'
    },
    {
        senderId: 'carbs',
        text: 'Burn me'
    },

]

export default function MessageList() {
    return (
        <div className="message-list">

            {DUMMY_DATA.map((message, index) => {
                return (
                    <div key={index} className="message">
                        <div className="message-username">{message.senderId}</div>
                        <div className="message-text">{message.text}</div>
                    </div>
                )
            })}

        </div>
    )
}
