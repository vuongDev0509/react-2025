import React, { useState } from "react";

function ChatHeader({}){
    return(
        <div className="vv-chat-app-header"> 
            <div className="vv-chat-app-header__info"> 
                <div class="left"> 
                    <img
                        className="avatar"
                        src="https://kzmixw9suu7sfvxsb2ph.lite.vusercontent.net/placeholder.svg?height=40&width=40"
                        alt="Avatar"
                    />

                    <div className="info">
                        <div className="name">Như Quỳnh Lỳ @@</div>
                        <div className="status">Online</div>
                    </div>
                </div>

                <div className="actions">
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4" __v0_r="0,3877,3886"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video h-4 w-4" __v0_r="0,3990,3999"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;