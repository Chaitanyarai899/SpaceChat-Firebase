import { useState } from "react";
import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";
import SideNav from "../components/SideNav";

const ChatRoom = () => {
  const [collectionName, setCollectionName] = useState("messages");

  const handleChatRoomClick = (name) => {
    setCollectionName(name);
  };

  return (
    <div className="flex">
      {/*<SideNav onChatRoomClick={handleChatRoomClick} />*/}
      <div className="flex-1">
        <ChatBox collectionName={collectionName} />
        <SendMessage collectionName={collectionName} />
      </div>
    </div>
  );
};

export default ChatRoom;
