import React, {useEffect, useState} from 'react';
import ScrollToBottom from "react-scroll-to-bottom";

function Chat(){

    const rendo = () => Math.floor(Math.random()*1000000000)
    const id = rendo()
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);


    const sendMessage = () => {
        if (currentMessage !== ""){
            const messageData = {
                id: id,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("")

        }
    }

    const deleteMessage = (deletedMessage) => {
      // console.log(deletedMessage)
        const newMessageList = messageList.filter((singleMessage) => singleMessage.id !== deletedMessage.id);
        setMessageList(newMessageList)
    }
// console.log(messageLis)
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
                key={rendo()}
              >
                <div>
                  <div className="message-content">
                    <p >{messageContent.message}</p>
                    <button onClick={()=>deleteMessage(messageContent)}>🗑</button>
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