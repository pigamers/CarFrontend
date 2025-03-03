import React from 'react'
import ChatSidebar from '../components/ChatSidebar'
import ChatWindow from '../components/ChatWindow'

export default function ChatsPage() {
    return (
        <div className="flex h-screen bg-one dark:bg-five font-graduate">
            <div className="w-full sm:w-1/3 md:w-1/4 border-r-4 border-three">
                <ChatSidebar />
            </div>
            <div className="hidden sm:block sm:w-2/3 md:w-3/4">
                <ChatWindow />
            </div>
        </div>
    )
}
