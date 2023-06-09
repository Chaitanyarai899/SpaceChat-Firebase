const Msg = ({ message, response }) => {
  
    return (
      <>
        <div className="chat chat-start">
          <div className="chat-bubble">{message}</div>
        </div>
        {response && (
          <div className="chat chat-middle">
            <div className="chat-bubble">{response}</div>
          </div>
        )}
      </>
    );
  };
  
  export default Msg;
  