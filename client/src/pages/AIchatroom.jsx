import { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import SendMsgs from "../components/Aicomponents/SendMsgs";
import SideNav from "../components/SideNav";

export const AiChatroom = () => {
  const [collectionName, setCollectionName] = useState("messages");
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
    <div className="flex flex-col h-screen">
      <div className="flex justify-center">
      </div>
      <div className="flex flex-1">
        {!isMobile && <SideNav onChatRoomClick={onChatRoomClick} />}
        <div className="flex-1" style={{ maxWidth: `calc(100% - ${sideNavWidth}px)`, overflow: "auto", marginLeft: sideNavWidth }}>
          <div className="flex flex-col h-full justify-between">
            <ChatBox collectionName={collectionName.toString()} />
            <div className="flex justify-center">
              <SendMsgs/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
