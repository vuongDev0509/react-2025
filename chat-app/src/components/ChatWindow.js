import React, { useState, useRef, useEffect } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import TypingIndicator from "./TypingIndicator";

const fakeResponses = [
    "Oh, that's interesting!",
    "Are you sure? @@",
    "I'll think about it!",
    "Haha ^__^",
    "Let's talk later!",
    "Wow, that's awesome!",
];
function ChatWindow({}){

    const [messages, setMessages] = useState([
        { text: "Hi! 👋", sender: "bot" },
    ]);

    const [isTyping, setIsTyping] = useState(false);

    const endRef = useRef(null);

    const scrollToBottom = () => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (text) => {
        if (!text.trim()) return;
        setMessages((prev) => [...prev, { text, sender: "user" }]);
        setIsTyping(true);
    
        setTimeout(() => {
            const randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
            setMessages((prev) => [...prev, { text: randomResponse, sender: "bot" }]);
            setIsTyping(false);
        }, 1500);
    };

    return(
        <div class="vv-chat-app__window"> 
            <ChatHeader />
            <MessageList messages={messages} endRef={endRef} />
            {isTyping && <TypingIndicator />}
            <MessageInput onSend={handleSend}/>
        </div>
    )
}

export default ChatWindow;