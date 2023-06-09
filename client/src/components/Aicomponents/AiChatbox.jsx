import Message from "../Message";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "./firebase";
import Navbar from "../Navbar";
import axios from "axios";
import SendMsgs from "./SendMsgs";

const AiChatbox = (props) => {
  const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "Aichatroom"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [props.collectionName]);

  const handleSendMessage = async (message) => {
    try {
      const response = await axios.post("http://localhost:5000/api/ask", {
        user_input: message,
      });

      const newMessage = {
        text: response.data.response,
        createdAt: new Date().toISOString(),
        id: response.data.id,
      };

      // Save the new message to Firestore
      await db.collection("AiChatroom").add(newMessage);

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/17494.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="pb-44 pt-20 containerWrap">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <SendMsgs onSendMessage={handleSendMessage} />
      </div>
    </>
  );
};

export default AiChatbox;
