import { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";
import SideNav from "../components/SideNav";


const ChatRoom = () => {
  const [collectionName, setCollectionName] = useState("Nebula");
  console.log(collectionName)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // adjust the width value to your needs
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onChatRoomClick = (name) => {
    console.log('Selected chat room:', name);
    setCollectionName(name);
  };
  
  

  return (
    <div className="flex">
      {!isMobile && <SideNav onChatRoomClick={onChatRoomClick} />}
      <div className="flex-1">
      <ChatBox collectionName={collectionName.toString()} />
      <SendMessage collectionName={collectionName.toString()} />
      </div>
    </div>
  );
};

export default ChatRoom;
