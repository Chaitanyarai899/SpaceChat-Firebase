import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();

  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} alt="avatar" />
          </div>
        </div>
        <div className="chat-header" style={{ color: "white" }}>
          {message.name}
        </div>
        {message.imgUrl ? (
          <div className="chat-image">
            <img src={message.imgUrl} alt="message" />
          </div>
        ) : (
          <div className="chat-bubble">{message.text}</div>
        )}
      </div>
    </div>
  );
};

export default Message;
