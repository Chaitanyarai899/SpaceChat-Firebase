import { useState } from "react";

const SendMsgs = ({ onSendMessage }) => {
  const [value, setValue] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter a valid message!");
      return;
    }

    try {
      await onSendMessage(value);
    } catch (error) {
      console.log(error);
    }

    setValue("");
  };

  return (
    <div className="fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex mx-auto">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
          placeholder="Enter your message"
        />
        <button type="submit" className="w-auto bg-black text-white rounded-r-lg px-5 text-sm">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMsgs;
