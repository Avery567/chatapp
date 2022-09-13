import React, {useState} from 'react';
import ScrollToBottom from "react-scroll-to-bottom";

function Chat(){

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = () => {
        if (currentMessage !== ""){
            const messageData = {
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("")

        }
    }

    return(
        <div className="chat-window">
            <div className="chat-header">
                 <p>Let's Chat</p>
            </div>
            <div className="chat-body">
            <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
            return (
              <div
                className="message"
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">you</p>
                  </div>
                </div>
              </div>
            );
          })}
           </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input type="text" 
                       value={currentMessage} 
                       placeholder="type here..." 
                       onChange={(e) => {
                        setCurrentMessage(e.target.value)
                          }}
                       onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                          }}
                />
                <button onClick={sendMessage}>Enter</button>    
            </div>


        </div>
    )
}


export default Chat