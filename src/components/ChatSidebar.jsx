import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'

export default function ChatSidebar() {
    const [searchQuery, setSearchQuery] = useState('')

    // Dummy data for demonstration
    const chats = [
        { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM' },
        { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', time: '9:45 AM' },
        { id: 3, name: 'Mike Johnson', lastMessage: 'The meeting is at 3 PM', time: '9:30 AM' },
        { id: 4, name: 'Sarah Wilson', lastMessage: 'Thanks for your help!', time: 'Yesterday' },
        // Add more chat items as needed
    ]

    // Filter chats based on search query
    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="h-full flex flex-col bg-two dark:bg-five">
            {/* Header */}
            <div className="p-4 bg-one border-b-2 border-three">
                <h2 className="text-xl font-semibold">Chats</h2>
            </div>

            {/* Search Box */}
            <div className="p-4 border-b dark:border-three">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search chats..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg dark:border-three focus:outline-none"
                    />
                    {/* Search Icon */}
                    <FaSearch
                        className="absolute left-3 top-3 h-5 w-5"
                    />
                    {/* Clear Search Icon (shows only when there's input) */}
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-2.5"
                        >
                            <IoCloseOutline className="h-6 w-6" />
                        </button>
                    )}
                </div>
            </div>

            {/* Chat list */}
            <div className="flex-1 overflow-y-auto">
                {filteredChats.length === 0 ? (
                    <div className="text-center p-4 dark:text-one">
                        No chats found
                    </div>
                ) : (
                    filteredChats.map((chat) => (
                        <div
                            key={chat.id}
                            className="flex items-center p-4 border-b cursor-pointer dark:border-three"
                        >
                            {/* Avatar */}
                            <RxAvatar className='dark:text-one' size={40}/>

                            {/* Chat details */}
                            <div className="ml-4 flex-1 dark:text-one">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-medium">{chat.name}</h3>
                                    <span className="text-sm">{chat.time}</span>
                                </div>
                                <p className="text-sm truncate">{chat.lastMessage}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
