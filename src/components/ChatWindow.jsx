import React, { useRef, useEffect } from 'react'
import { RxAvatar } from "react-icons/rx";

export default function ChatWindow() {
    const messagesEndRef = useRef(null)

    // Dummy messages for demonstration
    const messages = [
        { id: 1, text: 'Hey there!', sender: 'other', time: '10:30 AM' },
        { id: 2, text: 'Hi! How are you?', sender: 'me', time: '10:31 AM' },
        // Add more messages as needed
    ]

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    return (
        <div className="h-full flex flex-col">
            {/* Chat header */}
            <div className="p-4 bg-two border-b-2 border-three flex items-center">
                <RxAvatar size={40} />
                <h3 className="ml-4 font-medium">John Doe</h3>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 bg-one">
                <div className="space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className="max-w-[70%] rounded-lg p-3 bg-two"
                            >
                                <p>{message.text}</p>
                                <span className="text-xs mt-1 block opacity-70">{message.time}</span>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Message input */}
            <div className="relative flex border-t-2 border-three">
                <input
                    type="text"
                    inputMode="text"
                    className="bg-one block flex-1 min-w-0 md:text-lg p-3 dark:bg-five"
                    placeholder="Type a message..."
                />
                <button
                    type='submit'
                    className='px-4 py-2 border-l-2 border-three hover:bg-three hover:text-one'
                >
                    Send
                </button>
            </div>
        </div >
    )
}
