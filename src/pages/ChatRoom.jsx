import { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";
import SideNav from "../components/SideNav";

const ChatRoom = () => {
  const [collectionName, setCollectionName] = useState("Nebula");
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

  const sideNavWidth = isMobile ? 0 : 200; // adjust the width value to your needs

  return (
    <div className="flex">
      {!isMobile && <SideNav onChatRoomClick={onChatRoomClick} />}
      <div className="flex-1" style={{ maxWidth: `calc(100% - ${sideNavWidth}px)`, overflow: "auto", marginLeft: sideNavWidth }}>
        <div className="flex flex-col h-full">
          <ChatBox collectionName={collectionName.toString()} />
          <SendMessage collectionName={collectionName.toString()} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
