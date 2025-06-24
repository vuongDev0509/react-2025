import React, { useState } from "react";

function MessageInput({ onSend }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSend(text)
        setText('')
    }

    return (
        <form className="vv-chat-app__message-input" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4" __v0_r="0,6592,6601"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
            </button>
        </form>
    );
}

export default MessageInput;
